import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* general */}
      <Text style={styles.text}>Kawsar</Text>
      <Text style={styles.text}>Biya Koirala</Text>
      <Text style={styles.text}>Tor bondhura sobai kore felteche</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <hr />
      {/* state */}
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
      <Text>You clicked {count} times</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
});

export default App;
