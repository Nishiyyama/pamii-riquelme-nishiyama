import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function NaoEncontrado() {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Página não encontrada</Text>
      <Link href="/" style={styles.link}>Voltar para o início</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  link: { color: '#FF6600' },
});
