import { Pressable, View, Text, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useLocation } from '@/hooks/useLocation';
import { coffeeData } from "@/constants/CoffeData";
import { useRouter } from "expo-router";


export default function HomeScreen() {
  const location = useLocation();
  const router = useRouter();


  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        {/* Location */}
        <View className="flex-row justify-between items-center mt-4">
          <View>
            <Text className="text-xs text-gray-400">Location</Text>
            <Text className="text-base font-semibold text-black">
              {location || "Loading..."}
            </Text>
          </View>
          <Ionicons name="location-outline" size={20} color="black" />
        </View>

       {/* Search */}
        <View className="flex-row items-center mt-4 space-x-2">
          <View className="flex-1 bg-gray-100 rounded-xl flex-row items-center px-3">
            <Ionicons name="search" size={20} color="gray" />
            <TextInput
              placeholder="Search coffee"
              className="ml-2 flex-1 py-2"
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity className="bg-orange-400 p-3 rounded-xl">
            <MaterialIcons name="tune" size={20} color="white" />
          </TouchableOpacity>
        </View>

        
        {/* Promo Card */}
        <View className="bg-[#C8A27A] mt-5 rounded-2xl p-4">
          <Text className="text-white font-semibold mb-2">Promo</Text>
          <Image
            source={require('../../assets/images/background.png')}
            className="w-full h-32 rounded-xl"
            resizeMode="cover"
          />
        </View>

        {/* Filter Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5">
          {['All Coffee', 'Machiato', 'Latte', 'Americano'].map((cat, i) => (
            <TouchableOpacity
              key={i}
              className={`px-4 py-2 rounded-full mr-2 ${
                i === 0 ? 'bg-orange-400' : 'bg-gray-100'
              }`}
              >
            <Text className={i === 0 ? 'text-white font-semibold' : 'text-gray-700'}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Coffee Cards */}
        <View className="mt-5">
          <FlatList
            data={coffeeData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
               <Pressable
           onPress={() => router.push(`/${item.id}`)}
           className="bg-white rounded-2xl shadow-md p-2 mb-4 w-[48%]"
              >
              <View className="bg-white rounded-2xl shadow-md p-2 mb-4 w-[48%]">
                <Image source={item.image} className="h-28 w-full rounded-xl" resizeMode="cover" />
                <Text className="mt-2 font-semibold text-black">{item.name}</Text>
                <Text className="text-xs text-gray-400">{item.type}</Text>
                <View className="flex-row justify-between items-center mt-2">
                  <Text className="text-orange-500 font-bold">{item.price}</Text>
                  <TouchableOpacity 
                  onPress={(e) => {
                    e.stopPropagation?.();
                    // add a coffe to fav
                  }}
                  className="bg-orange-400 p-1.5 rounded-full">
                    <Ionicons name="add" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
