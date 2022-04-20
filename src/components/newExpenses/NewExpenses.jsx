import React from 'react';
import ExpenseForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpenses = (props) => {

    function onSaveExpenseData(data){
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }

        props.addExpenseHandler(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
        </div>
    );
};

export default NewExpenses;
