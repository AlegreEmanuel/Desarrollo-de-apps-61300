import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native-web";
import { increment, decrement, incrementByAmount, reset } from "../features/counters/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../global/colors";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  const [amountToAdd, setAmountToAdd] = useState("");

  const handleIncrementByAmount = () => {
    const parsedAmount = parseInt(amountToAdd, 10);
    if (!isNaN(parsedAmount)) {
      dispatch(incrementByAmount(parsedAmount));
      setAmountToAdd("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable onPress={() => dispatch(decrement())}>
          <Text style={styles.button2}>-</Text>
        </Pressable>
        <Text style={styles.counterText}>Counter: {counter}</Text>
        <Pressable onPress={() => dispatch(increment())}>
          <Text style={styles.button2}>+</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="numeric"
        value={amountToAdd}
        onChangeText={(text) => {
            if (/^\d+$/.test(text) || text === '') {
            setAmountToAdd(text);
            }
  }}
        />
        <Pressable onPress={handleIncrementByAmount}>
          <Text style={styles.button}>Sumar</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => dispatch(reset())}>
        <Text style={styles.button}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: colors.blue_200,
    width: '50%',
    marginHorizontal: 'auto',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: colors.blue_300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: 50,
    minHeight: 50,
    textAlign: 'center',
    borderWidth: 2,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Debil',
  },
  button2:{
    backgroundColor: colors.blue_300,
    margin: 5,
    borderRadius: 5,
    minWidth: 50,
    minHeight: 50,
    textAlign: 'center',
    borderWidth: 2,
    color: 'white',
    fontSize: 40,
    fontFamily: 'Fuerte',
  },


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.blue_400,
    borderRadius: 5,
    padding: 8,
    width: 100,
    marginRight: 10,
  },
  counterText: {
    fontSize: 30,
    fontFamily: 'Debil',
    color: "black",
    marginTop: 10,
  },
});