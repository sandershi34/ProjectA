import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.heading}>Membership Wallet</Text> 
      </View>
      <View>
        <Image style ={styles.scanImg}source={require("./assets/QRCode.png")}></Image>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    marginTop: "15%",
  },
  scanImg:{
    marginTop: "15%",
    width: 200,
  },

});
