import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count change hua:", count);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>

      <Button title="+1" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  number: {
    fontSize: 50,
    marginBottom: 20,
    color: "black",
  },
});
