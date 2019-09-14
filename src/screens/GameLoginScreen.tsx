import React from 'react';
import styled from 'styled-components/native';

export const GameLoginScreen = () => {
  return (
    <Screen>
      <Wrapper>
        <Title>
          <Strong>Escape</Strong>
          {'\n'}Game.
        </Title>
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
`;

const Strong = styled.Text`
  font-weight: bold;
`;
