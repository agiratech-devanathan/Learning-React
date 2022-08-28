import './expenses.css';
import Card from '../Card/card';
import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/expenseFilter';
import ExpensesList from '../ExpenseList/expensesList';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  //here Filtered the expense data based specific year
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses;