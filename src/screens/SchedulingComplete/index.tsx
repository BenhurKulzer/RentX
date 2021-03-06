import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';

import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const { navigate }:NavigationProp<ParamListBase> = useNavigation();

  function handleConfirm() {
    navigate('Home');
  }

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='Ok' onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
