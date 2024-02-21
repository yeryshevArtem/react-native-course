import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors';

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        elevation: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'

    },
});