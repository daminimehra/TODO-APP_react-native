import React, { useEffect, useState } from "react";

import { StyleSheet, Text, TouchableOpacity , View} from "react-native";

export default function Events({ pressHandler, item }) {


  return (
    <View>
    
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.event}><Text >Todo: {item.todo} </Text> 
      <Text > Note: {item.note} </Text></View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  event: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
});
