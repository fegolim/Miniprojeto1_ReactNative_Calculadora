import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/Button";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleAddNumber = (number) => {
    if (currentNumber === "0") {
      setCurrentNumber(number);
    } else {
      setCurrentNumber(currentNumber + number);
    }
  };

  const handleFunction = (type) => {
    if (type === "AC") {
      setCurrentNumber("0");
      setPreviousNumber(null);
      setOperation(null);
    }
    if (type === "+/-") {
      setCurrentNumber(currentNumber * -1);
    }
    if (type === "%") {
      setCurrentNumber(currentNumber / 100);
    }
  };

  const handleOperation = (type) => {
    if (currentNumber === "0") {
      return;
    }
    if (previousNumber !== null) {
      let result = operate();
      setCurrentNumber(result);
    } else {
      setPreviousNumber(currentNumber);
    }
    setCurrentNumber("0");
    setOperation(type);
  };

  const operate = () => {
    let result = 0;
    let previous = parseFloat(previousNumber);
    let current = parseFloat(currentNumber);
    if (operation === "+") {
      result = previous + current;
    }
    if (operation === "-") {
      result = previous - current;
    }
    if (operation === "X") {
      result = previous * current;
    }
    if (operation === "÷") {
      result = previous / current;
    }
    if (operation === "x^y") {
      result = previous ** current;
    }
    // return result.toString();
    return result % 1 === 0 ? result.toString() : result.toFixed(2);
  };

  const handleEqual = () => {
    let result = operate();
    if (result) {
      setCurrentNumber(result);
      setPreviousNumber(null);
      setOperation(null);
    }
  };

  const handleExponent = (valor) => {
    if (valor === "x²") {
      setCurrentNumber(currentNumber ** 2);
    }
    if (valor === "x³") {
      setCurrentNumber(currentNumber ** 3);
    }
  };

  const handleBackspace = () => {
    let number = currentNumber.toString();
    let newNumber = number.substr(0, number.length - 1);
    if (newNumber === "") {
      setCurrentNumber("0");
    } else {
      setCurrentNumber(newNumber);
    }
  };

  const handleDot = () => {
    if (currentNumber.indexOf(".") === -1) {
      setCurrentNumber(currentNumber + ".");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={{ fontSize: 40, color: "white" }}>
          {previousNumber} {operation} {currentNumber}
        </Text>
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="function" valor="x²" handler={handleExponent} />
        <CustomButton type="function" valor="x³" handler={handleExponent} />
        <CustomButton type="function" valor="x^y" handler={handleOperation} />
        <CustomButton type="function" valor="<" handler={handleBackspace} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="function" valor="AC" handler={handleFunction} />
        <CustomButton type="function" valor="+/-" handler={handleFunction} />
        <CustomButton type="function" valor="%" handler={handleFunction} />
        <CustomButton type="operation" valor="÷" handler={handleOperation} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="7" handler={handleAddNumber} />
        <CustomButton type="number" valor="8" handler={handleAddNumber} />
        <CustomButton type="number" valor="9" handler={handleAddNumber} />
        <CustomButton type="operation" valor="X" handler={handleOperation} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="4" handler={handleAddNumber} />
        <CustomButton type="number" valor="5" handler={handleAddNumber} />
        <CustomButton type="number" valor="6" handler={handleAddNumber} />
        <CustomButton type="operation" valor="-" handler={handleOperation} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="3" handler={handleAddNumber} />
        <CustomButton type="number" valor="2" handler={handleAddNumber} />
        <CustomButton type="number" valor="1" handler={handleAddNumber} />
        <CustomButton type="operation" valor="+" handler={handleOperation} />
      </View>
      <View style={styles.buttonsRow}>
        <CustomButton type="number" valor="0" handler={handleAddNumber} />
        <CustomButton type="number" valor="." handler={handleDot} />
        <CustomButton type="operation" valor="=" handler={handleEqual} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    // backgroundColor: "#e7e7e7",
    width: "100%",
    height: "25%",
    padding: 20,
    margin: 5,
    borderRadius: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
});