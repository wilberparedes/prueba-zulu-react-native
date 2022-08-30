import React from 'react';
import { View } from 'react-native';
import { white } from '../../styles/palette';
import { ListTickers } from './components/ListTickers';
import { Styles } from './Home.styles';

export const Home = () => {
	return (
		<View style={Styles.container}>
			<ListTickers />
		</View>
	);
};
