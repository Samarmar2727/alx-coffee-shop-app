import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation("Permission Denied");
        return;
      }

      let currentLoc = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(currentLoc.coords);

      if (address.length > 0) {
        setLocation(`${address[0].city}, ${address[0].region}`);
      }
    })();
  }, []);

  return location;
};
