import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import Input from './Input';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((currInputValues) => {
            return {
                ...currInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };

        onSubmit(expenseData);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRows}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date
                    }}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description
                    // autoCorrect: false
                    // autoCapitalize: 'none'
                }}
            />
            <View style={styles.buttons}>
                <Button mode="flat" onPress={onCancel} style={styles.button}>Cancel</Button>
                <Button onPress={submitHandler} style={styles.button}>{submitButtonLabel}</Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    form: {
        marginTop: 40,

    },
    inputRows: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});
