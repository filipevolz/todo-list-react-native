import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from './styles';
import { ToDoItem } from '../../components/ToDoItem';
import { Alert } from 'react-native';

export type Todos = {
    text: string,
    status: boolean
}

export type Todo = {
    text: string,
    status: boolean
}

export function Home(){
    const [todo, setTodo] = useState<Todo>({
        text: '',
        status: false
    })
    const [todos, setTodos] = useState<Todos[]>([])

    function handleAddTodo(){
        if (todos.some(existingTodo => existingTodo.text === todo.text)) {
            return Alert.alert("Lembrete Existe", "Já existe um lembrete na lista com esse texto.");
        }
        setTodos(prevState => [...prevState, todo])
        setTodo({
            text: '',
            status: false
        })
    }

    function handleTodoRemove(text: string){        
        Alert.alert("Remover", `Remover o lembrete?`, [
            {
                text: 'Sim',
                onPress: () => setTodos(prevState => prevState.filter((todos) => todos.text !== text))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleToggleTodo(text: string){
        setTodos(prevTodos =>
            prevTodos.map(todo => 
                text === todo.text ? { ...todo, status: !todo.status} : todo
            )
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoSection}>
                <Image
                    source={require("../../../assets/logo.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.todoContainer}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do participante"
                        placeholderTextColor="#6B6B6B"
                        value={todo.text}
                        onChangeText={(e) => {
                            setTodo({
                                text: e,
                                status: false,
                            })
                        }}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                        <MaterialCommunityIcons name='plus-circle-outline' size={18} color='#FFF'/>         
                    </TouchableOpacity>
                </View>
                <View style={styles.statusContainer}>
                    <View style={styles.status}>
                        <Text style={styles.createdTitle}>Criadas</Text>
                        <Text style={styles.counter}>{todos.length}</Text>
                    </View>

                    <View style={styles.status}>
                        <Text style={styles.completedTitle}>Concluídas</Text>
                        <Text style={styles.counter}>{todos.filter(todo => todo.status ===  true).length}</Text>
                    </View>
                </View>

                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.text}
                    renderItem={({item}) => (
                        <ToDoItem
                            key={todo.text}
                            todo={item}
                            onToggleStatus={() => handleToggleTodo(item.text)}
                            onRemove={() => handleTodoRemove(item.text)} 
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListContainer}>
                            <Image
                                source={require("../../../assets/clipboard.png")}
                                style={styles.emptyListImage}
                            />
                            <Text style={styles.listEmptyText}>
                                Você ainda não tem tarefas cadastradas 
                            </Text>
                            <Text style={styles.emptyListSubtext}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}