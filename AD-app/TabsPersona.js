import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EquiposScreen from './screen/EquiposScreen';
import SolicitudesScreen from './screen/SolicitudesScreen';
import SolicitudesFormScreen from './screen/SolicitudesFormScreen';
import CustodiaScreen from './screen/CustodiaScreen';
import DevolucionesScreen from './screen/DevolucionesScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabsPersona = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="EquiposMenu"
                options={{ title: 'Equipos' }}
            >
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen
                            name="EquiposScreen"
                            component={EquiposScreen}
                            options={({ navigation }) => ({
                                title: 'Listado de Equipos',
                                headerStyle: { backgroundColor: '#AF8A46' },
                                headerTitleStyle: { color: '#fff' },
                            })}
                        />
                        <Stack.Screen
                            name="SolicitudesFormScreen"
                            component={SolicitudesFormScreen}
                            options={{
                                title: 'Crear Nueva Solicitud',
                                headerStyle: { backgroundColor: '#AF8A46' },
                                headerTitleStyle: { color: '#fff' },
                                headerTintColor: '#fff',
                            }}
                        />
                    </Stack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="SolicitudesMenu"
                options={{ title: 'Solicitudes' }}
            >
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen
                            name="SolicitudesScreen"
                            component={SolicitudesScreen}
                            options={({ navigation }) => ({
                                title: 'Listado Solicitudes',
                                headerStyle: { backgroundColor: '#AF8A46' },
                                headerTitleStyle: { color: '#fff' },
                            })}
                        />
                    </Stack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="CustodiaMenu"
                options={{ title: 'Custodias' }}
            >
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen
                            name="CustodiaScreen"
                            component={CustodiaScreen}
                            options={{
                                title: 'Listado de Custodia',
                                headerStyle: { backgroundColor: '#AF8A46' },
                                headerTitleStyle: { color: '#fff' },
                            }}
                        />
                    </Stack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen
                name="DevolucionesMenu"
                options={{ title: 'Devoluciones' }}
            >
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen
                            name="DevolucionesScreen"
                            component={DevolucionesScreen}
                            options={{
                                title: 'Listado de Devoluciones',
                                headerStyle: { backgroundColor: '#AF8A46' },
                                headerTitleStyle: { color: '#fff' },
                            }}
                        />
                    </Stack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default TabsPersona;
