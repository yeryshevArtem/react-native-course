import { View, StyleSheet } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

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
        date: new Date('2023-01-23')
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

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
});
