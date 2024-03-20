'use client'

import React, { useEffect, useMemo, useState } from 'react';

import { Card } from "./card"
import { Search } from './search';
import { Pagination } from './pagination';
import { SwitchLayout } from './switchLayout';
import { OrderByButton } from './orderByButton';

import { CharactersType } from '@/types/characters';
import { convertDateStringToTimestamp } from '@/utils/formatDate';

import styles from "@/styles/sectionInfo.module.scss";

export function SectionInfo({ characters }: { characters: CharactersType[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isGrid, setIsGrid] = useState(true);
  const [orderBy, setOrderBy] = useState<string>('default');
  const [searchValue, setSearchValue] = useState('');

  const sortedAndFilteredCharacters = useMemo(() => {
    let filteredAndSorted = [...characters];

    if (searchValue.trim()) {
      filteredAndSorted = filteredAndSorted.filter(character =>
        character.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  
    if (orderBy === 'alive') {
      filteredAndSorted = filteredAndSorted.filter(character => character.alive);
    }

    return filteredAndSorted.sort((a, b) => {
      if (orderBy === "nameAz") {
        return a.name.localeCompare(b.name);
      } else if (orderBy === "nameZa") {
        return b.name.localeCompare(a.name);
      } else if (
        orderBy === "dateOfBirthASC" ||
        orderBy === "dateOfBirthDESC"
      ) {
        if (a.dateOfBirth && b.dateOfBirth) {
          const timestampA = convertDateStringToTimestamp(a.dateOfBirth);
          const timestampB = convertDateStringToTimestamp(b.dateOfBirth);
          return orderBy === "dateOfBirthASC"
            ? timestampA - timestampB
            : timestampB - timestampA;
        }
        return a.dateOfBirth ? -1 : 1;
      }

      return 0;
    });
  }, [characters, orderBy, searchValue]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedAndFilteredCharacters.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const toggleLayout = () => setIsGrid(!isGrid);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);
  
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className={styles.sectionOrderBy}>
        <SwitchLayout toggleLayout={toggleLayout} isGrid={isGrid} />
        <OrderByButton setOrderBy={setOrderBy} />
      </div>
      <div className={isGrid ? styles.cardsGrid : styles.cardsList}>
        {currentItems.map((character) => (
          <Card key={character.id} character={character} layout={isGrid} />
        ))}
      </div>
      {sortedAndFilteredCharacters.length > 0 ? (
        <div className={styles.totalCountAndPagination}>
          <div className={styles.totalCount}>Total: {sortedAndFilteredCharacters.length}</div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={sortedAndFilteredCharacters.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      ) : (
        <div className={styles.emptyItems}>
          Oops... No results found.
        </div>
      )}
    </>
  );
};
