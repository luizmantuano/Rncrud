import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserList from './screens/UserList';
import UserForm from './screens/UserForm';
import { Button, Icon } from '@rneui/base';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>
        <Stack.Screen
          name='UserList'
          component={UserList}
          options={({ navigation }) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('UserForm')}
                  type='clear'
                  icon={<Icon name='add' size={25} color='#fff' />}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name='UserForm'
          component={UserForm}
          options={{ title: 'Formulário de Usuários' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
