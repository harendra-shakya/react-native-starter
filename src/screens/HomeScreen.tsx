import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";
import SafeViewAndroid from "@/utils/SafeViewAndroid";

const HomeScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>
            Home Screen
          </Text>
        </View>
      </View>

      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text
            style={tailwind("text-blue-800 font-semibold")}
            onPress={() => navigation.navigate("Chat")}
          >
            Chat Screen
          </Text>
        </View>
      </View>

      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text
            style={tailwind("text-blue-800 font-semibold")}
            onPress={() => navigation.navigate("Login")}
          >
            Login Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
