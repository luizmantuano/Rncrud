import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View style={styles.form}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder='Informe o Nome'
        value={user.name}
      />
      <Text>Eamil</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder='Informe o E-mail'
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder='Informe o URL do Avatar'
        value={user.avatarUrl}
      />

      <Button
        title='Salvar'
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
