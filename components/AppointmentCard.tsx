import { Calendar, Clock, Phone } from "lucide-react-native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const AppointmentCard = () => {
  return (
    <View className="bg-blue-500 rounded-2xl overflow-hidden p-4">
      {/* Top Section: Doctor Info */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center gap-4">
          <View className="w-12 h-12 rounded-full bg-blue-200 border-2 border-blue-300 items-center justify-center overflow-hidden">
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          </View>
          <View>
            <Text className="font-semibold text-lg text-black font-sans">Dr. Shylesh B C</Text>
            <Text className="text-sm text-black font-sans">Mental Consultation</Text>
          </View>
        </View>
        <Pressable className="bg-white p-3 rounded-full" onPress={() => {}}>
          <Phone size={20} color="#2563EB" />
        </Pressable>
      </View>
      {/* Bottom Section: Date and Time */}
      <View className="bg-blue-400 flex-row items-center justify-center gap-6 p-4 rounded-xl ">
        {/* Date Info */}
        <View className="flex-row items-center gap-2">
          <Calendar size={20} color="#2563EB" />
          <Text className="font-semibold text-sm text-blue-900 font-sans">Monday, 26 July</Text>
        </View>
        {/* Vertical Separator with background color */}
        <View className="h-6 w-1 mx-1 rounded-full" style={{ backgroundColor: "#2563EB", opacity: 0.25 }} />
        {/* Time Info */}
        <View className="flex-row items-center gap-2">
          <Clock size={20} color="#2563EB" />
          <Text className="font-semibold text-sm text-blue-900 font-sans">09:00 - 10:00</Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard; 