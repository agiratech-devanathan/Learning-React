import './expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/card';
import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/expenseFilter';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  //here Filtered the expense data based specific year
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  //Method-2 to display the  expense data conditionally
  //--------------------------------------------------------------
  let expenseContent = <p>No Expense Found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (

      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
    ));
  }
//-------------------------------------------------------------------
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
      {/* Method-2 to display the  expense data conditionally */}
      {expenseContent}

    </Card>
  )
}

export default Expenses;