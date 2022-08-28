import React, { useState } from "react";
import './expenseForm.css';
const ExpenseForm = (props) => {
    //titleHandler
    const [enteredTitle, setEnteredTitle] = useState('');
    //amountHandler
    const [enteredAmount, setEnteredAmount] = useState('');
    //dateHandler
    const [enteredDate, setEnteredDate] = useState('');


    //Alternative ways of using multiple useState, we make objects
    // const [userInputs, setUserInputs] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',

    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        //alternative way of overwrite the input value
        // setUserInputs({
        //     //copying the userInputs object  and overwritting 
        //     ...userInputs,
        //     enteredTitle: event.target.value
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //alternative way of overwrite the input value
        // setUserInputs({
        //     //copying the userInputs object  and overwritting 
        //     ...userInputs,
        //     enteredAmount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        //alternative way of overwrite the input value
        // setUserInputs({
        //     //copying the userInputs object  and overwritting 
        //     ...userInputs,
        //     enteredDate: event.target.value
        // })
        //one more alternative
        // setUserInputs((previousState) => {
        //     return { ...previousState, enteredDate: event.target.value }
        // })

    };

    //Handling Form Submission
    const submitHandler = (event) => {
        event.preventDefault();
        //make all the form Input data are combined into single data object 
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData)
        //clear the all form inputs
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    };
    return (
        //Implements forms for add Expenese
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* Here we are going to do capture the input value
                 so that we are using onChange handler, 
                 titleChangeHandler is a handler function */}

                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}//two way data binding
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button> 
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;