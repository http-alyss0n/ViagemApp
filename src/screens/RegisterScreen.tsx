import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addRecord } from '../data/records';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const [data, setData] = useState({
    data: '',
    partida: '',
    destino: '',
    kmPartida: '',
    horarioPartida: '',
    kmChegada: '',
    horarioChegada: '',
    veiculo: '',
    motorista: '',
  });

  const navigation = useNavigation();

  const handleInputChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  const handleRegister = () => {
    addRecord(data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {Object.keys(data).map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.replace(/([A-Z])/g, ' $1')}
          value={data[field]}
          onChangeText={(text) => handleInputChange(field, text)}
        />
      ))}
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
