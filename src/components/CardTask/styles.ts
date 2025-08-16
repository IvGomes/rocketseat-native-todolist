import { StyleSheet } from "react-native";
import { colorsBase, colorsProduct } from "../../themeStyles";

export const styles = StyleSheet.create({
    bouncyContainer: {
        backgroundColor: colorsBase.gray500,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: colorsBase.gray400,
        borderRadius: 8,
    },
    innerIconStyleUnChecked: {
        borderColor: colorsProduct.blue,
        borderWidth: 2
    },
    innerIconStyleChecked: {
        borderColor: colorsProduct.purple,
        borderWidth: 2
    },
    removeButton: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        paddingHorizontal: 17,
        justifyContent: 'center',
        alignItems: 'center',
    }
})