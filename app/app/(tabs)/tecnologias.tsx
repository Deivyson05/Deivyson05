import { AnimatedProgressBar } from '@/components/ui/organisms/progress';
import BottomSheet from '@/components/ui/templates/bottom-sheet';
import { BottomSheetMethods } from '@/components/ui/templates/bottom-sheet/types';
import { Image } from 'expo-image';
import { useRef } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TecnologiasScreen() {
  const sheetRef = useRef<BottomSheetMethods>(null);
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView className='p-4'>
          <View className='gap-2'>
            <Text className='text-3xl font-bold'>Tecnologias</Text>
            <View className='gap-2 bg-gray-200 p-4 shadow-md shadow-black border border-blue-600 rounded-3xl'>
              <Text className='text-black/80 font-semibold'>TypeScript</Text>
              <AnimatedProgressBar
                progressColor='black'
                progress={0.7}
                trackColor='#dedede'
                progressColor='#4dabf7'
              />
            </View>

            <View className='gap-2 bg-gray-200 p-4 shadow-md shadow-black border border-blue-600 rounded-3xl'>
              <Text className='text-black/80 font-semibold'>Csharp</Text>
              <AnimatedProgressBar
                progressColor='black'
                progress={0.7}
                trackColor='#dedede'
                progressColor='#4dabf7'
              />
            </View>

            <TouchableOpacity className='p-4 bg-blue-600 rounded-full items-center'
              onPress={() => sheetRef.current?.snapToIndex(0)}
            >
              <Text className='text-white font-semibold'>Nova Tecnologia</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>


      <BottomSheet
        ref={sheetRef}
        snapPoints={["50%", "90%"]}
        backgroundColor='#dedede'
        backdropOpacity={0.6}
        borderRadius={28}
      >
        <View className='p-4 gap-4'>
          <Text className='text-2xl font-bold'>Adicionar Tecnologia</Text>
          <TextInput
            placeholder='Nome da tecnologia'
            className='bg-white w-full rounded-full px-6 py-4'
          />
          <TextInput
            placeholder='nível de conhecimento (0 a 100)'
            className='bg-white w-full rounded-full px-6 py-4'
            keyboardType='numeric'
          />
          
          <TouchableOpacity className='bg-blue-600 w-full rounded-full px-6 py-4 items-center'>
            <Text className='text-white font-semibold'>Salvar</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>

  );
}
