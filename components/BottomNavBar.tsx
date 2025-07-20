import { FileText, Home, PercentCircle, Settings, ShoppingBag } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const tabs = [
  { name: "Home", icon: Home },
  { name: "Pickup", icon: ShoppingBag },
  { name: "History", icon: FileText },
  { name: "Sales", icon: PercentCircle },
  { name: "Settings", icon: Settings },
];

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <SafeAreaView className="absolute left-0 right-0 bottom-0 bg-white border-t border-gray-200">
      <View className="flex-row items-center justify-around h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          return (
            <Pressable
              key={tab.name}
              onPress={() => setActiveTab(tab.name)}
              className="flex-1 items-center justify-center"
              accessibilityRole="button"
              accessibilityLabel={tab.name}
            >
              <Icon
                color={isActive ? '#000' : '#A0A0A0'}
                size={26}
                strokeWidth={2}
              />
              <Text
                className={`text-xs font-medium mt-1 ${isActive ? 'text-black' : 'text-gray-400'} font-sans`}
                style={{letterSpacing: 0.1}}
              >
                {tab.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomNavBar; 