import React from "react";
import { Alert, FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { colorsBase, colorsProduct } from "../../themeStyles";
import { CirclePlus } from "lucide-react-native";
import { CountTasks } from "../CountTasks";
import { EmptyTodoList } from "../EmptyTodoList";
import { CardTask } from "../CardTask";

export type TTodoListProps = {
    description: string
    done: boolean
}

export function Board() {
    const [todoList, setTodoList] = React.useState<TTodoListProps[]>([])
    const [taskDescription, setTaskDescription] = React.useState('')

    const handleNewTask = () => {
        if (taskDescription.length > 3) {
            setTodoList(prevState => [
                ...prevState,
                {
                    description: taskDescription,
                    done: false
                }
            ])

            setTaskDescription('')

            return;
        }

        Alert.alert('A tarefa deve ter mais que 3 caracteres.')
    }

    const handleRemoveTask = (taskIndex: number) => {
        Alert.alert('Remover', 'Deseja mesmo fazer a remoção desta tarefa?', [
            {
                text: 'Sim',
                onPress: () => setTodoList(prevState => prevState
                    .filter((_, index) => index !== taskIndex)
                )
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ])
    }

    const updateDoneTask = (checkState: boolean, taskIndex: number) => {
        setTodoList(prevState =>
            prevState.map((task, index) =>
                index === taskIndex ? { ...task, done: checkState } : task
            )
        );
    };

    const countTodoStatusMemo = React.useMemo(() => {
        let createdTasks = 0;
        let finishedTasks = 0;

        createdTasks = todoList.length
        finishedTasks = todoList.filter(task => task.done).length

        return {
            createdTasks,
            finishedTasks,
        }
    }, [todoList])

    return (
        <View style={styles.containerView}>
            <View style={styles.containerTaskInputView}>
                <TextInput style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={colorsBase.gray300}
                    onChangeText={setTaskDescription}
                    value={taskDescription}
                />
                <TouchableOpacity style={styles.plusButton}
                    onPress={handleNewTask}
                >
                    <CirclePlus
                        size={16}
                        color={colorsBase.gray100}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.containerTasksCount}>
                <CountTasks
                    text="Criadas"
                    color={colorsProduct.blue}
                    countTask={countTodoStatusMemo.createdTasks}
                />
                <CountTasks
                    text="Concluídas"
                    color={colorsProduct.purple}
                    countTask={countTodoStatusMemo.finishedTasks}
                />
            </View>

            <View>
                <FlatList
                    data={todoList}
                    contentContainerStyle={{ gap: 8 }}
                    keyExtractor={(item, indx) => String(indx)}
                    renderItem={({ item, index }) => (
                        <CardTask
                            taskIndex={index}
                            description={item.description}
                            handleRemoveTask={() => handleRemoveTask(index)}
                            updateDoneTask={updateDoneTask}
                        />
                    )}
                    ListEmptyComponent={() => (<EmptyTodoList />)}
                />
            </View>
        </View>
    )
}