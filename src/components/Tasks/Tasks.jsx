import { Text, View } from 'react-native'
import Containertasks from '../Containertasks/Containertasks'
import Tasksfull from './../Tasksfull/Tasksfull'

import { styles } from './styles'

export default function Tasks() {

  var testa = false;
  const arrayTasks = [0,1]

  return(
    <View style={styles.container} >
      <View style={ styles.contentheader} >
        <View style={ styles.textmoreicon } >
          <Text style={ styles.textmoreiconTEXTleft}>Criadas</Text>
          <View style={styles.containerICON} >
            <Text style={ styles.textmoreiconICON}>1</Text>
          </View>
        </View>
        <View style={ styles.textmoreicon } >
          <Text style={ styles.textmoreiconTEXTrigth}>Concluidas</Text>
          <View style={styles.containerICON}>
            <Text style={ styles.textmoreiconICON}>2</Text>
          </View>
        </View>
      </View>
      <View>
        {//testa ? <Containertasks /> : <View><Tasksfull /> <Tasksfull /><View/>
          arrayTasks.map(() => {
            if(arrayTasks.length === 0 ) {
              return <Containertasks />
            } else {
              return <Tasksfull />
            }
          })
        }
      </View>
    </View>
  )
}