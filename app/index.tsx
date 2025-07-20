import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import AppointmentCard from "../components/AppointmentCard";
import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header";
import HealthTrackerCard from "../components/HealthTrackerCard";
import SectionHeader from "../components/SectionHeader";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1">
          <Header />
          <ScrollView className="flex-1  px-4 pt-2" contentContainerStyle={{paddingBottom: 24}}>
            <SectionHeader title="Upcoming Schedule" onSeeAll={() => {}} />
            <AppointmentCard />
            <HealthTrackerCard />
          </ScrollView>
        </View>
        <BottomNavBar />
      </SafeAreaView>
    </>
  );
}
