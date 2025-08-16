import { Image, View } from "react-native";
import { styles } from "./styles";

export function Logo() {
    return (
        <View
            style={styles.containerView}
        >
            <Image
                source={require('./../../../assets/todo-logo.png')}
                style={styles.image}
            />
        </View>
    )
}