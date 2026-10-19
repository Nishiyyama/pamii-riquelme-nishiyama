import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar, AvatarBadge, AvatarFallbackText } from '@/components/ui/avatar';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BellIcon,
  CalendarDaysIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
  RepeatIcon,
} from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { cores } from '@/constants/cores';

type Movimentacao = {
  id: number;
  descricao: string;
  data: string;
  valor: number;
};

const movimentacoes: Movimentacao[] = [
  { id: 1, descricao: 'Pix recebido - Maria Souza', data: 'Hoje', valor: 250 },
  { id: 2, descricao: 'Mercado Bom Preço', data: 'Hoje', valor: -87.4 },
  { id: 3, descricao: 'Conta de luz', data: 'Ontem', valor: -132.9 },
  { id: 4, descricao: 'Salário', data: '05/10', valor: 3200 },
  { id: 5, descricao: 'Pix enviado - João Lima', data: '03/10', valor: -60 },
];

const atalhos = [
  { icone: RepeatIcon, texto: 'Pix' },
  { icone: ArrowRightIcon, texto: 'Transferir' },
  { icone: CalendarDaysIcon, texto: 'Agendar' },
];

function formatar(valor: number) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// tela 2: saldo e extrato feita com componentes do gluestack
export default function Extrato() {
  const [mostrarSaldo, setMostrarSaldo] = useState(true);
  const saldo = 4823.15;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: cores.laranja }} edges={['top']}>
      <ScrollView className="bg-secondary" contentContainerStyle={{ paddingBottom: 32 }}>
        <VStack className="gap-6 bg-[#FF6600] px-6 pt-4 pb-16">
          <HStack className="items-center justify-between">
            <HStack className="items-center gap-3">
              <Avatar className="bg-white">
                <AvatarFallbackText className="text-base font-bold text-[#FF6600]">Riquelme Nishiyama</AvatarFallbackText>
                <AvatarBadge />
              </Avatar>
              <VStack>
                <Heading size="lg" className="text-white">Olá, Nishiyama</Heading>
                <Text className="text-sm text-white/80">ag 0063 · cc 12345-6</Text>
              </VStack>
            </HStack>
            <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Icon as={BellIcon} className="h-5 w-5 text-white" />
            </Pressable>
          </HStack>
        </VStack>

        <VStack className="-mt-12 gap-5 px-5">
          <Card className="gap-2 rounded-2xl border-0 p-5 shadow-md">
            <HStack className="items-center justify-between">
              <Text className="text-muted-foreground">Saldo disponível</Text>
              <Pressable onPress={() => setMostrarSaldo(!mostrarSaldo)}>
                <Icon as={mostrarSaldo ? EyeIcon : EyeOffIcon} className="h-5 w-5 text-muted-foreground" />
              </Pressable>
            </HStack>
            <Heading size="3xl">{mostrarSaldo ? formatar(saldo) : 'R$ ••••••'}</Heading>
            <Badge variant="outline" className="self-start border-[#FF6600]">
              <BadgeText className="text-[#FF6600]">Rende 100% do CDI</BadgeText>
            </Badge>
          </Card>

          <HStack className="justify-between gap-3">
            {atalhos.map((atalho) => (
              <Pressable
                key={atalho.texto}
                className="flex-1 items-center gap-2 rounded-2xl bg-card p-4 data-[active=true]:opacity-70"
              >
                <Box className="h-11 w-11 items-center justify-center rounded-full bg-[#FFF0E5]">
                  <Icon as={atalho.icone} className="h-5 w-5 text-[#FF6600]" />
                </Box>
                <Text className="text-sm font-semibold">{atalho.texto}</Text>
              </Pressable>
            ))}
          </HStack>

          <Card className="gap-0 rounded-2xl border-0 p-5">
            <HStack className="mb-3 items-center justify-between">
              <Heading size="md">Últimas movimentações</Heading>
              <Badge variant="secondary">
                <BadgeText>Outubro</BadgeText>
              </Badge>
            </HStack>

            {movimentacoes.map((mov, i) => {
              const entrada = mov.valor > 0;
              return (
                <VStack key={mov.id}>
                  {i > 0 && <Divider />}
                  <HStack className="items-center gap-3 py-3">
                    <Box
                      className={`h-10 w-10 items-center justify-center rounded-full ${
                        entrada ? 'bg-[#E3F6EA]' : 'bg-[#FDE8E8]'
                      }`}
                    >
                      <Icon
                        as={entrada ? ArrowDownIcon : ArrowUpIcon}
                        className={`h-4 w-4 ${entrada ? 'text-[#15803D]' : 'text-[#B91C1C]'}`}
                      />
                    </Box>
                    <VStack className="flex-1">
                      <Text className="font-medium" isTruncated>{mov.descricao}</Text>
                      <Text className="text-xs text-muted-foreground">{mov.data}</Text>
                    </VStack>
                    <Text className={`font-bold ${entrada ? 'text-[#15803D]' : 'text-foreground'}`}>
                      {mostrarSaldo ? formatar(mov.valor) : '••••'}
                    </Text>
                  </HStack>
                </VStack>
              );
            })}
          </Card>

          <Button variant="outline" className="h-12 rounded-xl" onPress={() => router.dismissAll()}>
            <ButtonIcon as={ArrowLeftIcon} />
            <ButtonText className="text-base">Sair da conta</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
