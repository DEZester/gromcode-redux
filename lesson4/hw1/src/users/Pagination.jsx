import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, itemsPerPage, totalItems }) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable =
    Math.ceil(totalItems / itemsPerPage) > currentPage || totalItems === 0;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? '←' : ''}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};

export default Pagination;
