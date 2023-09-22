import { View, Text, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";

const Footer = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <View style={tailwind("bottom-4 pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>Footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
