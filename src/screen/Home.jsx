import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Newtasks from "../components/Newtasks/Newtasks";
import Tasks from "../components/Tasks/Tasks"

import { styles } from './styles'
import { colors } from "../theme/colors";

export default function Home() {
  return(
    <View style={styles.container} >
      <View style={styles.header} >
        <View style={styles.headerLogo}>
          <MaterialCommunityIcons name="rocket-outline" size={48} color={colors.purpledark} />
          <Text style={styles.headerLogoText1} >to</Text>
          <Text style={styles.headerLogoText2} >do</Text>
        </View>
      </View>
      <View style={styles.body} >
        <Newtasks />
        <Tasks />

      </View>
    </View>
  )
}