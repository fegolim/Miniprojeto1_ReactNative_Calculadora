import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableHighlight,
  } from "react-native";
  import React from "react";

  const CustomButton = ({ type, valor, handler }) => {
    return (
      <TouchableHighlight
        style={styles.button(type, valor)}
        underlayColor={
          type === "number"
            ? "#444444"
            : type === "function"
            ? "#d9d7d7"
            : "#ffad3b"
        }
        onPress={() => {
          handler(valor);
        }}
      >
        <Text style={styles.text(type, valor)}>{valor}</Text>
      </TouchableHighlight>
    );
  };
  
  export default CustomButton;
  
  const styles = StyleSheet.create({
    button: (type, valor) => ({
      alignItems: valor === "0" ? "flex-start" : "center",
      justifyContent: "center",
      backgroundColor:
        type === "number"
          ? "#333333"
          : type === "operation"
          ? "#fe9401"
          : "#e7e7e7",
      margin: 5,
      height: 80,
      width: valor === "0" ? "47%" : "20%",
      borderRadius: 50,
      paddingLeft: valor === "0" ? 30 : 0,
    }),
    text: (type, valor) => ({
      color: type === "function" ? "#000" : "#fff",
      fontSize: valor === "÷" ? 40 : 20,
    }),
  });