import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: -27,
    width: 330,
    height: 54,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
	input: {
    backgroundColor: colors.gray500,
    width: 271,
    height: 54,
    paddingLeft: 16,
    color: colors.white,
    borderRadius: 8,

	},
	button: {
    marginLeft: 4,
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: colors.bluedark,
    alignItems: 'center',
    justifyContent: 'center',
    
	}
});