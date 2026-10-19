import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { cores } from '../constants/cores';

type Props = {
  icone: any;
  texto: string;
  pequeno?: boolean;
};

// botão do menu (pode ser grande ou pequeno)
export default function CardMenu({ icone, texto, pequeno }: Props) {
  return (
    <TouchableOpacity style={[styles.card, pequeno ? styles.pequeno : styles.grande]}>
      <Ionicons name={icone} size={24} color={cores.branco} />
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  grande: {
    width: '48%',
    height: 120,
  },
  pequeno: {
    width: '31%',
    height: 90,
  },
  texto: {
    color: cores.branco,
    fontWeight: 'bold',
  },
});
