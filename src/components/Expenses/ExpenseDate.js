import './ExpenseDate.css';

function ExpenseDate(prop){

    const month = new Intl.DateTimeFormat('en-US', {month:'long'}).format(prop.date);
    const day = prop.date.getDate();
    const year = prop.date.getFullYear();

    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        {/* <div className="expense-date__month">{prop.date.getMonth()}</div> */}
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
}

export default ExpenseDate;