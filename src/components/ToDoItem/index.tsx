import React from 'react';
import { ScrollView, Text, View} from "react-native";
import { styles } from './styles';
import { CheckBox } from '../CheckBox';
import { DeleteButton } from '../ButtonDelete';
import { Todo } from '../../screens/Home';

type Props = {
    todo: Todo,
    onToggleStatus: () => void,
    onRemove: () => void
}

export function ToDoItem({todo, onToggleStatus, onRemove}: Props){
    return(
        <View style={styles.container}>
            <CheckBox status={todo.status} onToggleStatus={onToggleStatus}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                    style={todo.status ? styles.textTodoCompleted : styles.textTodo}
                >
                    {todo.text}
                </Text>
            </ScrollView>
            <DeleteButton onRemove={onRemove}/>
        </View>
    )
}