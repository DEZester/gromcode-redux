import React, { useState } from 'react';
import Pagination from './Pagination';
import User from './User';

const UsersList = ({ users }) => {
  const [currentPage, setCurPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = users.length;

  const goPrev = () => {
    return setCurPage(currentPage - 1);
  };

  const goNext = () => {
    return setCurPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        goPrev={goPrev}
        goNext={goNext}
      />
      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
