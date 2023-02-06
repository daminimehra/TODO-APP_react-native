import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import Add from "./components/add";
import Todos from "./components/todos";
import Header from "./components/header";

export default function App() {
  const [events, setEvents] = useState([{todo: "exercise", note:"6:00Am", key: "1" }  ]);


  const submitHandler = (todo,note) => {
    if(todo.length , note.length > 3){
      setEvents((preEvents) => {
        return [{ todo, note, key: Math.random.toString() }, ...preEvents];
      });
    } else{
       Alert.alert("OOPS", "Event name or rsvp link must be over 2 characters long" , [
        {text: "close"}
       ])
    }
   
  };
  const pressHandler = (key) => {
    setEvents((preEvents) => {
      return preEvents.filter((event) => event.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}
    > 
       <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <Add submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <Todos item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  </View>
  </TouchableWithoutFeedback>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    marginTop: 20,
    flex:1,
  },
});
