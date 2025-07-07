import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Button, ActivityIndicator } from 'react-native-paper';
import { getFriendSuggestions } from '../../services/FriendService';

export default function FriendsSuggestionScreen() {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Troque pelo id do usuário autenticado (zustand/jotai futuramente)
  const userId = 'COLOQUE_AQUI_UM_ID_DE_USUARIO_VALIDO';

  const fetchSuggestions = async () => {
    setLoading(true);
    try {
      const data = await getFriendSuggestions(userId);
      setSuggestions(data);
    } catch {
      setSuggestions([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{ marginBottom: 16 }}>Sugestões de Amigos</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={suggestions}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Title title={item.assistantName} />
              <Card.Content>
                <Text>Usuário: {item.suggestedUserId}</Text>
                <Text>Score: {item.score}</Text>
              </Card.Content>
            </Card>
          )}
        />
      )}
      <Button mode="outlined" onPress={fetchSuggestions} style={{ marginTop: 16 }}>
        Recarregar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { marginBottom: 12 },
});