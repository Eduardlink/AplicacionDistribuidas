import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const EquiposItems = ({ equipos, handleDeleteEquipos, handleActivateEquipos }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.tableContainer}>
          <View style={styles.headerRow}>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Id</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Nombre</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Descripcion</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Estado equipo</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Disponibilidad</Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.headerText}>Estado</Text>
            </View>            
          </View>
          <View style={styles.dataRow}>
            <View style={styles.dataCell}>
              <Text style={styles.textContainer}>{equipos.id_equ}</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.textContainer}>{equipos.nombre_equ}</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.textContainer}>{equipos.descripcion_equ}</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.textContainer}>{equipos.estado_equ}</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.textContainer}>{equipos.disponibilidad_equ}</Text>
            </View>
            <View style={styles.dataCell}>
              <Text style={styles.textContainer}>{equipos.estado}</Text>
            </View>            
          </View>
        </View>
      </ScrollView>
      <View style={styles.optionContainer}>
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={() => {
            handleDeleteEquipos(equipos.id_equ)
          }}>
            <Text style={styles.textButtons}>Deshabilitar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.updateButton}>
          <TouchableOpacity onPress={() => {         
            navigation.navigate('EquiposFormScreen', { id_equ: equipos.id_equ })
          }}>
            <Text style={styles.textButtons}>Actualizar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activateButton}>
          <TouchableOpacity onPress={() => {         
            handleActivateEquipos(equipos.id_equ)
          }}>
            <Text style={styles.textButtons}>Habilitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  tableContainer: {
    paddingVertical: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  dataRow: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#cccccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
    flex: 1,
    width: 280
  },
  dataCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#AF8A46',
    paddingVertical: 10,
    paddingHorizontal: 5,
    flex: 1,
    width: 280
  },
  headerText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    color: '#000000',
    textAlign: 'center',
  },
  textButtons: {
    color: '#000000',
    textAlign: 'center',    
    padding: 7,
    fontSize: 13,
  },
  optionContainer: {    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginBottom: 20,
    width: 338,
  },
  deleteButton: {    
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#CA2121',
    borderRadius: 8,
    flex: 1,
    width: 100,
  },
  updateButton: {    
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    left: 5,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#F5AC1A',
    borderRadius: 8,
    flex: 1,
    width: 100,
  },
  activateButton: {    
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    left: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#35B317',
    borderRadius: 8,
    flex: 1,
    width: 100,
  },

});

export default EquiposItems;
