import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { ListTickers } from './components/ListTickers';
import { Styles } from './Home.styles';
import { useListTickers } from './hooks';

export const Home = () => {
	const { tickers, isLoading, nextPage, filter } = useListTickers();
	const [text, setText] = useState('');

	return (
		<View style={Styles.container}>
			<TextInput
				placeholder={`Search Crypto`}
				value={text}
				onChangeText={(text) => setText(text)}
				style={Styles.textInput}
			/>
			<ListTickers
				tickers={text ? filter(text) : tickers}
				isLoading={isLoading}
				nextPage={nextPage}
			/>
		</View>
	);
};
