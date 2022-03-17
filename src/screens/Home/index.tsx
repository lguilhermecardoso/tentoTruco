import React from 'react';
import {
  Image, Text, View
} from 'react-native';
import colors from '../../utils/colors';
import {
  Button,
  Container,
  FormArea,
  HeaderContent,
  InputDefault,
  TextButton,
  TextButtonArea,
  Title,
  TrucoText 
} from './styles';

const Home = ({navigation}: {navigation: any}) => {

  const [team1, setTeam1] = React.useState('');
  const [team2, setTeam2] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  function validateForm() {
    if(!team1 || !team2) {
      setErrorMessage('Os nomes dos times são obrigatórios');
      return
    }

    navigation.navigate('Game', {players: {
      team1,
      team2
    }});
  }
  return (
    <Container>
      <HeaderContent>
        <Title>Tento Board</Title>
         <Image source={require('../../assets/images/fxemoji_blackclubsuit.png')} />
        <TrucoText>Truco!!!</TrucoText>
      </HeaderContent>
      <FormArea>
        <InputDefault 
          value={team1}
          onChangeText={setTeam1}
          placeholder='Nome da Equipe 1'
          placeholderTextColor={colors.white}
        />
        <InputDefault 
          value={team2}
          onChangeText={setTeam2}
          placeholder='Nome da Equipe 1'
          placeholderTextColor={colors.white}
        />
        <TextButtonArea>
          <TextButton>
            {errorMessage}
          </TextButton>
        </TextButtonArea>
        <Button
          onPress={validateForm}
        >
          <TextButtonArea>
            <TextButton>
              Iniciar jogo
            </TextButton>
          </TextButtonArea>
        </Button>
      </FormArea>
    </Container>
  );
};

export default Home;
