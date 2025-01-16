/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentUrl, setCurrentUrl] = useState('https://zmmn46ucz7u7lw64qh3oemirjq0xchoi.lambda-url.us-east-1.on.aws');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    flex: 1,
  };

  const footerStyle = {
    backgroundColor: isDarkMode ? '#222' : '#eee',
    borderTopWidth: 1,
    borderTopColor: isDarkMode ? '#444' : '#ddd',
  };

  const handleNavigation = (url: string) => {
    setCurrentUrl(url);
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebView
        source={{uri: currentUrl}}
        style={[backgroundStyle, {flex: 1}]}
      />
      <View style={[styles.footer, footerStyle]}>
        <TouchableOpacity 
          style={[styles.button, currentUrl.includes('gallery') && styles.buttonActive]}
          onPress={() => handleNavigation('https://zmmn46ucz7u7lw64qh3oemirjq0xchoi.lambda-url.us-east-1.on.aws/dashboard/generate/gallery')}
        >
          <Text style={[styles.text, isDarkMode && styles.textDark]}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, currentUrl.includes('generate') && !currentUrl.includes('gallery') && styles.buttonActive]}
          onPress={() => handleNavigation('https://zmmn46ucz7u7lw64qh3oemirjq0xchoi.lambda-url.us-east-1.on.aws/dashboard/generate')}
        >
          <Text style={[styles.text, isDarkMode && styles.textDark]}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, currentUrl.includes('cards') && styles.buttonActive]}
          onPress={() => handleNavigation('https://zmmn46ucz7u7lw64qh3oemirjq0xchoi.lambda-url.us-east-1.on.aws/dashboard/cards?view=grid')}
        >
          <Text style={[styles.text, isDarkMode && styles.textDark]}>Cards</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonActive: {
    backgroundColor: '#8884',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  textDark: {
    color: '#fff',
  },
});

export default App;
