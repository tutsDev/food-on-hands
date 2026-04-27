import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function BemVindoScreen() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a Home após 3 segundos
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFD19A" />
      <View style={styles.content}>

        {/* Logo */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Bem-vindo</Text>

        {/* Imagens com fundos decorativos */}
        <View style={styles.imagesContainer}>

          {/* Prato 1 - Esquerda Superior */}
          <View style={[styles.blobContainer, styles.blob1]}>
            <Image
              // Imagem ilustrativa para hambúrguer
              source={{ uri: 'https://img.pikbest.com/png-images/20250318/a-juicy-double-cheeseburger-with-lettuce-and-tomato-flying-through-the-air_11606032.png!bw700' }}
              style={styles.foodImage1}
            />
          </View>

          {/* Prato 2 - Direita Central */}
          <View style={[styles.blobContainer, styles.blob2]}>
            <Image
              // Imagem ilustrativa para Frango Frito
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/024/724/510/small/hot-and-crispy-fried-chicken-isolated-on-transparent-background-fresh-pieces-of-crispy-fried-chicken-fast-food-generative-ai-png.png' }}
              style={styles.foodImage2}
            />
          </View>

          {/* Prato 3 - Esquerda Inferior */}
          <View style={[styles.blobContainer, styles.blob3]}>
            <Image
              // Imagem ilustrativa para batata frita
              source={require('../../assets/images/batata-frita.png')}
              style={styles.foodImage3}
            />
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD19A', // Cor de fundo do design
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  logo: {
    width: 280,
    height: 120,
    marginBottom: 15,
  },
  title: {
    fontSize: 46,
    fontWeight: '900',
    color: '#000',
    marginBottom: 40,
    fontFamily: 'sans-serif', // Remetendo a fonte da imagem
    letterSpacing: -1,
  },
  imagesContainer: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  blobContainer: {
    position: 'absolute',
    backgroundColor: '#F8AE68', // Laranja dos boxes de fundo
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blob1: {
    top: 0,
    left: -20,
    width: width * 0.65,
    height: 220,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'flex-end', // empurra a imagem pra direita
    paddingRight: 10,
  },
  foodImage1: {
    width: 180,
    height: 180,


  },
  blob2: {
    top: 150,
    right: -20,
    width: width * 0.5,
    height: 180,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  foodImage2: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  blob3: {
    top: 280,
    left: 40,
    width: 180,
    height: 140,
    borderRadius: 30,
    alignItems: 'center',
  },
  foodImage3: {
    width: 160,
    height: 160,
    borderRadius: 20,
  },
});
