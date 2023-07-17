import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Platform, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { login } from "../api";

import { CedulaContext } from '../componentsWeb/CedulaContext';

const LoginScreen = () => {

    const { cedulaGlobal, setCedulaGlobal } = useContext(CedulaContext);

    const [cedula, setCedula] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [error, setError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const navigation = useNavigation();

    // Función para manejar el inicio de sesión
    const handleLogin = async () => {
        try {
            // Realizar el inicio de sesión
            const response = await login(cedula, contrasenia);
            const { message, rol } = response;
            console.log('Usuario autenticado:', response);
            // Mostrar mensaje de inicio de sesión exitoso
            console.log(message);
            // Cuando obtengas el valor de la cédula, lo asignas al estado global
            setCedulaGlobal(cedula);
            // Redirigir a diferentes pantallas según el rol del usuario
            if (rol === 'Tecnico') {
                navigation.navigate('Tabs'); // Redirigir al screen de Tabs (Técnico)
            } else if (rol === 'Estudiante' || rol === 'Docente') {
                navigation.navigate('TabsPersona'); // Redirigir al screen de HomeScreen (Estudiante)
            }
        } catch (error) {
            // Manejar error de inicio de sesión
            console.error('Error al iniciar sesión:', error);
            console.log(error.message);
        }
    };

    const renderCedulaWarning = () => {
        if (cedula.length < 10) {
            return (
                <Text>
                    La cedula tiene que tener 10 digitos.
                </Text>
            );
        }
        return null;
    };

    const renderContraseniaWarning = () => {
        if (contrasenia.length < 5) {
            return (
                <Text>
                    Ingrese una contraseña valida, minimo 5 caracteres
                </Text>
            )
        }
    }

    const validateForm = () => {
        setIsFormValid(cedula.length === 10 && contrasenia.length >= 4);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>INICIO SECION USUARIO FISEI</Text>
            <TextInput
                style={styles.input}
                placeholder="Cédula"
                value={cedula}
                onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, "");
                    setCedula(numericValue);
                    validateForm();
                }}
                maxLength={10}
                keyboardType="numeric" // Permitir solo entrada numérica
            />
            {renderCedulaWarning()}
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={contrasenia}
                onChangeText={(text) => {
                    setContrasenia(text);
                    validateForm();
                }}
                maxLength={25}
            />
            {renderContraseniaWarning()}
            <Text></Text>
            <Button title="Iniciar sesión" onPress={handleLogin} disabled={!isFormValid} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
});

export default LoginScreen;
