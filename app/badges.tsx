import { View, Image, Text } from "react-native"; 
import Pie from "../components/progresscircle";

// Define sizes for consistency
const PIE_SIZE = 400; // The desired display size
// Calculation is correct: 40% of PIE_SIZE
const IMAGE_SIZE = (PIE_SIZE / 100) * 40; 

export default function Badges() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {/* Wrapper View for relative/absolute positioning */}
        <View style={{ width: PIE_SIZE, height: PIE_SIZE, position: 'relative' }}> 
            {/* FIX: Pass the PIE_SIZE prop to the Pie component */}
            <Pie percentage={90} colour="gold" size={PIE_SIZE} /> 

            {/* 2. The Absolute-Positioned, Circular Image (Positioning is correct) */}
            <Image 
                source={require('@/assets/images/gold_badge.png')} 
                style={{
                    position: 'absolute',
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    // Calculate positioning to center the image
                    top: (PIE_SIZE / 2) - (IMAGE_SIZE / 2),
                    left: (PIE_SIZE / 2) - (IMAGE_SIZE / 2),
                    
                    // Make the image circular
                    borderRadius: IMAGE_SIZE / 2, 
                }}
            />
        </View>
        <Text style={{ marginTop: 15, fontWeight: 'bold' }}>Gold Badge - 90% Complete</Text>
        <Text style={{fontSize: 10, color: 'gray', margin: 10}}>[YR 8] WDGLL Leaderboard: 10th (All-time)</Text>
    </View>
  );
}