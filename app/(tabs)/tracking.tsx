import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useLocation } from "@/hooks/useLocation";
import { deliveryData } from "@/constants/deliveryData";

export default function TrackingScreen() {
  const location = useLocation(); 
  const [courierLocation, setCourierLocation] = useState({
    latitude: 30.0444,
    longitude: 31.2357,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCourierLocation((prev) => ({
        latitude: prev.latitude + 0.0001,
        longitude: prev.longitude + 0.0001,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCallCourier = () => {
    Linking.openURL(`tel:${deliveryData.deliveryPerson.phone}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-1/2">
        <MapView
          className="w-full h-full"
          initialRegion={{
            latitude: courierLocation.latitude,
            longitude: courierLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* Marker for courier */}
          <Marker
            coordinate={courierLocation}
            title="Courier"
            description="Your delivery is on the way!"
          />

          {/* Marker for user location */}
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="You"
              pinColor="blue"
              description="Your location"
            />
          )}
        </MapView>
      </View>

      {/* Delivery status section */}
      <View className="px-4 py-5 space-y-4">
        <Text className="text-lg font-semibold text-gray-800">
          Your order is on the way!
        </Text>
        <Text className="text-gray-500">
          Estimated arrival: <Text className="font-medium">10 mins</Text>
        </Text>

        {/* Courier info box */}
        <View className="flex-row items-center bg-gray-100 p-4 rounded-xl space-x-4">
          <Image
            source={{ uri: deliveryData.deliveryPerson.avatar }}
            className="w-16 h-16 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-semibold text-lg text-gray-800">
              {deliveryData.deliveryPerson.name}
            </Text>
            <Text className="text-gray-500">Personal Courier</Text>
          </View>
          <TouchableOpacity
            onPress={handleCallCourier}
            className="bg-green-500 p-3 rounded-full"
          >
            <Ionicons name="call" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
