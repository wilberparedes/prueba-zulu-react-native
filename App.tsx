import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { Header } from './src/components/common/Header';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar barStyle={'light-content'} />
			<Header title={'CRYPTO'} />
			<Home />
		</SafeAreaView>
	);
};

export default App;
