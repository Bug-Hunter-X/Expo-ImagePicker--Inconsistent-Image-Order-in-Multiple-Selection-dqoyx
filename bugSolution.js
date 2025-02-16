This solution uses a temporary array to track the order of selected image URIs.  Once the ImagePicker returns assets, we match assets by URI, maintaining the original user-defined order. 

```javascript
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';

const App = () => {
  const [selectedImageUris, setSelectedImageUris] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      const urisInOrder = [];
      result.assets.forEach(asset => urisInOrder.push(asset.uri)); // Store URIs

      // Reorder assets to match the original selection order
      const orderedAssets = urisInOrder.map(uri => 
          result.assets.find(asset => asset.uri === uri)
      );
      setSelectedImageUris(orderedAssets);
    }
  };

  return (
    <View>
      <Button title="Pick Images" onPress={pickImage} />
      {selectedImageUris.map((asset) => (
          <Image key={asset.uri} source={{uri: asset.uri}} style={{width:200, height: 200}} />
      ))}
    </View>
  );
};

```