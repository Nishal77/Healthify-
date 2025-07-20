import React from "react";
import { ScrollView } from "react-native";
import AppointmentCard from "../components/AppointmentCard";
import SectionHeader from "../components/SectionHeader";

export default function AppointmentScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100 px-4 pt-6" contentContainerStyle={{paddingBottom: 24}}>
      <SectionHeader title="Upcoming Schedule" count={8} onSeeAll={() => {}} />
      <AppointmentCard />
    </ScrollView>
  );
} 