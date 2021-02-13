import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";

import MainTab from "../../../tab";

import styles from "./styles";

class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden={false} />
        <View style={styles.headerContainer}>
          <Text>VIVA HOME PROS</Text>
        </View>
        <MainTab />
      </View>
    );
  }
}

export default Main;
