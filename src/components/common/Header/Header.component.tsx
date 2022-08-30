import React from 'react';
import { Appbar } from 'react-native-paper';
import { Props } from './Header.props';
import { Styles } from './header.styles';

export const Header = ({ title }: Props) => {
	return (
		<Appbar.Header style={Styles.container}>
			<Appbar.Content title={title} titleStyle={Styles.title} />
		</Appbar.Header>
	);
};
