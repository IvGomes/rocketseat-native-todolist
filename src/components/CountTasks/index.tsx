import { Text, View } from "react-native";
import { styles } from "./styles";

type TCountTaskProps = {
    text: string
    color: string
    countTask: number
}

export function CountTasks({ color, countTask, text }: TCountTaskProps) {
    return (
        <View
            style={styles.containerView}
        >
            <Text style={
                {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: color
                }
            }>
                {text}
            </Text>
            <Text
                style={styles.textCount}
            >
                {countTask}
            </Text>
        </View>
    )
}