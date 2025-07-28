
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import React from "react";

const Onboarding = () => {
  const router = useRouter();

  return (
     <SafeAreaView className="flex-1 bg-[#313131]">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center items-center bg-[#313131] px-6 py-10">
        <Image
          source={require("../assets/images/coffe cup 1.png")}
          className="w-60 h-60 mb-10"
          resizeMode="contain"
        />

        <Text className="text-center font-bold text-white text-3xl my-4">
          Fall in Love with Coffee in Blissful Delight!
        </Text>

        <Text className="text-center bg-[#E3E3E3] text-base mb-6 px-3 py-2 rounded-md text-black">
          Welcome to our cozy coffee corner, where every cup is a delight for you.
        </Text>

        <TouchableOpacity
          className="bg-[#C67C4E] px-6 py-3 rounded-full"
         onPress={() => router.push("/home")}
        >
          <Text className="text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding;
