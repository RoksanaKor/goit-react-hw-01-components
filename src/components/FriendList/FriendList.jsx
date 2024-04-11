import './friendList.css';
import React from 'react';


export const FriendList = ({ friends }) => {
 
 return (
  <ul className="friend-list">
   {friends.map((friend) => {
    const { avatar, name, isOnline, id } = friend;
    let bgDotColor;
    isOnline ? bgDotColor = "green" : bgDotColor = "red";
   
 return <li className="item" key={id}>
  <span className="status" style={{backgroundColor: bgDotColor}}></span>
  <img className="avatar" src={avatar} alt="Avatar"/>
  <p className="name">{name}</p>
</li>
})}
</ul>
 )
}