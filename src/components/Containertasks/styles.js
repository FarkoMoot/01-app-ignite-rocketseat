import { StyleSheet } from "react-native"
import { colors } from "../../theme/colors"

export const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    color: colors.gray300,
    fontWeight: 'bold',
    fontSize: 14
  },
  text2: {
    color: colors.gray300,
    fontWeight: 'normal',
    fontSize: 14
  }
})