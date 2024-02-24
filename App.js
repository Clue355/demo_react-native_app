import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Items from "./components/home/list_items";
import Input from "./components/home/input";

export default function App() {
    const [list, setList] = useState([]);
    const [todo, setTodo] = useState("");
    const [lastId, setLastId] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo App!</Text>
            <Input todo={todo} setTodo={setTodo} list={list} setList={setList} lastId={lastId} setLastId={setLastId} />
            <Items list={list} setList={setList} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9e9e9e",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 150,
        height: "100%",
        width: "100%",
    },
    title: {
        color: "#fff",
        fontSize: 50,
    },
});
