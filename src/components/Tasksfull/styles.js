import { StyleSheet } from "react-native"
import { colors } from "../../theme/colors"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    width: 327,
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: colors.gray500,
    borderRadius: 8,
    marginTop: 12,
  },
  viewchecktext:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginLeft: 16,
    color: colors.blue,
  },
  textview: {
    paddingTop: 12,
    paddinbBotton: 12,
    marginLeft: 0,
    flex: 1,
    maxWidth: 220,
    minHeight: 65,
  },
  text: {
    color: colors.gray100
  },
  textCocluido: {
    color: colors.gray300
  },
  icon: {
    marginRight: 12,
    color: colors.gray300
  }
})