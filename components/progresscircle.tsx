import React from "react";
// Import necessary components from react-native-svg
import Svg, { Circle, G, View } from 'react-native-svg'; 


const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

// MODIFIED: Accepts 'size' prop
const CircleComponent = ({ colour, percentage, size }) => {
  // Center is now half of the size prop
  const center = size / 2;
  const r = (size / 200) * 45; // Keep the radius constant for stroke appearance
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; 
  return (
    <Circle
      r={r}
      cx={center} // Use dynamic center
      cy={center} // Use dynamic center
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} 
      strokeWidth={"2rem"} 
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    />
  );
};

// MODIFIED: Accepts 'size' prop
const Pie = ({ percentage, colour, size = 200 }) => { // Default to 200 for safety
  const pct = cleanPercentage(percentage);
  const center = size / 2;

  return (
    // Set Svg width/height and viewBox dynamically
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Use dynamic center in rotation origin */}
      <G rotation="-90" origin={`${center}, ${center}`}>
        <CircleComponent colour="lightgrey" size={size} percentage={100} /> {/* Background Circle */}
        <CircleComponent colour={colour} size={size} percentage={pct} /> {/* Progress Circle */}
      </G>
      {/* The image is no longer rendered here */}
    </Svg>
  );
};


export default Pie;