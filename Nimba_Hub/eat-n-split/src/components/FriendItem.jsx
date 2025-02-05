import React from "react";

export default function FriendItem({ friend, onSelectFriend }) {
  return (
    <li className="friend-item">
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={friend.balance < 0 ? "red" : "green"}>
        {friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
          : `${friend.name} owes you ${friend.balance}€`}
      </p>
      <button className="button" onClick={() => onSelectFriend(friend)}>Select</button>
    </li>
  );
}
