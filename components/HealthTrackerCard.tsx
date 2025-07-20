import { Activity, Droplets, HeartPulse, Utensils } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const metrics = [
  {
    name: "Blood Pressure",
    value: "120/80 mmHg",
    icon: HeartPulse,
    status: "normal",
  },
  {
    name: "Diet",
    value: "Balanced",
    icon: Utensils,
    status: "good",
  },
  {
    name: "Activity",
    value: "7,500 steps",
    icon: Activity,
    status: "normal",
  },
  {
    name: "Blood Sugar",
    value: "95 mg/dL",
    icon: Droplets,
    status: "normal",
  },
];

const statusColor = {
  normal: "text-emerald-600",
  good: "text-blue-500",
  warning: "text-yellow-500",
  danger: "text-red-500",
};

const HealthTrackerCard = () => {
  return (
    <View className="bg-blue-50 border border-blue-100 rounded-2xl p-5 my-2">
      <Text className="text-lg font-bold text-blue-900 mb-4 font-sans">Health Tracker</Text>
      <View className="flex-row flex-wrap justify-between gap-y-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <View key={metric.name} className="w-[48%] flex-row items-center bg-white border border-blue-100 rounded-xl p-3 mb-1">
              <Icon size={24} className={`mr-3 ${statusColor[metric.status as keyof typeof statusColor]}`} />
              <View>
                <Text className="text-xs text-blue-700 font-sans mb-0.5">{metric.name}</Text>
                <Text className="text-base font-semibold text-blue-900 font-sans">{metric.value}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HealthTrackerCard; 