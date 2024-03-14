import ExpensesOutput from "../components/Expenses/ExpensesOutput";

function RecentExpenses() {
    return (
        <ExpensesOutput expensesPeriod="Last 7 days" />
    );
}

export default RecentExpenses;