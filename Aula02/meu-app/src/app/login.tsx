import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cores } from '@/constants/cores';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import {
  ArrowLeftIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
  LockIcon,
} from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Link, LinkText } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

// tela 1: login feita com componentes do gluestack
export default function Login() {
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrar, setLembrar] = useState(true);
  const [tentouEntrar, setTentouEntrar] = useState(false);

  const agenciaInvalida = agencia.length !== 4;
  const contaInvalida = conta.length < 5;
  const senhaInvalida = senha.length !== 6;

  function entrar() {
    setTentouEntrar(true);
    if (agenciaInvalida || contaInvalida || senhaInvalida) return;
    router.push('/extrato');
  }

  function esqueciSenha() {
    const msg = 'Enviamos as instruções para o seu e-mail.';
    if (Platform.OS === 'web') window.alert(msg);
    else Alert.alert('Esqueci minha senha', msg);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: cores.laranja }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <VStack className="gap-2 px-6 pt-4 pb-10">
          <Pressable onPress={() => router.back()} className="mb-4 h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <Icon as={ArrowLeftIcon} className="h-5 w-5 text-white" />
          </Pressable>
          <Box className="h-14 w-14 items-center justify-center rounded-2xl bg-white">
            <Icon as={LockIcon} className="h-7 w-7 text-[#FF6600]" />
          </Box>
          <Heading size="2xl" className="mt-4 text-white">
            Acessar conta
          </Heading>
          <Text className="text-base text-white/80">
            Digite os dados da sua conta para entrar no app.
          </Text>
        </VStack>

        <Card className="flex-1 gap-5 rounded-b-none rounded-t-3xl border-0 px-6 pt-8">
          <HStack className="gap-4">
            <FormControl isInvalid={tentouEntrar && agenciaInvalida} className="flex-1">
              <FormControlLabel>
                <FormControlLabelText>Agência</FormControlLabelText>
              </FormControlLabel>
              <Input className="h-12">
                <InputField
                  placeholder="0000"
                  keyboardType="number-pad"
                  maxLength={4}
                  value={agencia}
                  onChangeText={setAgencia}
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>4 dígitos</FormControlErrorText>
              </FormControlError>
            </FormControl>

            <FormControl isInvalid={tentouEntrar && contaInvalida} className="flex-[2]">
              <FormControlLabel>
                <FormControlLabelText>Conta</FormControlLabelText>
              </FormControlLabel>
              <Input className="h-12">
                <InputField
                  placeholder="00000-0"
                  keyboardType="number-pad"
                  maxLength={7}
                  value={conta}
                  onChangeText={setConta}
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>Conta inválida</FormControlErrorText>
              </FormControlError>
            </FormControl>
          </HStack>

          <FormControl isInvalid={tentouEntrar && senhaInvalida}>
            <FormControlLabel>
              <FormControlLabelText>Senha eletrônica</FormControlLabelText>
            </FormControlLabel>
            <Input className="h-12">
              <InputField
                placeholder="6 dígitos"
                keyboardType="number-pad"
                maxLength={6}
                secureTextEntry={!mostrarSenha}
                value={senha}
                onChangeText={setSenha}
              />
              <InputSlot onPress={() => setMostrarSenha(!mostrarSenha)}>
                <InputIcon as={mostrarSenha ? EyeIcon : EyeOffIcon} className="h-5 w-5" />
              </InputSlot>
            </Input>
            <FormControlError>
              <FormControlErrorText>A senha precisa ter 6 dígitos</FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Checkbox value="lembrar" isChecked={lembrar} onChange={setLembrar}>
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Lembrar agência e conta</CheckboxLabel>
          </Checkbox>

          <Button className="h-12 rounded-xl bg-[#FF6600] data-[active=true]:bg-[#e65c00]" onPress={entrar}>
            <ButtonText className="text-base font-bold text-white">Entrar</ButtonText>
          </Button>

          <Link onPress={esqueciSenha} className="self-center">
            <LinkText className="text-[#FF6600]">Esqueci minha senha</LinkText>
          </Link>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
