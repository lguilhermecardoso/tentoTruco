import React from 'react';
import {
  Alert,
  Image,
  BackHandler
} from 'react-native';
import { TextButton } from '../Home/styles';
import { Button, ButtonGameControl, CardScoreArea, CardScoreAreaControls, CardScoreAreaRight, Container, GameControlArea, HeaderContent, ScoreAreaContent, ScoreControlsContent, TextButtonArea, TextScore, Title, TrucoAreaButton } from './styles';

const Game = (
  {route} : {route: any},
  {navigation}: {navigation: any}
) => {
  const [round, setRound] = React.useState(1);
  const [teamScore1, setTeam1Score] = React.useState(0);
  const [teamScore2, setTeam2Score] = React.useState(0);
  const [pointSum, setPointSum] = React.useState(1);
  const [trucoText, setTrucoTest] = React.useState('Trucar!');

  const {players} = route.params;

  const showAlert = () =>
  Alert.alert(
    "Sair do App?",
    "Deseja realmente fechar o app?",
    [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Fechar APP!",
        onPress: () => {BackHandler.exitApp()},
        style: "default",
      },

    ]
  );

  function changePointMultiplicator() {
    if (pointSum <= 12) {
      switch(pointSum) {
        case 1 :
          setPointSum(3);
          setTrucoTest('Pedir 6');
          break;
        case 3 :
          setPointSum(6);
          setTrucoTest('Pedir 9');
          break;
        case 6 :
          setPointSum(9);
          setTrucoTest('Pedir 12');
          break;
        case 9 :
          setPointSum(12);
          setTrucoTest('Valendo 12');
          break;
        default :
          break;
        break;
      }
    }
  }

  return (
    <Container>
      <HeaderContent>
        <Title>Rodada {round}</Title>
      </HeaderContent>
      <ScoreAreaContent>
        <CardScoreArea>
          <TextButton>{players.team1}</TextButton>
          <TextScore>{teamScore1}</TextScore>
          <TextButton>Seus pontos atuais</TextButton>
          <TextButton>Vitórias (1)</TextButton>
        </CardScoreArea>
        <CardScoreAreaRight>
          <TextButton>{players.team2}</TextButton>
          <TextScore>{teamScore2}</TextScore>
          <TextButton>Pontos do adversário</TextButton>
          <TextButton>Vitórias (1)</TextButton>
        </CardScoreAreaRight>
      </ScoreAreaContent>
      <ScoreControlsContent>
        <CardScoreAreaControls>
          <TextButton>Nós</TextButton>
          <Button
            onPress={() => {
              if (teamScore1 + pointSum >= 12) {
                setTeam1Score(12);
                return;
              } 
              if(teamScore1 < 12) setTeam1Score(teamScore1 + pointSum);
              setPointSum(1);
              setTrucoTest('Trucar!!');
            }}
          >
            <TextButtonArea>
              <TextButton>
                + {pointSum} {pointSum === 1 ? 'Ponto' : 'Pontos'}
              </TextButton>
            </TextButtonArea>
          </Button>
          <Button
            onPress={() => {
              if(teamScore1 > 0) setTeam1Score(teamScore1 -1);
            }}
          >
            <TextButtonArea>
              <TextButton>
                - 1 Ponto
              </TextButton>
            </TextButtonArea>
          </Button>
        </CardScoreAreaControls>
        <TrucoAreaButton
          onPress={changePointMultiplicator}
        >
          <Image style={{
            paddingHorizontal: 1
          }} source={require('../../assets/images/fxemoji_blackclubsuit.png')} />
          <TextButton>{trucoText}</TextButton>
        </TrucoAreaButton>
        <CardScoreAreaControls>
          <TextButton>Eles</TextButton>
          <Button
            onPress={() => {
              if (teamScore2 + pointSum >= 12) {
                setTeam2Score(12);
                return;
              } 
              if(teamScore2 < 12) setTeam2Score(teamScore2 + pointSum);
              setPointSum(1);
              setTrucoTest('Trucar!!');
            }}
          >
            <TextButtonArea>
              <TextButton>
                + {pointSum} {pointSum === 1 ? 'Ponto' : 'Pontos'}
              </TextButton>
            </TextButtonArea>
          </Button>
          <Button
            onPress={() => {
              if(teamScore2 > 0) setTeam2Score(teamScore2 -1);
            }}
          >
            <TextButtonArea>
              <TextButton>
                - 1 Ponto
              </TextButton>
            </TextButtonArea>
          </Button>
        </CardScoreAreaControls>
      </ScoreControlsContent>
      <GameControlArea>
        <ButtonGameControl
          onPress={() => {
            setTeam1Score(0);
            setTeam2Score(0);
            setPointSum(1);
            setTrucoTest('Trucar!!');
          }}
        >
          <TextButtonArea>
            <TextButton>
              Reiniciar dados do jogo
            </TextButton>
          </TextButtonArea>
        </ButtonGameControl>
        <ButtonGameControl
          color='secondary'
          onPress={showAlert}
        >
          <TextButtonArea>
            <TextButton>
              Sair do Jogo
            </TextButton>
          </TextButtonArea>
        </ButtonGameControl>
      </GameControlArea>
    </Container>
  );
};

export default Game;
