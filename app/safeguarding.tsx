import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Card from "@/components/card";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.cardsContainer}>
        <Card
          title="Mrs Rain"
          description="Designated Safeguarding Lead"
          image={require("@/assets/images/placeholder.png")}
          style={styles.card}
        />
        <Card
          title="Mrs Rye"
          description="Deputy Safeguarding Lead"
          image={require("@/assets/images/placeholder.png")}
          style={styles.card}
        />
        <Card
          title="Mr Fullerton"
          description="Deputy Safeguarding Lead"
          image={require("@/assets/images/placeholder.png")}
          style={styles.card}
        />
      </View>
    </ScrollView>
  );
}

const CARD_WIDTH = 180;
const CARD_MARGIN = 10;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: CARD_MARGIN,
    gap: CARD_MARGIN, // For React Native >= 0.71, otherwise use margin
  },
  card: {
    width: CARD_WIDTH,
    margin: CARD_MARGIN / 2,
  },
});