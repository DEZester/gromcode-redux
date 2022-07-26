import React from 'react';
import Pagination from './Pagination';
import User from './User';
import { connect } from 'react-redux';
import * as paginationActions from './pagination.action';
import { usersListSelectors, currentPageSelectors } from './users.selectors';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const itemsPerPage = 3;
  const newCurrentPage = currentPage + 1;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = newCurrentPage * itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);
  console.log(usersToRender);
  return (
    <div>
      <Pagination
        currentPage={newCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
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

const mapDispatch = {
  goNext: paginationActions.goNext,
  goPrev: paginationActions.goPrev,
};

const mapState = state => ({
  users: usersListSelectors(state),
  currentPage: currentPageSelectors(state),
});

export default connect(mapState, mapDispatch)(UsersList);
