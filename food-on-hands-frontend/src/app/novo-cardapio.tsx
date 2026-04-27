import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  Modal,
  FlatList
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const restaurantCategories = [
  'Lanchonete',
  'Pizzaria',
  'Hamburgueria',
  'Comida Japonesa',
  'Vegano/Vegetariano',
  'Restaurante Brasileiro',
  'Bares e Pubs',
  'Cafeteria'
];

export default function NovoCardapioScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('novo'); // 'novo' | 'existente'
  const [restauranteNome, setRestauranteNome] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* HEADER SECTION */}
      <SafeAreaView>
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>

          {/* Mock Logo */}
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

          {/* Profile Pic */}
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/776/776656.png' }}
            style={styles.profilePic}
          />
        </View>

        {/* HERO TITLES */}
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
          {/* Tab Novo */}
          <TouchableOpacity
            style={[
              styles.tabButtonNovo,
              { zIndex: 10 }
            ]}
            activeOpacity={1}
          >
            <Text style={styles.tabText}>Novo cardapio</Text>
          </TouchableOpacity>

          {/* Tab Existente */}
          <TouchableOpacity
            style={[
              styles.tabButtonExistente,
              { opacity: 0.9 }
            ]}
            onPress={() => router.replace('/cadapio-existente')}
            activeOpacity={0.9}
          >
            <Text style={styles.tabText}>Cardapio existente</Text>
          </TouchableOpacity>
        </View>

        {/* CONTEÚDO BRANCO */}
        <View style={styles.contentCard}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            {/* PROGRESS BAR */}
            <View style={styles.progressContainer}>
              <View style={[styles.progressPill, styles.progressPillActive]} />
              <View style={styles.progressPill} />
              <View style={styles.progressPill} />
              <View style={styles.progressPill} />
              <View style={styles.progressPill} />
            </View>

            {/* INFO TEXT */}
            <Text style={styles.infoText}>
              Hora de começar um novo cardapio, para facilitar na criação de seu novo cardapio vamos participar algumas etapas.
            </Text>

            {/* SECTION: IDENTIDADE */}
            <Text style={styles.sectionTitle}>Identidade do cardapio</Text>

            {/* NOME RESTAURANTE */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Nome do restaurante</Text>
              <TextInput
                style={styles.input}
                value={restauranteNome}
                onChangeText={setRestauranteNome}
              />
            </View>

            {/* LOGO & CATEGORIA */}
            <View style={styles.row}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 20 }]}>
                <Text style={styles.inputLabel}>Logo</Text>
                <TouchableOpacity style={styles.logoPicker}>
                  <View style={styles.logoDot} />
                </TouchableOpacity>
              </View>

              <View style={[styles.inputGroup, { flex: 2.5 }]}>
                <Text style={styles.inputLabel}>Categoria do restaurante</Text>
                <TouchableOpacity style={styles.dropdownPicker} onPress={() => setModalVisible(true)}>
                  <Text style={{ color: selectedCategory ? '#000' : '#999' }}>
                    {selectedCategory || 'Selecione...'}
                  </Text>
                  <Ionicons name="caret-down" size={16} color="#000" />
                </TouchableOpacity>
              </View>
            </View>

          </ScrollView>
        </View>
      </View>

      {/* --- MODAL DE CATEGORIAS --- */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione uma Categoria</Text>
            <FlatList
              data={restaurantCategories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => {
                    setSelectedCategory(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.categoryItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeModalBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModalBtnText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- TAB BAR INFERIOR CUSTOMIZADA --- */}
      <View style={styles.customTabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Feather name="home" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Botão Central Flutuante (FAB) para avançar */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8} onPress={() => router.push('/novo-cardapio-etapa2')}>
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
    backgroundColor: '#F9D1A4', // Cor de fundo principal semelhante à imagem
  },

  // Header Elements
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

  // Titles
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

  // Body layout
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
    marginLeft: -15, // Sobrepor o fundo branco
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
    marginTop: -1, // Remove qualquer linha sobrando entre a aba nova e o conteúdo
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 100, // espaço para tab bar
  },

  // Progress Bar
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
    backgroundColor: '#4EABF8', // Azul de destaque da imagem
  },

  infoText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
    marginBottom: 40,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },

  // Form Inputs
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 12,
    color: '#333',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    alignSelf: 'flex-start',
    paddingBottom: 2,
  },
  input: {
    backgroundColor: '#D9D9D9', // Cinza claro idêntico ao da imagem
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoPicker: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoDot: {
    width: 14,
    height: 14,
    backgroundColor: '#000',
    borderRadius: 7,
  },
  dropdownPicker: {
    height: 45,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  // Modal Classes
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  categoryItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  categoryItemText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  closeModalBtn: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeModalBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
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
