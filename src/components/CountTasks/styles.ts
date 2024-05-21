import { StyleSheet } from "react-native";
import { colorsBase } from "../../themeStyles";

export const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    textCount: {
        color: colorsBase.gray100,
        backgroundColor: colorsBase.gray400,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 99999,
        fontSize: 12,
        fontWeight: 'bold',
    }
})