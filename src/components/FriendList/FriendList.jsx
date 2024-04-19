import './friendList.css';
import React from 'react';
import PropTypes from "prop-types";



export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        let bgDotColor;
        isOnline ? (bgDotColor = 'green') : (bgDotColor = 'red');

        return (
          <li className="item" key={id}>
            <span
              className="status"
              style={{ backgroundColor: bgDotColor }}
            ></span>
            <img className="avatar" src={avatar} alt="Avatar" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};


FriendList.propTypes = {
  avatar: PropTypes.string, 
  name: PropTypes.string, 
  isOnline: PropTypes.bool, 
  id: PropTypes.number
};