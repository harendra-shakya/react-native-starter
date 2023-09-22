import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Footer from "@/common/components/Footer";

import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <StackNavigation />
        <Footer />
      </NavigationContainer>
    </TailwindProvider>
  );
}
