import { StyleSheet } from "react-native"
import { colors } from "./../theme/colors"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: colors.gray700,
	},
	header: {
		height: 170,
    alignItems: 'center',
    justifyContent: 'center',
	},
  headerLogo: {
    flexDirection: 'row',
  },
  headerLogoIcon: {
    fontSize: 42,
  },
  headerLogoText1: {
    fontFamily: 'sans-serif',
    color: colors.blue,
    fontSize: 42,
  },
  headerLogoText2: {
    color: colors.purpledark,
    fontSize: 42,
  },
  
  body: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
    alignItems: 'center',
  },
})