import { Tabs } from 'expo-router';
import FloatingTabBar from '@/components/navigation/bottomTab';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: 'Sobre' }} />
      <Tabs.Screen name="tecnologias" options={{ title: 'Tecnologias' }} />
      <Tabs.Screen name="projetos" options={{ title: 'Projetos' }} />
    </Tabs>
  );
}