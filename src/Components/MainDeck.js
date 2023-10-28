import { useState } from "react";
import axios from "axios";
import { Card, CardHeader, Grid, Container } from "@mui/material";
import { Masonry } from "@mui/lab";
import cardback from '../images/ptcg-cardback.png'
import CardTypeColumn from "./CardTypeColumn";
import DecklistInput from "./DecklistInput";

function MainDeck() {

  const [decklistData, setDecklistData] = useState([])
  const [deckStats, setDeckStats] = useState({'deck_total_price':'0', 'pokemon_count': 0, 'trainer_count': 0, 'energy_count': 0})
  const [cardImage, setCardImage] = useState(cardback)
  
  const [inputDecklist, setInputDecklist] = useState('')
  const [loading, setLoading] = useState(false)

  const handleHover = (imageUrl) => {
    setCardImage(imageUrl)
  }

  const handleChangeDecklist = (event) => {
    setInputDecklist(event.target.value)
  } 

  const handleSubmitDecklist = () => {
    setLoading(true)
    axios({
      url: 'http://127.0.0.1:5000/',
      method: 'get',
      params: {
        inputDecklist: inputDecklist
      },
      responseType: 'json'
    })
    .then((response) => {
      console.log(response)
      setDeckStats(response.data.pop())
      setDecklistData(response.data)

      setLoading(false)      
    })
    .catch((error => console.log(error)))
  }

  const pokemonCards = decklistData.filter(card => card.card_supertype === 'Pokémon');
  const trainerCards = decklistData.filter(card => card.card_supertype === 'Trainer');
  const energyCards = decklistData.filter(card => card.card_supertype === 'Energy');

  return (
    <div>
      <DecklistInput 
        handleChangeDecklist={handleChangeDecklist} 
        handleSubmitDecklist={handleSubmitDecklist}
        loading={loading}  
      />
      <Container disableGutters style={{backgroundColor: '#EBEBEB'}}>
        <Grid container>
          <Grid item md={9}>
            <Masonry columns={2} spacing={3}>
              <CardTypeColumn supertype='Pokémon' cards={pokemonCards} count={deckStats.pokemon_count} handleHover={handleHover}/>
              <CardTypeColumn supertype='Trainer' cards={trainerCards} count={deckStats.trainer_count} handleHover={handleHover}/>
              <CardTypeColumn supertype='Energy' cards={energyCards} count={deckStats.energy_count} handleHover={handleHover}/>
            </Masonry>
          </Grid>

          <Grid item md={3}>
            <img src={cardImage} style={{height: 'auto', width: '100%'}}/>
            <Card>
              <CardHeader
                title={`Total: $${deckStats.deck_total_price}`}
                style={{backgroundColor: '#A1162E', color: 'white', textAlign: 'center'}} 
              ></CardHeader>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainDeck;