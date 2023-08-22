import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.floor(Math.random() * 1000).toString(),
      ...newExpenseData,
    };

    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
