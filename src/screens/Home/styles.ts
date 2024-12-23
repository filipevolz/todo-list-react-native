import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoSection: {
        flex: 2,
        backgroundColor: "#0D0D0D",
        padding: 24,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    todoContainer: {
        flex: 8,
        padding: 24,
        backgroundColor: "#1A1A1A",
    },
    form: {
        width: '100%',
        flexDirection: "row",
        marginTop: -50
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#262626",
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1E6F9F",
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusContainer: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    status: {
        gap: 8,
        flexDirection: "row"
    },
    createdTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4EA8DE'
    },
    completedTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8284FA'
    },
    counter: {
        backgroundColor: "#333333",
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 20
    },
    emptyListContainer: {
        borderTopWidth: 1,
        borderColor: '#333333',
        paddingTop: 48,
        alignItems: 'center',
    },
    emptyListImage: {
        marginBottom: 20
    },
    listEmptyText: {
        color: '#808080',
        fontWeight: 'bold'
    },
    emptyListSubtext: {
        color: '#808080'
    }
})