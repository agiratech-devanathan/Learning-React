import React from "react";
import ExpenseForm from "../ExpenseForm/expenseForm";
import './newExpense.css';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }
        props.onAddExpenseData(expenseData) // @here I sends the data to parent in this case app.js 
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;