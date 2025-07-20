import { Activity, BedDouble, Droplets, Heart, HeartPulse, Pill } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const metrics = [
  {
    name: "Blood Pressure",
    value: "120/80 mmHg",
    icon: HeartPulse,
    color: "#FF4C4C", // Red / Light Red
  },
  {
    name: "Blood Sugar",
    value: "95 mg/dL",
    icon: Droplets,
    color: "#7E5BEF", // Purple / Light Purple
  },
  {
    name: "Heart Rate",
    value: "72 bpm",
    icon: Heart,
    color: "#FF5A5F", // Bright Red / Coral
  },
  {
    name: "Sleep",
    value: "7h 30m (Good)",
    icon: BedDouble,
    color: "#4A90E2", // Deep Blue / Soft Blue
  },
  {
    name: "Activity",
    value: "8,200 steps",
    icon: Activity,
    color: "#34C759", // Green / Fresh Green
  },
  {
    name: "Medication",
    value: "On Track",
    icon: Pill,
    color: "#FFCC00", // Yellow / Amber
  },
];

const HealthTrackerCard = () => {
  return (
    <View className="my-2">
      <Text className="text-xl font-semibold text-black mb-3 mt-3 font-sans">Simplifying Your Health, Every Day.</Text>
      <View className="bg-white p-1">
        <View className="flex-row flex-wrap justify-between gap-y-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <View
                key={metric.name}
                className="w-[48%] flex-row items-center rounded-xl p-2 mb-1 gap-x-4"
                style={{ borderWidth: 1, borderColor: metric.color }}
              >
                <Icon size={24} color={metric.color} className="mr-3" />
                <View>
                  <Text className="text-xs font-semibold font-sans mb-0.5" style={{ color: metric.color }}>{metric.name}</Text>
                  <Text className="text-base font-semibold text-blue-900 font-sans">{metric.value}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HealthTrackerCard; 