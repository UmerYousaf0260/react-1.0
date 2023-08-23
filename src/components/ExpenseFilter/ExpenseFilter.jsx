import "./ExpenseFilter.css";

const ExpenseFilter = (prop) => {
  const selectValueHandler = (event) => {
    prop.onFilterChange(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter By Year</label>

        <select value={prop.selected} onChange={selectValueHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
