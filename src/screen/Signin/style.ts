import { StyleSheet  } from 'react-native'
import { theme } from '../../global/themes'

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    width: 200,
    height:45,
    borderBottomWidth: 2
  },
  content:{
    marginTop: -40,
    paddingHorizontal: 50
  },
  image:{
    width:'100%',
    height:360,
    marginTop: 45

  },
  title:{
    color:theme.colors.heading,
    textAlign:'center',
    fontSize: 40,
    marginBottom: 10,
    fontFamily: theme.fonts.title700,
    lineHeight:40
  },
  subtitle:{
    color:theme.colors.heading,
    fontSize:18,
    marginBottom:20,
    textAlign: 'center',
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  },
})