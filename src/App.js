import Card from "./components/UI/Card";
import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseList from "./components/Expense/ExpenseList";
import ExpenseChart from "./components/Expense/ExpenseChart";

function App() {
  const dummy_data = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // Behind the scene
  // return React.createElement(
  //   "div",
  //   { className: "expense-tracker" },
  //   React.createElement("h1", {}, "Expense Tracker"),
  //   React.createElement(Expense, {
  //     date: expenses[0].date,
  //     name: expenses[0].title,
  //     price: expenses[0].amount,
  //   })
  // );

  const [expenses, setExpenses] = useState(dummy_data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const [filterYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // console.log(filterYear);
  // console.log(dummy_data[0].date.getFullYear().toString());

  const filteredExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="expense-tracker">
      <h1>Expense tracker</h1>

      <NewExpense onAddExpense={addExpenseHandler} />

      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList item={filteredExpense} />
      </Card>
    </div>
  );
}

export default App;
