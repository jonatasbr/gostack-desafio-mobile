import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 20px;
  background: #fff;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export const Image = styled.Image`
  border-radius: 4px;
  width: 100%;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Info = styled.View`
  margin-top: 10px;
`;

export const DateView = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Location = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Owner = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ButtonSubscription = styled(Button)`
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #999;
  padding-left: 10px;
`;
