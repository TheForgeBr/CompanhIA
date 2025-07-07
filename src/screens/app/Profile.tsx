import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Card, Button } from 'react-native-paper';

export default function ProfileScreen() {
  // Futuramente: pegar dados do usuário do zustand/jotai
  const user = {
    name: 'Usuário Exemplo',
    email: 'exemplo@email.com',
    avatar_url: '',
    bio: 'Bio do usuário...',
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content style={{ alignItems: 'center' }}>
          <Avatar.Text size={80} label={user.name[0]} />
          <Text variant="titleLarge" style={{ marginTop: 8 }}>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text style={{ marginTop: 8 }}>{user.bio}</Text>
          <Button mode="outlined" style={{ marginTop: 16 }}>
            Editar Perfil
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
});