import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  TextInput
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function NovoCardapioEtapa4Screen() {
  const router = useRouter();
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      
      {/* HEADER SECTION */}
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          
          <View style={styles.logoContainer}>
            <View style={styles.logoIcons}>
              <View style={styles.forkKnifeLine} />
              <Ionicons name="restaurant" size={24} color="#4A90E2" style={{ marginHorizontal: -5 }} />
            </View>
            <View>
              <Text style={styles.logoTextRed}>FOOD ON</Text>
              <Text style={styles.logoTextBlue}>HANDS</Text>
            </View>
          </View>

          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80' }} 
            style={styles.profilePic} 
          />
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Quarta etapa</Text>
          <Text style={styles.subtitle}>
            Você esta quase la, agora so falta a localização do seu restaurante
          </Text>
        </View>
      </SafeAreaView>

      {/* CORPO BRANCO */}
      <View style={styles.contentCard}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* PROGRESS BAR - 4ª etapa ativa */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={styles.progressPill} />
          </View>

          <Text style={styles.sectionTitle}>Localização</Text>

          {/* FORMULÁRIO DE LOCALIZAÇÃO */}
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>CEP</Text>
            <TextInput 
              style={styles.textInput} 
              value={cep} 
              onChangeText={setCep} 
              keyboardType="numeric" 
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Endereço</Text>
            <TextInput 
              style={styles.textInput} 
              value={endereco} 
              onChangeText={setEndereco} 
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Número da residência</Text>
            <TextInput 
              style={styles.textInput} 
              value={numero} 
              onChangeText={setNumero} 
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Complemento (opcional)</Text>
            <TextInput 
              style={styles.textInput} 
              value={complemento} 
              onChangeText={setComplemento} 
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Bairro</Text>
            <TextInput 
              style={styles.textInput} 
              value={bairro} 
              onChangeText={setBairro} 
            />
          </View>

        </ScrollView>
      </View>

      {/* --- TAB BAR INFERIOR CUSTOMIZADA --- */}
      <View style={styles.customTabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Feather name="home" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Botão Central Flutuante (FAB) (Avançar para etapa 5) */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8} onPress={() => router.push('/novo-cardapio-etapa5')}>
            <Ionicons name="arrow-forward" size={32} color="#FFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/perfil')}>
          <Feather name="user" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9D1A4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  forkKnifeLine: {
    width: 10,
    height: 25,
    backgroundColor: '#E84C3D',
    borderRadius: 2,
  },
  logoTextRed: {
    color: '#E84C3D',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 12,
  },
  logoTextBlue: {
    color: '#4A90E2',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 12,
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#000',
  },
  contentCard: {
    flex: 1,
    backgroundColor: '#FAF9F6', // branco bem leve off-white como na imagem
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 100,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  progressPill: {
    flex: 1,
    height: 8,
    backgroundColor: '#D6DEEA', // Azul claro acinzentado nativo da imagem
    borderRadius: 4,
    marginHorizontal: 3,
  },
  progressPillActive: {
    backgroundColor: '#4EABF8', // Azul ativo
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 13,
    color: '#000',
    marginBottom: 6,
    marginLeft: 2,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    fontSize: 15,
  },
  customTabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fabWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
    backgroundColor: '#FFF',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButton: {
    backgroundColor: '#000',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
