import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { colorsBase, colorsProduct } from "../../themeStyles";
import React from "react";
import { Trash, Trash2 } from "lucide-react-native";
import { TTodoListProps } from "../Board";

type TCardTaskProps = {
    taskIndex: number
    description: string
    handleRemoveTask: () => void
    updateDoneTask: (checkState: boolean, taskIndex: number) => void
}

export function CardTask({ taskIndex, description, handleRemoveTask, updateDoneTask }: TCardTaskProps) {
    const [isChecked, setIsChecked] = React.useState(false)

    React.useEffect(() => {
        updateDoneTask(isChecked, taskIndex)
    }, [isChecked])

    return (
        <View>
            <BouncyCheckbox
                style={styles.bouncyContainer}
                fillColor={colorsProduct.purple}
                innerIconStyle={isChecked ? styles.innerIconStyleChecked : styles.innerIconStyleUnChecked}
                text={description}
                textStyle={{
                    width: "85%",
                    color: isChecked ? colorsBase.gray300 : colorsBase.gray100,
                    fontSize: 14
                }}
                onPress={checked => setIsChecked(checked)}
            />
            <TouchableOpacity style={styles.removeButton}
                onPress={handleRemoveTask}
            >
                <Trash2 color={colorsBase.gray300} />
            </TouchableOpacity>
        </View>
    )
}