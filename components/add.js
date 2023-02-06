import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";

export default function AddEvents({ submitHandler }) {
  const [todo, setText] = useState("");
  const [note , setrsvp] = useState("");



  const changleHandler = (value) => {
    setText(value);
  };
  const changleHandlerrsvp = (value) => {
    setrsvp(value);
  };


  const pressHandler = () => {
    submitHandler(todo,note);
    setText("");
    setrsvp("");
  };

  
  return (
    <View>
      <TextInput
        value={todo}
        style={styles.input}
        onChangeText={changleHandler}
        placeholder="e.g. new todo"
      />
      <TextInput style={styles.input} value={note} 
      onChangeText={changleHandlerrsvp}  placeholder="e.g. Note"/>
      <Button title="add details" onPress={pressHandler} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
