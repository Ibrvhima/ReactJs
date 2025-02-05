import React, { useState } from "react";

export default function SplitBillForm({ friend, setFriends }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoPays, setWhoPays] = useState("You");

  function handleSplitBill() {
    if (!billValue || !yourExpense) return;

    const amountOwed = billValue - yourExpense;
    setFriends((friends) =>
      friends.map((f) =>
        f.id === friend.id
          ? { ...f, balance: whoPays === "You" ? f.balance + amountOwed : f.balance - amountOwed }
          : f
      )
    );
  }

  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {friend.name.toUpperCase()}</h2>

      <label>💰 Bill value</label>
      <input type="number" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))} />

      <label>🧑 Your expense</label>
      <input type="number" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value))} />

      <label>🧑‍🤝‍🧑 {friend.name}'s expense</label>
      <input type="number" disabled value={billValue - yourExpense} />

      <label>🤔 Who is paying the bill</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="You">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>

      <button type="button" className="button" onClick={handleSplitBill}>
        Split bill
      </button>
    </form>
  );
}
