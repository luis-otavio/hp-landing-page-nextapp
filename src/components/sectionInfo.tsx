import React, { useState } from 'react';

import { Card } from "./card"
import { Pagination } from './pagination';

import { CharactersType } from '@/types/characters';

import styles from "@/styles/sectionInfo.module.scss";

export function SectionInfo({ characters }: { characters: CharactersType[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <>
      <div className={styles.cardsGrid}>
        {currentItems.map((character) => (
          <Card key={character.id} character={character}/>
        ))}
      </div>
      <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={characters.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};
