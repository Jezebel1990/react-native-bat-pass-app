import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#06070A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection: 'column',
    borderColor: '#949ba3',
    borderWidth:2,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom:60,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'#5E5E5E'
  },
  inputContainer:{
    width:'80%',
    flexDirection:'column',
    alignItems:'center',
  }
});

export default styles