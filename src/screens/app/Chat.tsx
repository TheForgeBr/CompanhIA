import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';

export default function ChatScreen() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  // Futuramente: usar ConversationService + zustand/jotai
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'Você', text: input }]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 16 }}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item.sender}: {item.text}</Text>
            </Card.Content>
          </Card>
        )}
      />
      <View style={styles.inputRow}>
        <TextInput
          style={{ flex: 1 }}
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
        />
        <Button mode="contained" onPress={handleSend} style={{ marginLeft: 8 }}>
          Enviar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { marginBottom: 8 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
});