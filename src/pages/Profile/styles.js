import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: {padding: 25},
})`
  align-self: stretch;
`;

export const InputText = styled(Input)`
  margin-bottom: 12px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 20px 0 30px;
`;

export const ButtonLogout = styled(Button)`
  margin-top: 10px;
  background: #d44050;
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 5px;
  background: #e55560;
`;
