import { View,Text,CheckBox } from 'react-native'
import { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from "../../theme/colors"


export default function Tasksfull() {
  const [mudaText, setMudatext] = useState(false)

  function funcmudaText() {
    if( mudaText === false ) {
      setMudatext(true)
    } else {
      setMudatext(false)

    }
  }

  return(
    <View style={ styles.container} >
      <View style={styles.viewchecktext} >
        <BouncyCheckbox
          style={styles.checkbox}
          unfillColor={colors.gray500}
          fillColor={colors.blue}
          onPress={() => funcmudaText()}
          on
        />
        <View style={styles.textview} >
          { mudaText ? 
            <Text style={styles.textCocluido} >
              {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`}
            </Text> :
            <Text style={styles.text} >
              {`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`}
            </Text> 
          }
        </View>
      </View>
      <FontAwesome style={styles.icon} name="trash-o" size={24} color="white" />
    </View>
  )
}