import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View>
   <Pressable
     onPress={()=>{console.log("fui pressionado")}}
     style={styles.button}
    >
     <Text style={styles.text}>GENERATE</Text>
    </Pressable>

    <Pressable
     onPress={()=>{console.log("fui pressionado")}}
     style={styles.button}
    >
     <Text style={styles.text}>⚡ COPY</Text>
    </Pressable>
  
    </View>
  );
}