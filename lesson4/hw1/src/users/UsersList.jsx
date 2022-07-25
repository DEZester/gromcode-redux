import React from 'react';
import Pagination from './Pagination';
import User from './User';
import * as paginationActions from './users.actions';
import { connect } from 'react-redux';

const UsersList = ({ goNext, goPrev, currentPage, users }) => {
  const itemsPerPage = 3;
  const newCurrentPage = currentPage + 1;
  const startIndex = itemsPerPage * currentPage;
  const endIndex = itemsPerPage * newCurrentPage;
  const usersToRender = users.slice(startIndex, endIndex);

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

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goNext: paginationActions.goNext,
  goPrev: paginationActions.goPrev,
};

const connector = connect(mapState, mapDispatch);
const connectorUsers = connector(UsersList);
export default connectorUsers;
