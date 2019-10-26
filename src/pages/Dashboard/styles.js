import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ViewDate = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const ButtonDatePrev = styled(TouchableOpacity)``;
export const ButtonDateNext = styled(TouchableOpacity)``;

export const Day = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  align-self: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;
