import React, {useState} from 'react';
import {
  Button as PaperButton,
  TextInput as PaperTextInput,
} from 'react-native-paper';
import styled from 'styled-components/native';

export const GameLoginScreen = () => {
  const [code, setCode] = useState('');

  return (
    <Screen>
      <Wrapper>
        <Title>
          <Strong>Escape</Strong>
          {'\n'}Game.
        </Title>

        <TextInput
          label="Enter your game code"
          value={code}
          onChangeText={setCode}
          mode="outlined"
        />

        <Button
          uppercase={false}
          mode="contained"
          onPress={() => console.log('Pressed')}
          dark>
          Start
        </Button>
      </Wrapper>
    </Screen>
  );
};

const Screen = styled.SafeAreaView`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 50;
  padding-right: 50;
`;

const Title = styled.Text`
  font-size: 64;
  margin-bottom: 50;
`;

const Strong = styled.Text`
  font-weight: bold;
`;

const TextInput = styled(PaperTextInput)``;

const Button = styled(PaperButton)`
  margin-top: 20;
`;
