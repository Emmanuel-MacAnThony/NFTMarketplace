import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export default function CircleButton({ imageUrl, handlePress, ...props }) {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image style={styles.image} source={imageUrl} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 24,
    height: 24,
  },
});
