import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        padding: 12,
        gap: 8,
    },
    button: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#4EA8DE'
    },
    textTodo: {
        flex: 1,
        color: '#FFF',
        fontSize: 14,
        lineHeight: 20
    },
    textTodoCompleted: {
        flex: 1,
        color: '#808080',
        fontSize: 14,
        lineHeight: 20,
        textDecorationLine: "line-through"
    }
})