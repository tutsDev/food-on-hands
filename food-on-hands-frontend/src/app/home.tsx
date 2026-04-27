import React, { useReducer } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const { width } = Dimensions.get('window');

// --- Dados Simulados (Mock) ---
const foodData = [
  {
    id: '1',
    title: 'Curry',
    desc: 'Mistura aromática e complexa de especiarias secas e moídas, originária da Índia.',
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '2',
    title: 'Yakisoba',
    desc: 'Macarrão salteado com legumes, verduras e proteínas. Finalizado com molho shoyu.',
    img: 'https://images.unsplash.com/photo-1552611052-3ba9d45c6b09?auto=format&fit=crop&w=300&q=80',
  },
];

const chefData = [
  {
    id: '1',
    name: 'Carlos Fonseca',
    type: 'Restaurante Italiano',
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '2',
    name: 'João Silva',
    type: 'Cozinha Brasileira',
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80',
  },
];

export default function HomeScreen() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* --- ÁREA ROLÁVEL PRINCIPAL --- */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* HEADER / HERO SECTION */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80' }}
          style={styles.heroBackground}
        >
          {/* Overlay escuro para melhorar leitura do texto */}
          <View style={styles.heroOverlay}>
            <Text style={styles.heroSubtitle}>Veja estilos para seu</Text>
            <Text style={styles.heroTitle}>Menu</Text>
             <TouchableOpacity style={styles.heroButton} onPress={() => router.replace('/login')}>
                <Text style={styles.heroButtonText}>Sair</Text>
             </TouchableOpacity>
          

            {/* Dots de Paginação */}
            <View style={styles.dotsContainer}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </ImageBackground>

        {/* CORPO DA PÁGINA (Com borda arredondada subindo na imagem) */}
        <View style={styles.bodyContainer}>
          
          {/* SEARCH BAR */}
          <View style={styles.searchContainer}>
            <TextInput 
              style={styles.searchInput} 
              placeholder="Buscar..." 
              placeholderTextColor="#999"
            />
            <Feather name="search" size={20} color="#000" style={styles.searchIcon} />
          </View>

          <Text style={styles.sectionTitle}>Sugestões de pratos</Text>

          {/* LISTA DE PRATOS */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.foodListContainer}>
            {foodData.map((item) => (
              <View key={item.id} style={styles.foodCard}>
                <Image source={{ uri: item.img }} style={styles.foodImage} />
                <Text style={styles.foodTitle}>{item.title}</Text>
                <Text style={styles.foodDesc} numberOfLines={4}>{item.desc}</Text>
                
                <TouchableOpacity style={styles.addBtn}>
                  <Ionicons name="add" size={24} color="#FFF" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* LISTA DE CHEFS */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chefListContainer}>
            {chefData.map((item) => (
              <View key={item.id} style={styles.chefCard}>
                <Image source={{ uri: item.img }} style={styles.chefImage} />
                <View style={styles.chefInfo}>
                  <Text style={styles.chefName}>{item.name}</Text>
                  <Text style={styles.chefType}>{item.type}</Text>
                </View>
                <TouchableOpacity style={styles.followBtn}>
                  <Text style={styles.followBtnText}>Seguir estilo</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

        </View>
      </ScrollView>

      {/* --- TAB BAR INFERIOR CUSTOMIZADA --- */}
      <View style={styles.customTabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Feather name="home" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Botão Central Flutuante (FAB) com "recorte" branco */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8} onPress={() => router.push('/novo-cardapio')}>
            <Ionicons name="add" size={32} color="#FFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.replace('/perfil')}>
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
    backgroundColor: '#000', // Fundo preto para as bordas do SafeArea
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#F7C58E', // Cor de fundo principal (Pêssego/Laranja)
    paddingBottom: 100, // Espaço para a TabBar não cobrir o conteúdo
  },
  
  // Header / Hero
  heroBackground: {
    width: '100%',
    height: 320,
    justifyContent: 'flex-end',
  },
  heroOverlay: {
    padding: 20,
    paddingBottom: 50, // Espaço extra para a borda arredondada que vai subir
    backgroundColor: 'rgba(0,0,0,0.3)', // Escurece um pouco a imagem
    height: '100%',
    justifyContent: 'center',
  },
  heroSubtitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 40,
  },
  heroTitle: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'italic', // Imita a fonte cursiva
    marginBottom: 10,
  },
  heroButton: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginTop: 5,
  },
  heroButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 45,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#FFF',
  },

  // Corpo Principal
  bodyContainer: {
    backgroundColor: '#F7C58E',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -35, // Puxa o container para cima da imagem
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 25,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#000',
    marginBottom: 50, // Espaço extra porque as imagens dos cards vão subir
  },

  // Cards de Comida
  foodListContainer: {
    paddingBottom: 20,
    paddingLeft: 10,
  },
  foodCard: {
    backgroundColor: '#FFF',
    width: 170,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingBottom: 20,
    marginRight: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  foodImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: -40, // Faz a imagem sair do card para cima
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  foodTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  foodDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  addBtn: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Cards de Chef
  chefListContainer: {
    paddingVertical: 10,
  },
  chefCard: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 25,
    marginRight: 15,
    width: width * 0.8, // 80% da tela
  },
  chefImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chefInfo: {
    flex: 1,
  },
  chefName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  chefType: {
    fontSize: 12,
    color: '#666',
  },
  followBtn: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  followBtnText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Tab Bar (Bottom Navigation)
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
    top: -30, // Sobe para fora da tab bar
    backgroundColor: '#FFF', // O fundo branco cria o "recorte"
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