"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/pagination.module.scss";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}: PaginationProps) {
  const [maxPageButtons, setMaxPageButtons] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setMaxPageButtons(window.innerWidth > 1025 ? 10 : 5);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let startPage = currentPage > 4 ? currentPage - 4 : 1;

  if (startPage > totalPages - maxPageButtons) {
    startPage = Math.max(totalPages - maxPageButtons + 1, 1);
  }

  for (
    let i = startPage;
    i <= Math.min(startPage + maxPageButtons - 1, totalPages);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    maxPageButtons > 0 && (
      <div className={styles.pagination}>
        {currentPage !== 1 && (
          <>
            <button
              onClick={() => paginate(1)}
              className={styles.pageItem}
              aria-label="First Page"
            >
              <ChevronsLeft size={14} />
            </button>
            <button
              onClick={() => paginate(currentPage - 1)}
              className={styles.pageItem}
              aria-label="Previous Page"
            >
              <ChevronLeft size={14} />
            </button>
          </>
        )}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`${styles.pageItem} ${
              currentPage === number ? styles.active : ""
            }`}
          >
            {number}
          </button>
        ))}
        {currentPage !== totalPages && (
          <>
            <button
              onClick={() => paginate(currentPage + 1)}
              className={styles.pageItem}
              aria-label="Next Page"
            >
              <ChevronRight size={14} />
            </button>
            <button
              onClick={() => paginate(totalPages)}
              className={styles.pageItem}
              aria-label="Last Page"
            >
              <ChevronsRight size={14} />
            </button>
          </>
        )}
      </div>
    )
  );
}
