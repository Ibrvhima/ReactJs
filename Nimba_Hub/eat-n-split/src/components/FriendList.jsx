import React from "react";
import FriendItem from "./FriendItem";

export default function FriendList({ friends, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} onSelectFriend={onSelectFriend} />
      ))}
    </ul>
  );
}
