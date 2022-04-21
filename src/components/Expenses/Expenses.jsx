import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import Expensefilter from './ExpenseFilter';
import Expenseslist from './ExpensesList';
import Expensechart from './ExpenseChart';

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2020');

  const filteredChangeHandler = selectedYear =>{
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses"> 
    <Expensefilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
    <Expensechart expenses={filteredExpenses} />
    <Expenseslist filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
