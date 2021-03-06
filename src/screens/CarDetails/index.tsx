import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, ParamListBase, NavigationProp, useRoute } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { getAccessory } from '../../utils/getAccessoryIcon';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const { navigate, goBack }:NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigate('Scheduling', {
      car
    });
  }

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />

        <Header>
            <BackButton onPress={() => handleGoBack()} />
        </Header>

        <CarImages>
          <ImageSlider
            imagesUrl={car.photos}
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>{car.brand}</Brand>
              <Name>{car.name}</Name>
            </Description>

            <Rent>
              <Period>{car.rent.period}</Period>
              <Price>R$ {car.rent.price}</Price>
            </Rent>
          </Details>

          <Accessories>
            {
              car.accessories.map(accessory => (
                <Accessory
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessory(accessory.type)}
                />
              ))
            }
          </Accessories>

          <About>
            {car.about}
          </About>
        </Content>

        <Footer>
          <Button
            title='Confirmar'
            onPress={handleConfirmRental}
          />
        </Footer>
    </Container>
  );
}
