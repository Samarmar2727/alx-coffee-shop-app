
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useLocation } from '@/hooks/useLocation';

const OrderScreen = () => {
  const router = useRouter();
  const location = useLocation();
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [address, setAddress] = useState(location || '');
  const [editingAddress, setEditingAddress] = useState(false);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(40); // Example item price
  const deliveryFee = orderType === 'delivery' ? 10 : 0;

  const handleOrder = () => {
  
    router.push("/tracking")
    console.log({ orderType, address, note, quantity });
  };

  return (
    <SafeAreaView>
    <ScrollView className="flex-1 bg-white p-5">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold">Order</Text>
          </View>

      {/* Order Type */}
      <View className="flex-row space-x-4 mb-4">
        <TouchableOpacity
          className={`px-4 py-2 rounded-full ${orderType === 'delivery' ? 'bg-orange-400' : 'bg-gray-200'}`}
          onPress={() => setOrderType('delivery')}
        >
          <Text className="text-white">Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-4 py-2 rounded-full ${orderType === 'pickup' ? 'bg-orange-400' : 'bg-gray-200'}`}
          onPress={() => setOrderType('pickup')}
        >
          <Text className="text-white">Pickup</Text>
        </TouchableOpacity>
      </View>

      {/* Address */}
      {orderType === 'delivery' && (
        <View className="mb-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-semibold">Delivery Address</Text>
            <TouchableOpacity onPress={() => setEditingAddress(!editingAddress)}>
              <MaterialIcons name="edit" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          {editingAddress ? (
            <TextInput
              className="border border-gray-300 rounded p-2"
              value={address}
              onChangeText={setAddress}
              placeholder="Enter address manually"
            />
          ) : (
            <Text className="text-gray-700">{address || 'Getting your location...'}</Text>
          )}
        </View>
      )}

      {/* Notes */}
      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Add Notes</Text>
        <TextInput
          className="border border-gray-300 rounded p-2"
          value={note}
          onChangeText={setNote}
          placeholder="Any special requests?"
        />
      </View>

      {/* Quantity */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg font-semibold">Quantity</Text>
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
            <Ionicons name="remove-circle-outline" size={30} color="orange" />
          </TouchableOpacity>
          <Text className="mx-4 text-xl">{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Ionicons name="add-circle-outline" size={30} color="orange" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Discount Info */}
      <Text className="text-green-600 mb-2">1 discount is applied</Text>

      {/* Payment Summary */}
      <View className="bg-gray-100 rounded p-4 mb-4">
        <Text className="text-lg font-bold mb-2">Payment Summary</Text>
        <View className="flex-row justify-between mb-1">
          <Text>Item Price</Text>
          <Text>{price * quantity} EGP</Text>
        </View>
        <View className="flex-row justify-between mb-1">
          <Text>Delivery Fee</Text>
          <Text>{deliveryFee} EGP</Text>
        </View>
        <View className="flex-row justify-between mb-1">
          <Text>Total</Text>
          <Text className="font-bold">{price * quantity + deliveryFee} EGP</Text>
        </View>
      </View>

      {/* Payment Method */}
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center">
          <MaterialIcons name="payment" size={24} color="black" />
          <Text className="ml-2">Cash / Wallet</Text>
        </View>
        <Text>{price * quantity + deliveryFee} EGP</Text>
      </View>

      {/* Order Button */}
      <TouchableOpacity
        className="bg-orange-500 p-4 rounded-xl items-center"
        onPress={handleOrder}
      >
        <Text className="text-white text-lg font-bold">Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;
