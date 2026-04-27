import React from 'react';
import { useRouter } from 'expo-router';
import {
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

export default function SignUpScreen() {
    const router = useRouter();
    return(
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* KeyboardAvoidingView evita que o teclado cubra os inputs no iPhone */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.content}>
            
            
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Cadastrar</Text>

            {/* CONTAINER DE INPUTS */}
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input} 
                placeholder="usuário" 
                placeholderTextColor="#A0A0A0"
              />
              
              <TextInput 
                style={styles.input} 
                placeholder="senha" 
                secureTextEntry={true} 
                placeholderTextColor="#A0A0A0"
              />
              
              <TextInput 
                style={styles.input} 
                placeholder="Email" 
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#A0A0A0"
              />
            </View>

            {/* BOTÃO SIGN UP */}
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => router.replace('/bem-vindo')}>
              
              <Text style={styles.buttonText}>Pronto</Text>
              
              
               
          
            </TouchableOpacity>

{/* LINK LOGIN */}
<TouchableOpacity 
  style={styles.loginLink} 
  onPress={() => router.push('/login')} 
>
  <Text style={styles.loginText}>Entrar</Text>
</TouchableOpacity>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC91', // Cor bege/alaranjada do fundo
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  logo: {
    width: 280,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    gap: 15, // Espaçamento entre os inputs
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFF5E9',
    borderRadius: 30,
    paddingHorizontal: 25,
    fontSize: 16,
    color: '#333',
    // Sombra para Android
    elevation: 3,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    width: '70%',
    height: 55,
    backgroundColor: '#FFAD52', // Cor laranja do botão
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 50,
  },
  loginText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});