import Expense from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return (
      <h3 style={{ textAlign: "center", padding: "40px" }}>
        No expense found.
      </h3>
    );
  }

  return (
    <ul>
      {props.item.map((expense) => (
        <Expense
          key={expense.id}
          name={expense.title}
          price={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
