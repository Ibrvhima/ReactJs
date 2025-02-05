import React, { useState } from "react";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import SplitBillForm from "./SplitBillForm";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="container">
      <div className="sidebar">
        <FriendList friends={friends} onSelectFriend={setSelectedFriend} />
        <AddFriendForm setFriends={setFriends} />
      </div>

      {selectedFriend && (
        <SplitBillForm friend={selectedFriend} setFriends={setFriends} />
      )}
    </div>
  );
}
