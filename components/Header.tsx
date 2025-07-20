import { Bell, Mic, ScanQrCode, Search } from "lucide-react-native";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}

const Header = () => {
  const greeting = getGreeting();
  const [search, setSearch] = React.useState("");

  return (
    <View className="w-full px-4 pt-6 pb-4 ">
      {/* Top Row: Avatar, Greeting, Bell */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080&auto=format&fit=crop" }}
            className="w-12 h-12 rounded-full"
          />
          <View className="ml-3">
            <Text className="font-sans text-gray-500 text-base">{greeting}</Text>
            <Text className="font-sans text-gray-800 text-lg font-bold">K Vivek Acharya</Text>
          </View>
        </View>
        <Pressable className="relative p-2">
          <Bell color="#4B5563" size={28} />
          {/* Notification Dot */}
          <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-50" />
        </Pressable>
      </View>

      {/* Main Greeting Text */}
      <Text className="text-4xl font-bold text-gray-900 mt-6 mb-4 font-sans">
        How are you feeling today?
      </Text>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-xl px-3 py-2 border border-gray-300" style={{ borderColor: 'rgba(0,0,0,0.15)', borderWidth: 1 }}>
        <Search color="#9CA3AF" size={22} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search a doctor, medicines, etc..."
          placeholderTextColor="#9CA3AF"
          className="flex-1 ml-3 text-base text-gray-800 bg-transparent font-sans"
          returnKeyType="search"
        />
        <Pressable className="ml-2" hitSlop={10}>
          <ScanQrCode color="#4B5563" size={22} />
        </Pressable>
        <Pressable className="ml-2 bg-gray-200 p-2 rounded-xl" hitSlop={10}>
          <Mic color="#4B5563" size={22} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header; 