import { View } from "react-native";

import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";

export default function index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />

      <Steps />
    </View>
  )
}