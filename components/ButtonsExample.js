import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableHighlight } from 'react-native-web';

const ButtonsExample = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>
                    Button
                </Text>
            </TouchableOpacity>
            <hr />
            <TouchableHighlight>
                <Text style={styles.text}>
                    Button 2
                </Text>
            </TouchableHighlight>

            <Button
                onPress={() => true}
                title="Red button!"
                color="red"
            />
        </View>
    )
}
export default ButtonsExample;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})

