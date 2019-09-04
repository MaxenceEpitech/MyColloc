import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
         <View>
              <Text>SafeAreaView - Implementation</Text>
         </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});
