import { StyleSheet } from "react-native";
import { colorsBase } from "../../themeStyles";

export const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colorsBase.gray400,
        paddingHorizontal: 20,
        paddingVertical: 48,
    },
    containerText: {
        marginTop: 16,
    },
    textBold: {
        color: colorsBase.gray300,
        fontSize: 14,
        fontWeight: 'bold'
    },
    textNormal: {
        color: colorsBase.gray300,
        fontSize: 14,
        fontWeight: 'regular'
    }
})