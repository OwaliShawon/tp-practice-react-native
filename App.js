import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ButtonsExample from './components/ButtonsExample';
import Greetings from './components/Greetings';
import HttpExample from './components/HttpExample';
import Inputs from './components/Inputs';
import LayoutAnimation from './components/LayoutAnimation';
import List from './components/List';
import ScrollViewExample from './components/ScrollViewExample';


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
      {/* flexbox */}
      <Text style={styles.title}>flexbox</Text>
      <View style={styles.containerFlex}>
        <View style={styles.redbox} />
        <View style={styles.bluebox} />
        <View style={styles.blackbox} />
      </View>
      {/*ListView  */}
      <Text style={styles.title}>List View</Text>
      <List></List>
      {/* Inputs */}
      <Text style={styles.title}>Input</Text>
      <Inputs></Inputs>
      {/* ScrollViewExample */}
      <Text style={styles.title}>ScrollViewExample</Text>
      <ScrollViewExample></ScrollViewExample>
      {/*http example */}
      <Text style={styles.title}>http ex</Text>
      <HttpExample></HttpExample>
      {/*Button example */}
      <Text style={styles.title}>Button example</Text>
      <ButtonsExample></ButtonsExample>
      {/*Layout Animation */}
      <Text style={styles.title}>Layout Animation</Text>
      <LayoutAnimation></LayoutAnimation>

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
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
  containerFlex: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
});

export default App;
