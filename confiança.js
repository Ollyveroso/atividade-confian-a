import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Ollyver({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O que eu quero que você faça?
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Pedro"
          onPress={() => navigation.navigate('Gabriel')}
          color="#008080" // Personalize a cor conforme desejado
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Wesker"
          onPress={() => navigation.navigate('Victor')}
          color="#800080" // Personalize a cor conforme desejado
        />
      </View>
    </View>
  );
}

function Gabriel({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Oi Pedro! Que tal um desafio divertido? Imagine que você está em uma fazenda ensolarada, cercado por galinhas animadas. Agora, você consegue imitar o som e os movimentos engraçados de uma galinha? Mostre sua criatividade e faça todo mundo rir!
      </Text>
    </View>
  );
}

function Victor({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá Wesker! será que você consegue fazer uma dancinha para a sala
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo para a tela
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20, // Adiciona um espaçamento horizontal para melhor legibilidade
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 10,
  },
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gustavo">
        <Stack.Screen name="Ollyver" component={Gustavo} />
        <Stack.Screen name="Pedro" component={Gabriel} />
        <Stack.Screen name="Wesker" component={Victor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
