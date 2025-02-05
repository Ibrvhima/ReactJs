import React, { useState } from "react";

export default function AddFriendForm({ setFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend() {
    if (!name) return;
    const newFriend = { id: Date.now(), name, image, balance: 0 };
    setFriends((friends) => [...friends, newFriend]);
    setName("");
  }

  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>🖼 Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <button type="button" className="button" onClick={handleAddFriend}>
        Add
      </button>
    </form>
  );
}
