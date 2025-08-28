import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./BatPasswordLengthStyles";

interface BatPasswordLengthProps {
  length: number;
  setLength: (value: number) => void;
}

export function BatPasswordLength({ length, setLength }: BatPasswordLengthProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password Length</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={2}
        value={length.toString()}
        onChangeText={(value) => setLength(Number(value) || 0)}
        placeholder="8"
        placeholderTextColor="#aaa"
      />
    </View>
  );
}
