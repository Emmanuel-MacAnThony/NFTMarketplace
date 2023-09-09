import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants/theme";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { FlatList } from "react-native-gesture-handler";
import { NFTData } from "../constants";

export default function Home() {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => {
              return <NFTCard data={item} />;
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={styles.listBackground}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
});
