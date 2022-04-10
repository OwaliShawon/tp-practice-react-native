import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Greetings from './components/Greetings';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* general */}
      <Text style={styles.title} >General</Text>
      <Text style={styles.text}>Kawsar</Text>
      <Text style={styles.text}>Biya Koirala</Text>
      <Text style={styles.text}>Tor bondhura sobai kore felteche</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <hr />
      <Text style={styles.title}>State</Text>
      {/* state */}
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
      <Text>You clicked {count} times</Text>
      {/* props */}
      <Text style={styles.title}>Props</Text>
      <Greetings name={'Owali'} id={1}></Greetings>
      <Greetings name={'Zahid'} id={2}></Greetings>
      <Greetings name={'Parvez'} id={4}></Greetings>
      <Greetings name={'Tanvir'} id={5}></Greetings>
      {/* styles */}
      <Text style={styles.title}>Styles</Text>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>Style</Text>
      <Text style={styles.text}>ON ME</Text>

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
    color: 'red',
  },
  title: {
    color: 'blue',
    fontSize: 30,
    margin: 10,
  }
});

export default App;
