// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="pagination">
      <button onClick={() => changePage('first')}>First</button>
      <button onClick={() => changePage('previous')}>Previous</button>
      {renderPaginationButtons()}
      <button onClick={() => changePage('next')}>Next</button>
      <button onClick={() => changePage('last')}>Last</button>
    </div>
  );
};

export default Pagination;
