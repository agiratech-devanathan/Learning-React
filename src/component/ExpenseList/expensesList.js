import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './expensesList.css';
const ExpensesList = (props) => {

    //method-3 displaying expense conditionally like return statement

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback" >Expense Not Found!</h2>
    }
    return (
    <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))}
    </ul>
    );

}


export default ExpensesList;