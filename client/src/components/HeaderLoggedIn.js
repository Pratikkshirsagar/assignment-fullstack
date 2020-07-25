import React, { useEffect, useState, useContext } from 'react';

function HeaderLoggedIn(props) {
  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img
          className="small-header-avatar"
          src="https://gravatar.com/avatar"
        />
      </a>
      <button
        onClick={() => props.setLoggedIn(false)}
        className="btn btn-sm btn-secondary"
      >
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
