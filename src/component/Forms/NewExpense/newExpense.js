import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/expenseForm";
import './newExpense.css';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpenseData(expenseData) // @here I sends the data to parent in this case app.js 
        setIsEditing(false)
    }
    //-----------------------------------------------
    //Editing Functionality for displaying  form
    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    //---------------------------------------------
    return (
        <div className="new-expense">
            {/* adding and cancelling the form based on the condition  */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;