import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardMenu from '../components/CardMenu';
import { cores } from '../constants/cores';

export default function Home() {
  const [escondida, setEscondida] = useState(false);

 // leva para a tela de login feita com gluestack
 function entrar() {
  router.push('/login');
}

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>

        
        <View style={styles.topo}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={28} color={cores.laranja} />
          </View>
          <View>
            <Text style={styles.ola}>Olá, Nishiyama</Text>
            <Text style={styles.conta}>
              {escondida ? 'agência ••• conta •••••' : 'agência ••63 conta •••13-'}
            </Text>
          </View>
        </View>

        
        <View style={styles.cadeado}>
          <Ionicons name="lock-closed" size={26} color={cores.branco} />
          <Text style={styles.textoCadeado}>acessar conta</Text>
        </View>

        
        <TouchableOpacity style={styles.botaoEntrar} onPress={entrar}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.botaoEsconder} onPress={() => setEscondida(!escondida)}>
          <Text style={styles.textoEsconder}>
            {escondida ? 'Mostrar conta' : 'Esconder conta'}
          </Text>
        </TouchableOpacity>

        
        <View style={styles.aviso}>
          <Text style={styles.textoAviso}>Seu app está de cara nova!</Text>
        </View>

       
        <View style={styles.linha}>
          <CardMenu icone="swap-horizontal" texto="Pix e transferir" />
          <CardMenu icone="barcode-outline" texto="Pagar" />
          <CardMenu icone="list-outline" texto="Extrato" />
          <CardMenu icone="card-outline" texto="Cartões" />
        </View>

        <View style={styles.linha}>
          <CardMenu pequeno icone="apps-outline" texto="Central Pix" />
          <CardMenu pequeno icone="key-outline" texto="iToken" />
          <CardMenu pequeno icone="help-circle-outline" texto="Ajuda" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.laranja,
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: cores.branco,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  ola: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: 'bold',
  },
  conta: {
    color: '#ffe0c2',
  },
  cadeado: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 16,
    height: 180,
    padding: 16,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textoCadeado: {
    color: cores.branco,
    fontWeight: 'bold',
  },
  botaoEntrar: {
    backgroundColor: cores.branco,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoEntrar: {
    color: cores.laranja,
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoEsconder: {
    borderWidth: 1,
    borderColor: cores.branco,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  textoEsconder: {
    color: cores.branco,
  },
  aviso: {
    backgroundColor: cores.azul,
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
  },
  textoAviso: {
    color: cores.branco,
    fontWeight: 'bold',
  },
  linha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
