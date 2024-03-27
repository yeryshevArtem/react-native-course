import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    setExpenses: (expenses) => {},
    addExpense: ({ desciption, amount, date }) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, { description, amount, date }) => {}
});

function expensesReducer(state, action) {
    switch(action.type) {
        case 'ADD': {
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id }, ...state];
        }
        case 'SET': {
            return action.payload;
        }
        case 'DELETE': {
            return state.filter((expense) => expense.id !== action.payload);
        } 
        case 'UPDATE': {
            const id = action.payload.id;
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        }
        default: {
            return state;
        }
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({
            type: 'ADD',
            payload: expenseData
        })
    }

    function setExpenses(expenses) {
        dispatch({
            type: 'SET',
            payload: expenses
        })
    }

    function deleteExpense(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }

    function updateExpense(id, expenseData) {
        dispatch({
            type: 'UPDATE',
            payload: {
                id, 
                data: expenseData,
            }
        });
    }

    const value = {
        expenses: expensesState,
        addExpense,
        updateExpense,
        deleteExpense,
        setExpenses
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;