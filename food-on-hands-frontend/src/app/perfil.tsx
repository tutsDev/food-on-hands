import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Usando Expo Icons (Feather e Ionicons)
import { useRouter } from 'expo-router';
// Obtém as dimensões da tela para auxiliar no layout
const { width } = Dimensions.get('window');

// Dados de exemplo baseados na imagem
const profileData = {
  name: 'Guilherme Soares',
  instagram: 'https://www.instagram.com/guimaster06/',
  avatarUrl: 'https://cdn-icons-png.flaticon.com/512/776/776656.png', // Coloque a URL da foto de perfil aqui
  stats: [
    { label: 'Salvos', count: 2 },
    { label: 'Feitos', count: 5 },
    { label: 'Rascunhos', count: 3 },
  ],
};

const madeMenus = [
  { id: '1', title: 'Prato Principal', category: 'MENU', type: 'image', imageUrl: 'data:image/png;base64,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', bgColor: '#FFFFFF', titleColor: '#000000', categoryColor: '#E9723D' },
  { id: '2', title: 'Shop Burger', type: 'image', imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTngHm6CGenMzOTdGo5uO8TcBIzl3besJLqRCBv1dEPw43JN35Clw08lfHgeEe_X8vUrKpQ-ZfgFArSQK6emhh-j9XjtpDwZnBtGnJnFfwTNGxsRqEi188W2hmmEqN87VBezPx/s0/assuntos-criativos-logo-burger-5.png' }, // Imagem de exemplo genérica
  { id: '3', title: 'SUSHI', type: 'image', imageUrl: 'data:image/png;base64,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', bgColor: '#000000', titleColor: '#E9723D', categoryColor: '#E9723D' },
];

const drafts = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
];

const UserProfileScreen = () => {
  const router = useRouter(); // Iniciando o roteador para navegação
  // Componente reutilizável para itens de estatísticas
  const StatItem = ({ label, count }: { label: string; count: number }) => (
    <View style={styles.statItem}>
      <Text style={styles.statCount}>{count}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Seção do Cabeçalho e Estatísticas */}
        <View style={styles.headerBackground}>
          {/* Título e Menu Superior */}
          <View style={styles.topBar}>
            <Text style={styles.topBarTitle}>Perfil</Text>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Informações do Perfil */}
          <View style={styles.profileInfoContainer}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: profileData.avatarUrl }} style={styles.avatar} />
            </View>
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>{profileData.name}</Text>
              <Text style={styles.profileInstagram}>{profileData.instagram}</Text>
            </View>
          </View>

          {/* Estatísticas */}
          <View style={styles.statsRow}>
            {profileData.stats.map((stat, index) => (
              <StatItem key={index} label={stat.label} count={stat.count} />
            ))}
          </View>
        </View>

        {/* Contêiner do Conteúdo Principal */}
        <View style={styles.contentContainer}>
          {/* Barra de Pesquisa */}
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Pesquisar..."
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
            <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          </View>

          {/* Seção Cardápios Feitos */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Cardápios Feitos</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScrollList}
            >
              {madeMenus.map((item) => (
                <View key={item.id} style={[styles.menuCard, item.type === 'image' && styles.imageCard]}>
                  {item.type === 'text' ? (
                    <View style={[styles.textCardContent, { backgroundColor: item.bgColor }]}>
                      <Text style={[styles.textCardTitle, { color: item.titleColor }]}>{item.title}</Text>
                      <Text style={[styles.textCardCategory, { color: item.categoryColor }]}>{item.category}</Text>
                    </View>
                  ) : (
                    <View style={styles.imageCardContent}>
                      <Image source={{ uri: item.imageUrl }} style={styles.menuCardImage} />
                      <Text style={styles.imageCardOverlayText}>{item.title}</Text>
                      <Text style={styles.imageCardOverlaySubText}>Aqui tem sabor!</Text>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Seção Rascunhos */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Rascunhos</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScrollList}
            >
              {drafts.map((item) => (
                <View key={item.id} style={styles.draftCard}>
                  <View style={styles.draftIconContainer}>
                    <Feather name="image" size={32} color="#AAAAAA" />
                    <Feather name="search" size={16} color="#AAAAAA" style={styles.draftSearchIcon} />
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Espaço extra para a barra de navegação inferior */}
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* Barra de Navegação Inferior (Simulada) */}
      <View style={styles.bottomNavigationContainer}>
        <View style={styles.bottomNavBar}>
          <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/home')}>
            <Ionicons name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.centerNavItem]} onPress={() => router.push('/novo-cardapio')}>
            <View style={styles.centerNavCircle}>
              <Ionicons name="add-outline" size={30} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="person-circle" size={36} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDD29C', // Fundo superior (cabeçalho)
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerBackground: {
    paddingTop: 10,
    paddingBottom: 60, // Dá espaço para o conteúdo flutuante sobrepor
    backgroundColor: '#FDD29C',
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  topBarTitle: {
    fontSize: 40,
    color: '#000000',
    fontFamily: 'system-ui',
    alignItems: 'center', // Pode usar uma fonte do sistema similar 
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    marginRight: 15,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'serif', // Usando serif como na imagem para o nome
  },
  profileInstagram: {
    fontSize: 12,
    color: '#666666',
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 2,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -50, // Efeito de sobreposição
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 0,
    elevation: 5, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    fontFamily: 'system-ui',
  },
  searchIcon: {
    marginLeft: 10,
  },
  sectionContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
    fontFamily: 'serif',
  },
  horizontalScrollList: {
    paddingLeft: 0,
  },
  menuCard: {
    width: (width - 60) / 3, // Divide a largura entre 3 cartões, descontando o padding
    aspectRatio: 1, // Torna o cartão quadrado
    borderRadius: 15,
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  imageCard: {
    borderWidth: 0, // Remove a borda para cartões com imagem
  },
  textCardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase', // "MENU BURGUERS"
    fontFamily: 'serif',
  },
  textCardCategory: {
    fontSize: 10,
    marginTop: 3,
    textTransform: 'uppercase',
  },
  imageCardContent: {
    flex: 1,
  },
  menuCardImage: {
    width: '100%',
    height: '100%',
  },
  imageCardOverlayText: {
    position: 'absolute',
    top: 25,
    left: 10,
    right: 10,
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  imageCardOverlaySubText: {
    position: 'absolute',
    bottom: 25,
    left: 10,
    right: 10,
    fontSize: 8,
    color: '#E9723D',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  draftCard: {
    width: (width - 60) / 3,
    aspectRatio: 1,
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  draftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  draftSearchIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  bottomNavBar: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    position: 'relative',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerNavItem: {
    marginTop: -40, // Eleva o ícone central
    zIndex: 1,
  },
  centerNavCircle: {
    backgroundColor: '#000000',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF', // Anel branco
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default UserProfileScreen;