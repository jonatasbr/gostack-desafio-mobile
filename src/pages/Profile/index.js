import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  InputText,
  Separator,
  ButtonSubmit,
  ButtonLogout,
} from './styles';

import Header from '~/components/Header';
import Background from '~/components/Background';

export default function Profile() {
  function handleSubmit() {}

  function handleLogout() {}

  return (
    <Background>
      <Header />
      <Container>
        <Form>
          <InputText
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />
          <InputText
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <Separator />

          <InputText
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha atual"
          />

          <InputText
            icon="lock-outline"
            secureTextEntry
            placeholder="Nova senha"
          />

          <InputText
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
          />

          <ButtonSubmit onPress={handleSubmit}>Salvar perfil</ButtonSubmit>
          <ButtonLogout onPress={handleLogout}>Sair do Meetapp</ButtonLogout>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
