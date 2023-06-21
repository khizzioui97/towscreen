import React from 'react';
import { View, Text ,Button} from 'react-native';

function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome Home!</Text>
      <Button title='click me'></Button>
    </View>
  );
}

export default HomePage;