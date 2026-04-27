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
  Modal,
  FlatList
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const typographyOptions = [
  'Padrão (Sistema)',
  'Serifada (Clássica)',
  'Sem Serifa (Moderna)',
  'Cursiva (Elegante)',
  'Monoespaçada (Tech)'
];

export default function NovoCardapioEtapa3Screen() {
  const router = useRouter();
  const [themeOption, setThemeOption] = useState<'claro' | 'escuro'>('claro');
  const [tipografia, setTipografia] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.mainTitle}>Terceira etapa</Text>
          <Text style={styles.subtitle}>
            Com a estrutura feita é hora de personalizar a identidade do seu cardapio
          </Text>
        </View>
      </SafeAreaView>

      {/* CORPO BRANCO (Sem abas extras) */}
      <View style={styles.contentCard}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* PROGRESS BAR - 3ª etapa ativa */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={[styles.progressPill, styles.progressPillActive]} />
            <View style={styles.progressPill} />
            <View style={styles.progressPill} />
          </View>

          <Text style={styles.sectionTitle}>Personalização</Text>

          {/* TEMA */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Tema</Text>
            
            <View style={styles.radioRow}>
              {/* Opção CLARO */}
              <TouchableOpacity 
                style={styles.radioOption} 
                onPress={() => setThemeOption('claro')}
                activeOpacity={0.8}
              >
                <View style={styles.radioCircle}>
                  {themeOption === 'claro' && <View style={styles.radioInnerCircle} />}
                </View>
                <Text style={styles.radioText}>Claro</Text>
              </TouchableOpacity>

              {/* Opção ESCURO */}
              <TouchableOpacity 
                style={styles.radioOption} 
                onPress={() => setThemeOption('escuro')}
                activeOpacity={0.8}
              >
                <View style={styles.radioCircle}>
                  {themeOption === 'escuro' && <View style={styles.radioInnerCircle} />}
                </View>
                <Text style={styles.radioText}>Escuro</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TIPOGRAFIA */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Tipografia</Text>
            <TouchableOpacity style={styles.dropdownPicker} onPress={() => setModalVisible(true)}>
              <Text style={{ color: tipografia ? '#000' : '#999', fontSize: 16 }}>{tipografia || '-'}</Text>
              <Ionicons name="caret-down" size={16} color="#000" />
            </TouchableOpacity>
          </View>

          {/* DESTAQUE OU PROMOÇÃO */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Destaque ou Promoção</Text>
            <Text style={styles.subLabel}>
              Aproveite para destacar produtos ou lançar promoções que conquistem seus clientes.
            </Text>
            
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Destaque um produto</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Crie uma promoção</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>

      {/* MODAL DE TIPOGRAFIA */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione uma Fonte</Text>
            <FlatList
              data={typographyOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.categoryItem} 
                  onPress={() => {
                    setTipografia(item);
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

        {/* Botão Central Flutuante (FAB) (Avançar para etapa 4) */}
        <View style={styles.fabWrapper}>
          <TouchableOpacity style={styles.fabButton} activeOpacity={0.8} onPress={() => router.push('/novo-cardapio-etapa4')}>
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
    marginBottom: 40, // um pouco mais de espaço já que não temos as tabs
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
  inputGroup: {
    marginBottom: 35,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: '#000',
    alignSelf: 'flex-start',
    paddingBottom: 2,
  },
  
  // Customizações do Form da Etapa 3
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40, // espaçamento entre as opções
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  radioText: {
    fontSize: 14,
    color: '#000',
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
    backgroundColor: '#FFF',
  },
  subLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
    lineHeight: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#E0E0E0', 
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 12,
    color: '#333',
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
