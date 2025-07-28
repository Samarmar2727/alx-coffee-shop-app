import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { coffeeData } from "@/constants/CoffeData";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const drink = coffeeData.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState("M");

  if (!drink) {
    return <Text>Drink not found</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold">Details</Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Image */}
        <Image
          source={drink.image}
          className="w-full h-60 rounded-xl mb-4"
          resizeMode="cover"
        />

        {/* Name + Type Selector */}
        <Text className="text-3xl font-bold mb-2">{drink.name}</Text>

        <View className="flex-row space-x-4 mb-4">
          {["Hot", "Ice"].map((type) => (
            <TouchableOpacity
              key={type}
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              <Text className="text-gray-600">{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Icons Row */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="items-center">
            <Feather name="coffee" size={24} color="#C8A27A" />
            <Text className="text-xs mt-1">Beans</Text>
          </View>
          <View className="items-center">
            <Feather name="droplet" size={24} color="#C8A27A" />
            <Text className="text-xs mt-1">Water</Text>
          </View>
          <View className="items-center">
            <MaterialIcons name="delivery-dining" size={24} color="#C8A27A" />
            <Text className="text-xs mt-1">Delivery</Text>
          </View>
        </View>

        {/* Rating */}
        <View className="flex-row items-center mb-4">
          <Ionicons name="star" size={20} color="gold" />
          <Text className="ml-2 text-base font-medium">{drink.rating}</Text>
        </View>

        {/* Divider */}
        <View className="border-b border-gray-200 my-4" />

        {/* Description */}
        <Text className="text-lg font-semibold mb-1">Description</Text>
        <Text className="text-gray-600 mb-6">{drink.description}</Text>

        {/* Size Selection */}
        <Text className="text-lg font-semibold mb-2">Size</Text>
        <View className="flex-row space-x-4 mb-6">
          {["S", "M", "L"].map((size) => (
            <Pressable
              key={size}
              onPress={() => setSelectedSize(size)}
              className={`px-5 py-2 rounded-full border ${
                selectedSize === size
                  ? "bg-orange-400 border-orange-400"
                  : "border-gray-300"
              }`}
            >
              <Text
                className={`${
                  selectedSize === size ? "text-white" : "text-gray-700"
                } font-semibold`}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Price & Buy Button */}
        <View className="flex-row justify-between items-center mb-10">
          <Text className="text-2xl font-bold text-orange-500">
            {drink.price}
          </Text>
          <TouchableOpacity 
           onPress={() => router.push(`/order`)}
          className="bg-orange-400 px-6 py-3 rounded-full">
            <Text className="text-white font-semibold">Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
