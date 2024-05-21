import { StyleSheet } from "react-native";
import { colorsBase, colorsProduct } from "../../themeStyles";

export const styles = StyleSheet.create({
    containerView: {
        flex: 3,
        backgroundColor: colorsBase.gray600,
        padding: 24,
        paddingTop: 0,
    },
    containerTaskInputView: {
        flex: 0,
        flexDirection: 'row',
        gap: 4,
        marginTop: '-9%'
    },
    input: {
        flex: 1,
        backgroundColor: colorsBase.gray500,
        color: colorsBase.gray100,
        padding: 16,
        borderRadius: 8,
        fontSize: 16,
    },
    plusButton: {
        backgroundColor: colorsProduct.blueDark,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    containerTasksCount: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55,
        marginBottom: 20
    }
})