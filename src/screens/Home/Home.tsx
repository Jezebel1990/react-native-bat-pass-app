import React, { useState} from "react";
import { View} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";
import { BatPasswordLength } from "../../components/BatPasswordLength/BatPasswordLength";

export default function Home() {
 const [length, setLength] = useState(8);

return(
<View style={styles.appContainer}>
  <View style={styles.logoContainer}>
  <BatLogo/>
  </View>

 <BatPasswordLength length={length} setLength={setLength} />

<View style={styles.inputContainer}>
  <BatButton passwordLength={length}/>
</View>

    <StatusBar style="light" />
    </View>    
    )
}

