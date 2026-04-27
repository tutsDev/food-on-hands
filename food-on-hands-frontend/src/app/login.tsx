import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Image, SafeAreaView, StatusBar, KeyboardAvoidingView,
  Platform, ScrollView
} from 'react-native';
import { useRouter } from 'expo-router'; // 👈 Importação para navegação

export default function LoginScreen() {
  const router = useRouter(); // 👈 Iniciando o roteador

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>

            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Entrar</Text>

            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="usuário" placeholderTextColor="#A0A0A0" autoCapitalize="none" />
              <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} placeholderTextColor="#A0A0A0" />
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => router.replace('/bem-vindo')}>
              
              
            
              <Text style={styles.buttonText}>Entrar</Text>
              
              
            </TouchableOpacity>

            {/* 👈 Quando clicar em "Sign up", ele volta para a tela '/' (index) */}
            <TouchableOpacity 
              style={styles.signUpLink} 
              onPress={() => router.push('/')}
            >
              <Text style={styles.signUpText}>Cadastre-se</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ... ESTILOS EXATAMENTE IGUAIS AOS ANTERIORES ...
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFCC91' },
  scrollContent: { flexGrow: 1, justifyContent: 'center' },
  content: { alignItems: 'center', paddingHorizontal: 40, paddingVertical: 20 },
  logo: { width: 280, height: 150, marginBottom: 20 },
  title: { fontSize: 42, fontWeight: 'bold', color: '#000', marginBottom: 40 },
  inputContainer: { width: '100%', gap: 15 },
  input: { width: '100%', height: 55, backgroundColor: '#FFF5E9', borderRadius: 30, paddingHorizontal: 25, fontSize: 16, color: '#333', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  button: { width: '70%', height: 55, backgroundColor: '#FFAD52', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 30, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 5 },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  signUpLink: { marginTop: 50 },
  signUpText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});