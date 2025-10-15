import { Text, View, Image } from "react-native";

export default function Houses() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {/* Title row with image */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <Image
          source={require("@/assets/images/housesIcon.png")}
          style={{ width: 60, height: 60, marginRight: 10, resizeMode: "contain" }}
        />
        <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>Chilston House</Text>
        <Text style={{ fontSize: 20, color: "grey" }}>Head Of House: Mr A Groom</Text>
        </View>
      </View>
    </View>
  );
}
