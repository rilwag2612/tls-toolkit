import { withLayoutContext } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const { Navigator } = createBottomTabNavigator();
export const BottomTabs = withLayoutContext(Navigator);

const tabs = [
  { name: "index", label: "Home", icon: "home" },
  { name: "safeguarding", label: "Safeguarding", icon: "shield" },
  { 
    name: "houses", 
    label: "Houses", 
    icon: "home", 
    image: require("@/assets/images/housesIcon.png") // optional custom icon
  },
  { name: "badges", label: "Badges", icon: "ribbon" },
];

export default function Layout() {
  return (
    <BottomTabs
      screenOptions={({ route }) => {
        const currentTab = tabs.find(tab => tab.name === route.name);
        const iconName = currentTab?.icon ?? "help";
        const iconImage = currentTab?.image;

        return {
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            if (iconImage) {
              return (
                <Image
                  source={iconImage}
                  style={{
                    width: size,
                    height: size,
                    resizeMode: "contain",
                  }}
                />
              );
            }
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          title: currentTab ? currentTab.label : route.name,
        };
      }}
    />
  );
}