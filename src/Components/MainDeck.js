import CardDetail from "./CardDetail";
import { useState } from "react";
import axios from "axios";
import { ListItem, TextareaAutosize, Card, CardHeader, Grid, Container } from "@mui/material";
import { LoadingButton, Masonry } from "@mui/lab";



function MainDeck() {

  // replace data with the response from the backend API

  const [decklistData, setDecklistData] = useState([])
  const [importedDecklist, setImportedDecklist] = useState('')
  const [cardImage, setCardImage] = useState(decklistData['card_image_large'])
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
      setDecklistData(response.data)
      console.log(response.data)
      setLoading(false)
    })
    .catch((error => console.log(error)))
  }

  const pokemonCards = decklistData.filter(card => card.card_supertype === 'Pokémon');
  const trainerCards = decklistData.filter(card => card.card_supertype === 'Trainer');
  const energyCards = decklistData.filter(card => card.card_supertype === 'Energy');

  return (
    <div>

      {/* <textarea rows='10' cols='40' placeholder='Enter decklist' spellCheck='false' onChange={handleChangeDecklist}></textarea> */}
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
        <Grid item md={9}>
          {/* <Masonry columns={2} style={{backgroundColor: 'blue'}}> */}
          <Masonry columns={2} spacing={4}>
            <Card>
              <CardHeader 
                title={`Pokémon(${pokemonCards.length})`} 
              ></CardHeader>
              {pokemonCards.map(card => (
                <ListItem divider>
                  <CardDetail 
                    count={card.card_count} 
                    name={card.card_name}
                    symbol={card.card_symbol}
                    price={card.card_total_price} 
                    imageUrl={card.card_image_large}
                    tcgplayerUrl={card.tcgplayer_url}
                    handleHover={handleHover}
                    />
                </ListItem>
              ))}
            </Card>

            <Card>
              <CardHeader title={`Trainer (${trainerCards.length})`}></CardHeader>
              {trainerCards.map(card => (
                <ListItem divider>
                  <CardDetail 
                    count={card.card_count} 
                    name={card.card_name}
                    symbol={card.card_symbol}
                    price={card.card_total_price} 
                    imageUrl={card.card_image_large}
                    tcgplayerUrl={card.tcgplayer_url}
                    handleHover={handleHover}
                  />
                </ListItem>
              ))}
            </Card>

            <Card>
              <CardHeader title={`Energy (${energyCards.length})`}></CardHeader>
              {energyCards.map(card => (
                <ListItem divider>
                  <CardDetail 
                    count={card.card_count} 
                    name={card.card_name}
                    symbol={card.card_symbol}
                    price={card.card_total_price} 
                    imageUrl={card.card_image_large}
                    tcgplayerUrl={card.tcgplayer_url}
                    handleHover={handleHover}
                  />
                </ListItem>
              ))}
            </Card>
          </Masonry>
        </Grid>

        <Grid item md={3}>
          {/* <Masonry columns={1} style={{backgroundColor: 'yellow'}}> */}
            <img src={cardImage} style={{height: 'auto', width: '100%'}}/>
          {/* </Masonry> */}
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default MainDeck;