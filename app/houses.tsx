import { Text, View, Image } from "react-native";
import BrockwellImg from "@/assets/images/housesIcon_Brockwell.png";
import ChilstonImg from "@/assets/images/housesIcon_Chilston.png";
import EssingerImg from "@/assets/images/housesIcon_Essinger.png";
import MaylamImg from "@/assets/images/housesIcon_Maylam.png";
import NepeanImg from "@/assets/images/housesIcon_Nepean.png";

export default function Houses() {
  const houses = [
    { name: "Brockwell House", head: "Mr Fullerton", image: BrockwellImg, points: 120 },
    { name: "Chilston House", head: "Mr Groom", image: ChilstonImg, points: 95 },
    { name: "Essinger House", head: "Miss Denchfield", image: EssingerImg, points: 110 },
    { name: "Maylam House", head: "Mr Keyes", image: MaylamImg, points: 85 },
    { name: "Nepean House", head: "Miss Richardson", image: NepeanImg, points: 100 },
  ];

  return (
    <>
      <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center", marginTop: 40 }}>Our Houses</Text>
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        {houses.map((house, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              paddingLeft: 10,
            }}
          >
            {/* Left side: image + text */}
            <Image
              source={house.image}
              style={{ width: 60, height: 60, resizeMode: "contain", marginRight: 15 }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 36, fontWeight: "bold" }}>{house.name}</Text>
              <Text style={{ fontSize: 20, color: "grey" }}>Head Of House: {house.head}</Text>
            </View>

            {/* Right side: points */}
            <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: "auto" }}>
              {house.points}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
}