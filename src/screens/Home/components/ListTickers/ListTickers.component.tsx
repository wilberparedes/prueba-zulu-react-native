import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Props, PropsListItem } from './ListTickers.props';
import { ListItem } from '../ListItem';

export const ListTickers = ({ tickers, isLoading, nextPage }: Props) => {
	const renderItem = ({ item }: PropsListItem) => {
		return <ListItem item={item} />;
	};

	const renderFooter = () =>
		isLoading ? <ActivityIndicator size='large' /> : <View />;

	return (
		<FlatList
			data={tickers}
			renderItem={renderItem}
			keyExtractor={(item, key) => `${key}`}
			style={{
				flex: 1,
			}}
			onEndReached={nextPage}
			onEndReachedThreshold={0.1}
			ListFooterComponent={renderFooter}
		/>
	);
};
