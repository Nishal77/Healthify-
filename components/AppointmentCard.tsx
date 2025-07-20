import { Calendar, Clock, Phone } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";


const AppointmentCard = () => {
  return (
    <View className="bg-blue-100 rounded-2xl shadow-lg overflow-hidden p-4">
      {/* Top Section: Doctor Info */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center gap-4">
          <View className="w-12 h-12 rounded-full bg-blue-200 border-2 border-blue-300" />
          <View>
            <Text className="font-bold text-lg text-blue-900">Dr. Alana Rueter</Text>
            <Text className="text-sm text-blue-700">Dentist Consultation</Text>
          </View>
        </View>
        <Pressable className="bg-white p-3 rounded-full" onPress={() => {}}>
          <Phone size={20} color="#2563EB" />
        </Pressable>
      </View>
      {/* Bottom Section: Date and Time */}
      <View className="bg-blue-300 flex-row items-center justify-center gap-6 p-4 rounded-xl">
        {/* Date Info */}
        <View className="flex-row items-center gap-2">
          <Calendar size={20} color="#2563EB" />
          <Text className="font-semibold text-sm text-blue-900">Monday, 26 July</Text>
        </View>
        {/* Vertical Separator */}
        <View className="h-5 w-px bg-blue-300" />
        {/* Time Info */}
        <View className="flex-row items-center gap-2">
          <Clock size={20} color="#2563EB" />
          <Text className="font-semibold text-sm text-blue-900">09:00 - 10:00</Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard; 