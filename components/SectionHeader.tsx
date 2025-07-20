import React from "react";
import { Pressable, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  onSeeAll: () => void;
};

const SectionHeader = ({ title, onSeeAll }: SectionHeaderProps) => (
  <View className="flex-row justify-between items-center w-full mb-4">
    <Text className="text-xl font-semibold text-gray-800 font-sans">{title}</Text>
    <Pressable onPress={onSeeAll}>
      <Text className="text-blue-600 font-semibold text-sm font-sans">See All</Text>
    </Pressable>
  </View>
);

export default SectionHeader; 