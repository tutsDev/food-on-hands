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
  Platform
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const filterOptions = ['Pratos', 'Bebidas', 'Porções', 'Sobremesa'];

export default function NovoCardapioEtapa2Screen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('novo'); // 'novo' | 'existente'
  const [activeFilter, setActiveFilter] = useState('Pratos');

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
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/776/776656.png' }}
            style={styles.profilePic}
          />
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Por onde começar?</Text>
          <Text style={styles.subtitle}>
            Crie seu próprio cardápio.
          </Text>
        </View>
      </SafeAreaView>

      {/* TABS E CORPO BRANCO */}
      <View style={styles.bodyWrapper}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tabButtonNovo,
              activeTab === 'novo' ? { zIndex: 10 } : { opacity: 0.8 }
            ]}
            onPress={() => setActiveTab('novo')}
            activeOpacity={0.9}
          >
            <Text style={styles.tabText}>Novo cardapio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButtonExistente,
              activeTab === 'existente' ? { opacity: 1 } : { opacity: 0.9 }
            ]}
            onPress={() => setActiveTab('existente')}
            activeOpacity={0.9}
          >
            <Text style={styles.tabText}>Cardapio existente</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentCard}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            {/* PROGRESS BAR - 2ª etapa ativa */}
            <View style={styles.progressContainer}>
              <View style={[styles.progressPill, styles.progressPillActive]} />
              <View style={[styles.progressPill, styles.progressPillActive]} />
              <View style={styles.progressPill} />
              <View style={styles.progressPill} />
              <View style={styles.progressPill} />
            </View>

            <Text style={styles.sectionTitle}>Estrutura do cardapio</Text>

            <Text style={styles.infoText}>
              Filtre o que seus clientes estão procurando em seu cardapio separando por abas de opções.
            </Text>

            {/* FILTROS (Chips) */}
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
                {filterOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.filterChip,
                      activeFilter === option && styles.filterChipActive
                    ]}
                    onPress={() => setActiveFilter(option)}
                  >
                    <Text style={[
                      styles.filterChipText,
                      activeFilter === option && styles.filterChipTextActive
                    ]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* ADICIONAR PRODUTO */}
            <View style={styles.addProductContainer}>
              <TouchableOpacity style={styles.addProductButton} onPress={() => router.push('/novo-cardapio-etapa3')}>
                <Ionicons name="add" size={40} color="#000" />
              </TouchableOpacity>
              <Text style={styles.addProductTitle}>Adicionar produto</Text>
              <Text style={styles.addProductSubTitle}>Ainda não ha nenhum produto cadastrado.</Text>
            </View>

          </ScrollView>
        </View>
      </View>

      {/* --- TAB BAR INFERIOR CUSTOMIZADA --- */}
      <View style={styles.customTabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Feather name="home" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Botão Central Flutuante (FAB) avançar para etapa 3 */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8} onPress={() => router.push('/novo-cardapio-etapa3')}>
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
    marginBottom: 30,
    alignItems: 'center',
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
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  bodyWrapper: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  tabButtonNovo: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
  },
  tabButtonExistente: {
    flex: 1,
    backgroundColor: '#EAA973',
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
    marginLeft: -15,
    paddingLeft: 15,
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  contentCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopRightRadius: 30,
    marginTop: -1,
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
    backgroundColor: '#D6DEEA',
    borderRadius: 4,
    marginHorizontal: 3,
  },
  progressPillActive: {
    backgroundColor: '#4EABF8',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
    marginBottom: 20,
  },

  // Customizações da Etapa 2
  filtersScroll: {
    marginBottom: 30,
    flexDirection: 'row',
  },
  filterChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginRight: 10,
  },
  filterChipActive: {
    backgroundColor: '#000',
  },
  filterChipText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 14,
  },
  filterChipTextActive: {
    color: '#FFF',
  },
  addProductContainer: {
    width: '100%',
    height: 250,
    borderWidth: 2,
    borderColor: '#EFEFEF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  addProductButton: {
    width: 70,
    height: 70,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  addProductTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  addProductSubTitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
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
