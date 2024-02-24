import { StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";
import { useState } from "react";

export default function Input({ todo, setTodo, list, setList, lastId, setLastId }) {
    let num = 0;

    const showAlert = () =>
        Alert.alert(
            "Input box cant be empty",
            "",
            [
                {
                    text: "OK",
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
            },
        );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type your todo here!"
                placeholderTextColor="#fff"
                onChangeText={(newText) => setTodo(newText)}
                defaultValue={todo}
            ></TextInput>
            <View>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        if (todo === "") {
                            showAlert();
                            return null;
                        }
                        const newId = lastId + 1;
                        setList([...list, { id: newId, name: todo, checked: false }]);
                        setLastId(newId);
                        setTodo("");
                    }}
                >
                    <Text style={styles.buttontext}>Add</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        setList([]);
                    }}
                >
                    <Text style={styles.buttontext}>Clear</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "#fff",
        marginTop: 20,
    },

    input: {
        fontSize: 20,
        height: 40,
        borderBottomWidth: 3,
        borderBottomColor: "#0033ff",
        padding: 5,
        color: "#fff",
    },
    button: {
        borderColor: "#0033ff",
        borderWidth: 2,
        borderRadius: 6,
        alignItems: "center",
        padding: 5,
        marginTop: 10,
    },
    buttontext: {
        fontSize: 20,
        color: "#fff",
    },
});
