import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components'; // Assuming Button component is imported from another file

const AddCategoryScreen = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const categoryIcons = {
        plants: 'leaf',
        seeds: 'seedling',
        flowers: 'flower',
        sprayers: 'spray',
        pots: 'flower-pot',
        fertilizers: 'flask',
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddCategory = async () => {
        try {
            // Add your category addition logic here
            console.log('Adding category:', name, description, image);
        } catch (error) {
            console.error('Error adding category:', error.message);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                placeholder="Category Name"
                onChangeText={(text) => setName(text)}
                value={name}
                style={{ width: '80%', marginBottom: 10, padding: 10, borderWidth: 1 }}
            />
            <TextInput
                placeholder="Category Description"
                onChangeText={(text) => setDescription(text)}
                value={description}
                style={{ width: '80%', marginBottom: 10, padding: 10, borderWidth: 1 }}
                multiline
            />
            <TouchableOpacity onPress={pickImage} style={{ marginBottom: 10 }}>
                <Text style={{ color: 'blue', fontSize: 16 }}>Select an image</Text>
            </TouchableOpacity>
            {image !== '' && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: 10 }} />}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name={categoryIcons[name.toLowerCase()]} size={30} color="black" />
                <Button title="Add Category" onPress={handleAddCategory} />
            </View>
        </View>
    );
};

export default AddCategoryScreen;
