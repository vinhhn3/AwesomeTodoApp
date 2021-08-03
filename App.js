import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today task's</Text>
        <View style={styles.items}>
          {tasks.map((task, index) => {
            return (
              <TouchableOpacity key={index}>
                <Task text={task} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.addTaskWrapper}>
        <TextInput
          onChangeText={(value) => setText(value)}
          style={styles.input}
          placeholder="Add task ..."
          value={text}
        />
        <Button onPress={handleAdd} title="Add" />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
  addTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
});
