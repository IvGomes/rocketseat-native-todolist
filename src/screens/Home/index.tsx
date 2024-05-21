import { Text, View } from "react-native";
import { Logo } from "../../components/Logo";
import { Board } from "../../components/Board";
import { styles } from "./styles";

export function Home() {
    return (
        <View
            style={styles.containerView}
        >
            <Logo />
            <Board />
        </View>
    )
}