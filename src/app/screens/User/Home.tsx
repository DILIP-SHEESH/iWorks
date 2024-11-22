import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  const [groups, setGroups] = useState([
    {
      id: '1',
      name: 'MICROSOFT STUDENT CLUB',
      lastMessage: 'GEN AI WORKSHOP on 11 & 12th',
      logo: 'https://msclub-ci.tech/static/logo.png', // Example logo URL
    },
    {
      id: '2',
      name: 'TED X',
      lastMessage: 'WE ARE BACK',
      logo: 'https://wearetheo1.wpenginepowered.com/wp-content/uploads/2018/09/TEDx-logo-image.jpg', // Example logo URL
    },
    {
      id: '3',
      name: '5th SEM A SECTION (2022-2026)',
      lastMessage: 'SEPM ASSIGNMENT: One Team One App',
      logo: 'https://www.mbacollegesbangalore.in/wp-content/uploads/2017/08/Cambridge-Institute-of-Technology.png', // Example logo URL
    },
  ]);

  // State for modal and new group/event creation
  const [modalVisible, setModalVisible] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newEventMessage, setNewEventMessage] = useState('');

  // Navigate to group chat or student profile
  const navigateToChat = (groupId: string) => {
    router.push(`/Chat/GroupChat?groupId=${groupId}`);
  };

  const navigateToProfile = () => {
    router.push('screens/User/StudentProfile');
  };

  // Add a new group
  const addGroup = () => {
    if (newGroupName.trim()) {
      setGroups([
        ...groups,
        {
          id: (groups.length + 1).toString(),
          name: newGroupName,
          lastMessage: newEventMessage,
          logo: 'https://example.com/default-logo.png', // You can set a default logo here
        },
      ]);
      setNewGroupName('');
      setNewEventMessage('');
      setModalVisible(false);
    } else {
      alert('Please enter a valid group name.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WELCOME TO IWORKS</Text>
        <TouchableOpacity onPress={navigateToProfile}>
          <Image
            style={styles.profileIcon}
            source={{
              uri: 'https://i.pinimg.com/originals/a6/d9/f3/a6d9f378d01eb6432b906d9f4e3ea57e.jpg',
            }} // Replace with user profile picture
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.groupItem} onPress={() => navigateToChat(item.id)}>
            {/* Logo on the left side */}
            <Image
              style={styles.logo}
              source={{ uri: item.logo }} // Use logo from group data
            />
            {/* Group Content (text) on the right side */}
            <View style={styles.groupContent}>
              <Text style={styles.groupName}>{item.name}</Text>
              <Text style={styles.groupMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Button to open modal for creating a group or event */}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add Group/Event</Text>
      </TouchableOpacity>

      {/* Modal for creating new group or event */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Group/Event</Text>

            <TextInput
              style={styles.input}
              placeholder="Group Name"
              value={newGroupName}
              onChangeText={setNewGroupName}
            />

            <TextInput
              style={styles.input}
              placeholder="Event or Description (optional)"
              value={newEventMessage}
              onChangeText={setNewEventMessage}
            />

            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Create" onPress={addGroup} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  groupItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
    flexDirection: 'row', // Align logo and text horizontally
    alignItems: 'center', // Vertically align the logo and text
  },
  groupContent: {
    flex: 1,
    marginLeft: 10, // Adds space between logo and text
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  groupMessage: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20, // Makes the logo circular
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});
