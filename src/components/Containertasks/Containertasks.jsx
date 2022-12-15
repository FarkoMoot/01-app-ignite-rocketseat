import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

import { styles } from './styles'
import { colors } from '../../theme/colors';

export default function Containertasks() {
  return(
    <View style={styles.container} >
      <Feather name="clipboard" size={56} color={colors.gray300} />
      <Text style={styles.text1} >Voce ainda nao tem tarefas cadastradas</Text>
      <Text style={styles.text2} >Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}