import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (prop) => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  //   const titleInputHandler = (event) => {
  //     setUpdatedTitle(event.target.value);
  //   };

  //   const amountInputHandler = (event) => {
  //     setUpdatedAmount(event.target.value);
  //   };

  //   const dateInputHandler = (event) => {
  //     setUpdatedDate(event.target.value);
  //   };

  const userInputHandler = (key, value) => {
    if (key === "title") {
      setUpdatedTitle(value);
    } else if (key === "amount") {
      setUpdatedAmount(value);
    } else {
      setUpdatedDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: updatedTitle,
      amount: +updatedAmount,
      date: new Date(updatedDate),
    };

    prop.onSaveExpenseData(expenseData);
    setUpdatedTitle("");
    setUpdatedAmount("");
    setUpdatedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={updatedTitle}
            onChange={(event) => userInputHandler("title", event.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={updatedAmount}
            onChange={(event) => userInputHandler("amount", event.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max={currentDate}
            value={updatedDate}
            onChange={(event) => userInputHandler("date", event.target.value)}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
