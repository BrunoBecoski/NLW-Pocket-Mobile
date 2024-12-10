import { View, Text } from "react-native"

export default function index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"  
    }}>
      <Text style={{ fontSize: 22 }}>Hello React Native</Text>
    </View>
  )
}