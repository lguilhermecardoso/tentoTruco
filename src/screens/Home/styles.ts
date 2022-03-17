import styled from "styled-components/native";
import colors from '../../../src/utils/colors';
import fonts from '../../../src/utils/fonts';
import theme from "../../utils/theme";

export const Container = styled.SafeAreaView`
  font-family: ${theme.font.medium};
  background-color: ${colors.green_200};
  flex: 1;
`;

export const HeaderContent = styled.View`
  font-family: ${theme.font.extraBold};
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const InputDefault = styled.TextInput`
  height: 40px;
  margin: 12px;
  background-color: ${colors.gray_100};
  color: ${colors.white};
  padding: 10px;
`;

export const TextButtonArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  margin: 12px;
  margin-top: 32px;
  background-color: ${colors.gray_500};
  color: ${colors.white};
  padding: 10px;
`;

export const FormArea = styled.View`
`;

export const TrucoText = styled.Text`
  font-size: 36px;
  color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 36px;
  color: ${colors.gray_500};
`;