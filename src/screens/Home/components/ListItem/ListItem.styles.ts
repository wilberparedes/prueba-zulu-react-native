import { StyleSheet, ViewStyle } from 'react-native';
import { white } from '../../../../styles/palette';

interface ListItemStyles {
	subitem: ViewStyle;
	accordion: ViewStyle;
}
export const Styles = StyleSheet.create<ListItemStyles>({
	subitem: {
		paddingVertical: 0,
		marginVertical: 0,
		paddingBottom: 0,
		marginLeft: 16,
	},
	accordion: { backgroundColor: white },
});
