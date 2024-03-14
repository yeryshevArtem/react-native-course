import { FlatList, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseesItem(itemData) {
    return (
        <ExpenseItem 
            amount={itemData.item.amount}
            date={itemData.item.date}
            description={itemData.item.description}
        />
    );
}

function ExpensesList({ expenses }) {
    return (
        <FlatList 
            renderItem={renderExpenseesItem}
            data={expenses}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpensesList;