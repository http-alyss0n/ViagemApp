import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getRecords } from '../data/records';

export default function HistoryScreen() {
  const records = getRecords();

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.recordItem}>
            <Text>Data: {item.data}</Text>
            <Text>Partida: {item.partida}</Text>
            <Text>Destino: {item.destino}</Text>
            <Text>KM Partida: {item.kmPartida}</Text>
            <Text>Horário Partida: {item.horarioPartida}</Text>
            <Text>KM Chegada: {item.kmChegada}</Text>
            <Text>Horário Chegada: {item.horarioChegada}</Text>
            <Text>Veículo: {item.veiculo}</Text>
            <Text>Motorista: {item.motorista}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  recordItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
