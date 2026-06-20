import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { UserRoundIcon, CodeXmlIcon, SquareKanbanIcon } from "lucide-react-native";



export default function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { bottom: insets.bottom + 16 }]}>
      {state.routes.map((route, index) => {
        console.log("route.name", route.name);
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tab}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            {route.name === 'index' && <UserRoundIcon size={24} color={isFocused ? '#6200ee' : '#999'} />}
            {route.name === 'tecnologias' && <CodeXmlIcon size={24} color={isFocused ? '#6200ee' : '#999'} />}
            {route.name === 'projetos' && <SquareKanbanIcon size={24} color={isFocused ? '#6200ee' : '#999'} />}
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {options.title ?? route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontSize: 11,
    color: '#999',
  },
  labelFocused: {
    color: '#6200ee',
    fontWeight: '600',
  },
});