import { View, Text, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import SafeViewAndroid from "@/utils/SafeViewAndroid";

const LoginScreen = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>
            Login Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
