import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  Animated,
  Easing
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NovoCardapioEtapa5Screen() {
  const router = useRouter();
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Simular carregamento e ir para Home ou Perfil após alguns segundos
    const timer = setTimeout(() => {
      // Quando for pra valer, tiramos esse timeout, ele ficará atrelado a promise da API.
      // E aqui só simula que carregou e completou
      router.push('/preview'); // Redireciona para tela de parabenização final
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

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
      </SafeAreaView>

      {/* CORPO BRANCO */}
      <View style={styles.contentCard}>
        <View style={styles.scrollContent}>

          {/* PROGRESS BAR - 5ª etapa ativa */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
          </View>

          <Text style={styles.mainTitleActive}>Criando seu cardapio</Text>

          {/* SPINNER SIMULANDO A NOVA PÁGINA */}
          <View style={styles.spinnerContainer}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <View style={styles.spinnerCircle} />
            </Animated.View>
          </View>

        </View>
      </View>

      {/* --- TAB BAR INFERIOR CUSTOMIZADA --- */}
      <View style={styles.customTabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Feather name="home" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Botão Central Flutuante (FAB) que é um "+" na última tela de acordo com imagem */}
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
    backgroundColor: '#F9D1A4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    marginBottom: 30, // leve folga
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
  contentCard: {
    flex: 1,
    backgroundColor: '#FAF9F6', // branco bem leve
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 100,
    flex: 1, // ocupa tudo para podermos centralizar o spinner
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  progressPill: {
    flex: 1,
    height: 8,
    backgroundColor: '#D6DEEA',
    borderRadius: 4,
    marginHorizontal: 3,
  },
  progressPillActive: {
    backgroundColor: '#4EABF8', // Azul ativo
  },
  mainTitleActive: {
    fontSize: 26,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
    marginBottom: 60,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  spinnerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 22,
    borderColor: '#000',
    borderTopColor: 'transparent', // Cria a quebra na linha para dar efeito do loader
    borderRightColor: '#000',
    borderBottomColor: '#000',
    borderLeftColor: '#000',
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
