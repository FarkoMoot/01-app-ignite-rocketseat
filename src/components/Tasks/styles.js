import { StyleSheet } from "react-native"
import { colors } from "../../theme/colors"

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    width: 327,
    
  },
  contentheader: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray400,
    height: 45,
  },
  textmoreicon: {
    flexDirection: "row",
    justifyContent: "center",

  },
  textmoreiconTEXTleft:{
    color: colors.blue,
    fontSize: 14,
  },
  textmoreiconTEXTrigth:{
    color: colors.purpledark,
    fontSize: 14,

  },
  textmoreiconICON: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.gray200
  },
  containerICON: {
    marginLeft: 2,

    backgroundColor: colors.gray400,
    borderRadius: 10,
    width: 18,
    height: 22    
  }


})