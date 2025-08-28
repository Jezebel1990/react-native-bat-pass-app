import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

interface BatButtonProps {
  passwordLength: number;
}

export function BatButton({ passwordLength }: BatButtonProps) {
    const [pass, setPass] = useState('')
    const [copied, setCopied] = useState(false);

  function handleGenerateButton() {
    const length = passwordLength && passwordLength > 0 ? passwordLength : 8;
    const generateToken = generatePass(length);
    setPass(generateToken);
    setCopied(false); 
  }

   async function handleCopyButton(){
    if (!pass) return; 
    await Clipboard.setStringAsync(pass);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
  <>
    <BatTextInput pass={pass} />
   <Pressable
     onPress={handleGenerateButton}
     style={styles.button}
    >
     <Text style={styles.text}>GENERATE</Text>
    </Pressable>

    <Pressable
     onPress={handleCopyButton}
     style={styles.button}
    >
     <Text  style={[
            styles.text,
            copied ? { color: '#fffd00' } : { color: '#66b3df' } 
          ]}>
          {copied ? 'Copied' : '⚡ COPY'}
        </Text>
    </Pressable>
  
    </>
  );
}