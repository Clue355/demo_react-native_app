import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CheckBox from "expo-checkbox";

export default function Items({ list, setList }) {
    const num = 0;

    const handleUpdate = (id) => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: !item.checked };
                } else {
                    return item;
                }
            }),
        );
    };

    return (
        <FlatList
            data={list}
            renderItem={(item) => (
                <Pressable onPress={() => handleUpdate(item.item.id)} style={styles.itemButton}>
                    <View style={styles.innerContainer}>
                        <CheckBox disabled={false} value={item.item.checked} />
                        <Text style={[styles.itemtext, item.item.checked ? styles.checkedStyle : null]}>
                            {item.item.name}
                        </Text>
                    </View>
                </Pressable>
            )}
            style={styles.container}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        color: "#fff",
        marginTop: 30,
        width: "100%",
    },

    innerContainer: {
        flexDirection: "row",
        width: 250,
        alignItems: "center",
    },

    itemButton: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    itemtext: {
        fontSize: 30,
        marginLeft: 10,
    },

    checkedStyle: {
        textDecorationLine: "line-through",
        color: "#515151",
    },
});
