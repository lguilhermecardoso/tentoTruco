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
  margin-top: 2px;
`;

export const ScoreAreaContent = styled.View`
  flex-direction: row;
  //padding: 16px;
  padding-left: 12px;
  margin-top: 2px;
`;

export const ScoreControlsContent = styled.View`
  flex-direction: row;
`;

export const CardScoreArea = styled.View`
  background-color: ${colors.black};
  width: 162px;
  height: 191px;
  border-radius: 8px;
  padding: 12px;
`;

export const CardScoreAreaControls = styled.View`
  background-color: ${colors.black};
  width: 109px;
  height: 120px;
  padding: 8px;
  margin-top: 16px;
`;

export const CardScoreAreaRight = styled.View`
  background-color: ${colors.black};
  width: 162px;
  height: 191px;
  border-radius: 8px;
  margin-left: 12px;
  padding: 12px;
`;

export const TextButtonArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TrucoAreaButton = styled.TouchableOpacity`
  align-items: center;
  height: 170px;
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const TextScore = styled.Text`
  font-size: 64px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  width: 92px;
  margin-top: 8px;
  background-color: ${colors.gray_500};
  color: ${colors.white};
  padding-top: 4px;
`;

export const GameControlArea = styled.View`
  flex-direction: column;
  margin-top: 12px;
`;

export interface ButtonProps {
  color?: string;
}

export const ButtonGameControl = styled.TouchableOpacity<ButtonProps>`
  height: 30px;
  margin-top: 8px;
  background-color: ${props => (props.color === 'secondary' ? colors.gray_100 : colors.gray_500)};
  padding-top: 4px;
`;

export const TrucoText = styled.Text`
  font-size: 36px;
  color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 36px;
  color: ${colors.gray_500};
`;