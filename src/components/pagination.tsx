import React, { useEffect } from 'react';

import styles from '@/styles/pagination.module.scss'

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
  paginate 
}: PaginationProps) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxPageButtons = 10;
  let startPage = 1;

  if (currentPage > 4) {
    startPage = currentPage - 4;
    if (startPage > totalPages - maxPageButtons) {
      startPage = totalPages - maxPageButtons + 1;
    }
  }

  for (let i = startPage; i <= Math.min(startPage + maxPageButtons - 1, totalPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 && 
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1} 
          className="page-item"
        >
          &lt;
        </button>
      }
      {pageNumbers.map((number) => (
        <button 
          key={number}
          onClick={() => paginate(number)}
          className={`page-item ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
      {currentPage !== totalPages &&
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className="page-item"
        >
          &gt;
        </button>
      }
    </div>
  );
};
