import { useState } from "react";
import axios from "axios";
import { TextareaAutosize, Card, CardHeader, Grid, Container } from "@mui/material";
import { LoadingButton, Masonry } from "@mui/lab";
import cardback from '../images/ptcg-cardback.png'
import CardTypeColumn from "./CardTypeColumn";

function MainDeck() {

  const [decklistData, setDecklistData] = useState([])
  const [deckStats, setDeckStats] = useState({'deck_total_price':'0', 'pokemon_count': 0, 'trainer_count': 0, 'energy_count': 0})
  const [importedDecklist, setImportedDecklist] = useState('')
  const [cardImage, setCardImage] = useState(cardback)

  const [loading, setLoading] = useState(false)

  const handleHover = (imageUrl) => {
    setCardImage(imageUrl)
  }

  const handleChangeDecklist = (event) => {
    setImportedDecklist(event.target.value)
  } 

  const handleSubmitDecklist = () => {
    setLoading(true)
    axios({
      url: 'http://127.0.0.1:5000/',
      method: 'get',
      params: {
        importedDecklist: importedDecklist
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

      <TextareaAutosize
        spellCheck={false}
        aria-label="minimum height"
        maxRows={10}
        cols='35'
        placeholder="Import decklist"
        onChange={handleChangeDecklist}
      />
      <LoadingButton onClick={handleSubmitDecklist} loading={loading} loadingIndicator="Loading…" variant="outlined">Submit</LoadingButton>


    <Container 
      style={{backgroundColor: '#EBEBEB'}}
    >
      <Grid container>
        <Grid item md={8}>
          <Masonry columns={2} spacing={4}>
            <CardTypeColumn cards={pokemonCards} count={deckStats.pokemon_count} handleHover={handleHover}/>
            <CardTypeColumn cards={trainerCards} count={deckStats.trainer_count} handleHover={handleHover}/>
            <CardTypeColumn cards={energyCards} count={deckStats.energy_count} handleHover={handleHover}/>
          </Masonry>
        </Grid>

        <Grid item md={4}>
          <img src={cardImage} style={{height: 'auto', width: '100%'}}/>

          <Card>
            <CardHeader
              title={`Total: $${deckStats.deck_total_price}`}
              // style={{color: '#00899F'}}
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