import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 99.29,
        date: new Date('2022-05-12')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-03-19')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 2.25,
        date: new Date('2004-02-31')
    },
    {
        id: 'e5',
        description: 'Another',
        amount: 44.25,
        date: new Date('2009-05-22')
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 99.29,
        date: new Date('2022-05-12')
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2023-01-23')
    },
    {
        id: 'e8',
        description: 'A book',
        amount: 2.25,
        date: new Date('2004-02-31')
    },
    {
        id: 'e9',
        description: 'Another',
        amount: 44.25,
        date: new Date('2009-05-22')
    },
];

export const ExpensesContext = createContext({
    expenses: [],
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
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({
            type: 'ADD',
            payload: expenseData
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
        deleteExpense
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;