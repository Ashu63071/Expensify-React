import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// import ExpenseItem from './ExpenseItem';
function Expenses(prop){

    const [filteredYear , setFilteredYear] =  useState('2022');
    
    const filterChangeHandler =(selectedYear) =>{
      setFilteredYear(selectedYear);
      console.log(filteredYear);
    };

    const filteredExpenses = prop.item.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
    // console.log(filteredExpenses);

    return (
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        
      </Card>
    );
}

export default Expenses;