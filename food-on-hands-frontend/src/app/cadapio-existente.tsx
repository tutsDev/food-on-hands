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
    Platform,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// Mock data para os cardápios recém-criados
const existingMenus = [
    {
        id: '1',
        title: 'Prato Principal',
        category: 'ALMOÇO',
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80',
        date: 'Atualizado hoje'
    },
    {
        id: '2',
        title: 'Shop Burger',
        category: 'LANCHES',
        imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80',
        date: 'Há 2 dias'
    },
    {
        id: '3',
        title: 'Sushi Especial',
        category: 'JANTAR',
        imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80',
        date: 'Há 1 semana'
    },
];

export default function CadapioExistenteScreen() {
    const router = useRouter();

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
                        Decida entre criar seu proprio estilo de cardapio ou usar um layout ja existente.
                    </Text>
                </View>
            </SafeAreaView>

            {/* TABS E CORPO BRANCO */}
            <View style={styles.bodyWrapper}>
                <View style={styles.tabsContainer}>
                    {/* Tab Novo */}
                    <TouchableOpacity
                        style={[styles.tabButtonNovo, { opacity: 0.8 }]}
                        onPress={() => router.replace('/novo-cardapio')}
                        activeOpacity={0.9}
                    >
                        <Text style={styles.tabText}>Novo cardapio</Text>
                    </TouchableOpacity>

                    {/* Tab Existente */}
                    <TouchableOpacity
                        style={[styles.tabButtonExistente, { opacity: 1, zIndex: 10 }]}
                        activeOpacity={1}
                    >
                        <Text style={styles.tabText}>Cardapio existente</Text>
                    </TouchableOpacity>
                </View>

                {/* CONTEÚDO BRANCO */}
                <View style={styles.contentCard}>
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                        {/* INFO TEXT */}
                        <Text style={styles.infoText}>
                            Aqui estão os cardápios que você já criou. Selecione um para visualizar ou editar suas informações.
                        </Text>

                        {/* LISTA DE CARDÁPIOS */}
                        <View style={styles.listContainer}>
                            {existingMenus.map((menu) => (
                                <View key={menu.id} style={styles.menuCard}>
                                    <Image source={{ uri: menu.imageUrl }} style={styles.menuImage} />

                                    <View style={styles.menuInfo}>
                                        <Text style={styles.menuTitle} numberOfLines={1}>{menu.title}</Text>
                                        <Text style={styles.menuCategory}>{menu.category}</Text>
                                        <View style={styles.dateContainer}>
                                            <Feather name="clock" size={12} color="#888" />
                                            <Text style={styles.menuDate}>{menu.date}</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.editButton}
                                        onPress={() => router.push('/novo-cardapio-etapa2')} // Simula edição
                                    >
                                        <Feather name="edit-2" size={18} color="#FFF" />
                                        <Text style={styles.editButtonText}>Editar</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>

                    </ScrollView>
                </View>
            </View>

            {/* --- TAB BAR INFERIOR CUSTOMIZADA --- */}
            <View style={styles.customTabBar}>
                <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
                    <Feather name="home" size={24} color="#FFF" />
                </TouchableOpacity>

                {/* Botão Central Flutuante (FAB) não muito interativo aqui, podemos manter o Plus ou nada */}
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
        marginTop: -1,
    },
    scrollContent: {
        paddingHorizontal: 25,
        paddingTop: 30,
        paddingBottom: 100,
    },

    infoText: {
        fontSize: 14,
        color: '#000',
        lineHeight: 20,
        marginBottom: 30,
    },

    // Menu List
    listContainer: {
        gap: 15,
    },
    menuCard: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    menuImage: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 15,
    },
    menuInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    menuCategory: {
        fontSize: 12,
        color: '#E9723D',
        fontWeight: '600',
        marginBottom: 4,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuDate: {
        fontSize: 11,
        color: '#888',
        marginLeft: 4,
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginLeft: 10,
    },
    editButtonText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5,
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
