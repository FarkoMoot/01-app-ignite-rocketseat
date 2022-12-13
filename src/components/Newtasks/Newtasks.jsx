import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles'
import { colors } from '../../theme/colors';

export default function Newtasks() {
  return(
    <View style={styles.container} >
      <TextInput
        style={styles.input}
        placeholder='Digite um evento aque'
        selectionColor={colors.purpledark}
        
        placeholderTextColor={colors.gray300}
        underlineColorAndroid={'transparent'}
      >

      </TextInput>
       
      <TouchableOpacity style={styles.button} >
        <Ionicons name="add-circle-outline" size={28} color="white" />
      </TouchableOpacity>
      
    </View>
  )  
}