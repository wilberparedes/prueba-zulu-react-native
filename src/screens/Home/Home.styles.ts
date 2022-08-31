import { StyleSheet, ViewStyle } from 'react-native';
import { white, border } from '../../styles/palette';

interface ListItemStyles {
	container: ViewStyle;
	textInput: ViewStyle;
}
export const Styles = StyleSheet.create<ListItemStyles>({
	container: { flex: 1, backgroundColor: white },
	textInput: {
		borderWidth: 0.8,
		borderColor: border,
		margin: 16,
		paddingHorizontal: 16,
	},
});
