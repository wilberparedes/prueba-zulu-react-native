import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { primary500, white } from '../../../styles/palette';

interface HeaderStyles {
	container: ViewStyle;
	title: TextStyle;
}
export const Styles = StyleSheet.create<HeaderStyles>({
	container: {
		elevation: 1,
		backgroundColor: primary500,
	},
	title: {
		fontSize: 18,
		fontWeight: '500',
		color: white,
	},
});
