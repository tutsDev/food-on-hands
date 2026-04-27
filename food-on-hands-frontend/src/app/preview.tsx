import React from 'react';
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
  Platform
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PreviewScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* HEADER SECTION */}
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* CARD LARANJA */}
        <View style={styles.orangeCard}>
          <Text style={styles.mainTitle}>Parabens</Text>
          <Text style={styles.subtitle}>Aqui esta seu cardapio finalizado!</Text>

          {/* MOCKUP DO CARDAPIO */}
          <View style={styles.mockupContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' }} // Burger image
              style={styles.mockupImage}
            />
            <View style={styles.mockupOverlay}>
              <Text style={styles.mockupMenuText}>MENU</Text>
              <View style={styles.mockupPromoBadge}>
                <Text style={styles.mockupPromoText}>Promoção</Text>
                <Text style={styles.mockupPromoText}>do dia!</Text>
              </View>
              <Text style={styles.mockupPrice}>R$ 42,99</Text>
            </View>
          </View>

          {/* BOTÕES */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnBlack}>
              <Text style={styles.btnBlackText}>Abrir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnWhite}>
              <Text style={styles.btnWhiteText}>Gerar QR code</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* --- TAB BAR INFERIOR CUSTOMIZADA --- */}
      <View style={styles.customTabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Feather name="home" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Botão Central Flutuante (FAB) "+" */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8} onPress={() => router.push('/novo-cardapio')}>
            <Ionicons name="add" size={36} color="#FFF" />
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
    backgroundColor: '#FAF6F0', // Fundo off-white
  },
  header: {
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120, // Tab bar space plus extra
  },
  orangeCard: {
    backgroundColor: '#F7BA6C', // Cor laranja suave do card
    borderRadius: 25,
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  mockupContainer: {
    width: '100%',
    height: 350,
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 30,
    elevation: 5, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    position: 'relative',
  },
  mockupImage: {
    width: '100%',
    height: '60%', // Imagem ocupa metade/60% do topo
    resizeMode: 'cover',
  },
  mockupOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '60%',
    backgroundColor: 'rgba(0,0,0,0.3)', // Escurece um pouco a imagem
    padding: 15,
  },
  mockupMenuText: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  mockupPromoBadge: {
    backgroundColor: '#E84C3D',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  mockupPromoText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  mockupPrice: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 20,
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15, // Espaçamento entre os botões
  },
  btnBlack: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    minWidth: 120,
  },
  btnBlackText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnWhite: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  btnWhiteText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
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
    backgroundColor: '#FAF6F0', // Match bg color
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
