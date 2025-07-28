# ☕ Coffee Delivery App (React Native with Expo)

A simple coffee delivery mobile application built using **React Native** and **Expo Router**.  
The app simulates a coffee ordering experience, from onboarding to tracking your delivery on the map.

---

## 📱 App Screens

- **Onboarding Screen**: Welcomes the user and introduces the app.
- **Home Screen**: Lists all coffee types with filters and basic UI for selection.
- **Order Screen**: Shows the confirmed order with details.
- **Tracking Screen**: Displays the real-time delivery tracking map.

---

## 🛠️ Tech Stack

- **React Native**
- **Expo**
- **Expo Router**
- **Tailwind CSS** with NativeWind
- **React Native Maps**
- **React Native Safe Area Context**
- **React Navigation**
- **TypeScript**

---

## ⚙️ Features

- Responsive UI using **Tailwind CSS** via **NativeWind**
- Location-based tracking using the user’s current coordinates
- Real-time Map with delivery location (static for now)
- Filter coffee categories with `ScrollView`
- Navigation between screens using `expo-router`

---

## 🧠 React Concepts Used

- **Hooks**: `useState`, `useEffect`, and a custom hook for location (`useLocation`)
- **Navigation**: Using `expo-router` with dynamic routing
- **Context**: Could be added in the future for global order state

---

## 🧩 Common Issues Faced

### ❗ Expo Go IP Address Issue

One of the main issues I faced was that **Expo Go was not showing the app on my device**, and the terminal showed something like:
TypeError: Network request failed


### ✅ Solution:

I found out the problem was because **the IP address in Expo did not match the device’s actual IP address**.

#### Here's how I solved it:

1. I ran the following command to check my PC’s IP:

   ```command
   ipconfig

2.  I copied my current IP address (e.g. 192.168.1.10), then manually set the IP for React Native by running in PowerShell:
  powershell
 Setx /M REACT_NATIVE_PACKAGER_HOSTNAME 192.168.1.10
## ✅ After this step, Expo Go connected successfully to the development server!

---

## 🗺️ Location Feature

- I used the real device location via a custom hook useLocation, built using expo-location.
- The location is used in the Tracking screen, rendered via react-native-maps, and the user’s current position is marked.

--- 

 ## 🧪 Future Improvements
- Add real backend with actual order data
- Add user login / authentication
- Add animations or Lottie files for smoother transitions
- Improve error handling and form validation

## 🙋‍♀️ Author
Made with 💙 by Samar Khaled
A Frontend Developer passionate about clean UI and smooth user experiences.




