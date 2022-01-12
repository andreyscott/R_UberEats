import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";


import HeaderTabs from "./components/HeaderTabs";
import SearchBar from "./components/SearchBar";


export default function App() {
  return( 
  <SafeAreaView  style={{ backgroundColor: "#eee", flex: 1,}}>
  <View style={{ backgroundColor: "white",  padding: 15}}>
    <HeaderTabs />
    <SearchBar  /> 
    </View>
    </SafeAreaView>
  )}

const styles = StyleSheet.create({
  
});
