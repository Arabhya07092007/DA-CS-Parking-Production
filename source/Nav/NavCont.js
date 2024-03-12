import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ParkStack from "./ParkingStack";

export default function NavCont() {
  return (
    <NavigationContainer>
      <ParkStack />
    </NavigationContainer>
  );
}
