import { ImageSourcePropType } from "react-native";

export type CoffeeItem = {
  id: string;
  name: string;
  type: string;
  price: string;
  rating: number;
  image: ImageSourcePropType;
  description:string;
};

export type  DeliveryItem = {
    customerName: string,
    deliveryPerson: {
    name: string,
    phone: string,
    avatar: string,
  },
  estimatedTime: string,
  distance: string,
  statusMessage: string,
  
}