import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTodoList() {
    return (
        <View style={styles.containerView}>
            <Image
                source={require('./../../../assets/clipboard.png')}
            />
            <View style={styles.containerText}>
                <Text style={styles.textBold}>
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.textNormal}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </View>
        </View>
    )
}