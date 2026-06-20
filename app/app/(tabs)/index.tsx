import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Avatar } from '@/components/ui/base/avatar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GrainyGradient } from '@/components/ui/organisms/grainy-gradient';
import { Apple, CodeXml, MailIcon, Phone } from 'lucide-react-native';
import { FadeText } from '@/components/ui/organisms/fade-text';
import BottomSheet from '@/components/ui/templates/bottom-sheet';
import { useRef } from 'react';
import { BottomSheetMethods } from '@/components/ui/templates/bottom-sheet/types';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const sheetRef = useRef<BottomSheetMethods>(null);

  return (
    <GestureHandlerRootView className='gap-2'>
      <View className='items-center justify-center overflow-hidden h-40  relative'>
        <GrainyGradient />
        <View className='flex-row items-center gap-4 w-full absolute top-12 left-4'>
          <Avatar
            image={{
              uri: "https://avatars.githubusercontent.com/u/131066052?v=4",
              name: "Deivyson"
            }}
            size={80}
          />
          <View className='gap-2 flex-1'>
            <Text className='text-2xl font-semibold text-white/90 text-wrap'>Deivyson Ricardo Silva dos Santos</Text>
            <Text className='text-md text-white/70'>Deivyson05</Text>
          </View>

        </View>
      </View>
      <View className='items-start'>
        <FadeText
          inputs={["As coisa cai", "e sai voando", "igual anne que me abandonou"]}
          duration={3500}
          wordDelay={300}
          blurTint='extraLight'
          color='black'
          textAlign='left'
          style={{
            textAlign: 'left',
            fontSize: 25,
            alignItems: 'flex-start'
          }}
        />
      </View>
      <View className='p-4 gap-4'>
        <View className='flex-row items-center px-4 py-4 bg-gray-200 w-full justify-between shadow-md shadow-black rounded-xl border border-blue-600'>
          <MailIcon />
          <Text>deivysonrssantos@outlook.com</Text>
        </View>

        <View className='flex-row items-center px-4 py-4 bg-gray-200 w-full justify-between shadow-md shadow-black rounded-xl border border-blue-600'>
          <CodeXml />
          <Text>Deivyson05</Text>
        </View>

        <View className='flex-row items-center px-4 py-4 bg-gray-200 w-full justify-between shadow-md shadow-black rounded-xl border border-blue-600'>
          <Apple />
          <Text>Deivyson05</Text>
        </View>

        <View className='flex-row items-center px-4 py-4 bg-gray-200 w-full justify-between shadow-md shadow-black rounded-xl border border-blue-600'>
          <Phone />
          <Text>(81) 9 8646-0562</Text>
        </View>

        <TouchableOpacity className='flex-row items-center px-4 py-4 bg-blue-600 w-full justify-center shadow-md shadow-black rounded-xl'
          onPress={() => sheetRef.current?.snapToIndex(0)}
        >
          <Text className='text-white font-semibold'>Editar dados</Text>
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={["50%", "90%"]}
        backgroundColor='#dedede'
        backdropOpacity={0.6}
        borderRadius={28}
      >
        <View className='p-4 gap-4'>
          <TextInput
            placeholder='Nome completo'
            className='bg-white w-full rounded-full px-6 py-4'
          />
          <TextInput
            placeholder='email'
            className='bg-white w-full rounded-full px-6 py-4'
          />
          <TextInput
            placeholder='Perfil do Github'
            className='bg-white w-full rounded-full px-6 py-4'
          />
          <TextInput
            placeholder='Perfil do Linkedin'
            className='bg-white w-full rounded-full px-6 py-4'
          />
          <TextInput
            placeholder='Telefone'
            className='bg-white w-full rounded-full px-6 py-4'
          />
          <TextInput
            placeholder='Citação'
            className='bg-white w-full rounded-full px-6 py-4'
          />
          <TouchableOpacity className='bg-blue-600 w-full rounded-full px-6 py-4 items-center'>
            <Text className='text-white font-semibold'>Salvar</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}