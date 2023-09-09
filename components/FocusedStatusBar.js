import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import React from "react";

export default function FocusedStatusBard(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

const styles = StyleSheet.create({});
