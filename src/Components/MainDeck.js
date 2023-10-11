import CardDetail from "./CardDetail";
import { useState } from "react";
import axios from "axios";
import { ListItem, TextareaAutosize, Card, CardHeader, Grid, Item } from "@mui/material";
import { LoadingButton, Masonry } from "@mui/lab";



function MainDeck() {

  // replace data with the response from the backend API
  // const decklistData = [{"card_count":"3","card_id":"swsh11-130","card_image_large":"https://images.pokemontcg.io/swsh11/130_hires.png","card_name":"Giratina V","card_number":"130","card_supertype":"Pok\u00e9mon","card_symbol":"https://images.pokemontcg.io/swsh11/symbol.png","lowest_market_price":1.79,"ptcgoCode":"LOR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh11-130"},{"card_count":"4","card_id":"swsh11-79","card_image_large":"https://images.pokemontcg.io/swsh11/79_hires.png","card_name":"Comfey","card_number":"79","card_supertype":"Pok\u00e9mon","card_symbol":"https://images.pokemontcg.io/swsh11/symbol.png","lowest_market_price":0.58,"ptcgoCode":"LOR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh11-79"},{"card_count":"3","card_id":"swsh11-131","card_image_large":"https://images.pokemontcg.io/swsh11/131_hires.png","card_name":"Giratina VSTAR","card_number":"131","card_supertype":"Pok\u00e9mon","card_symbol":"https://images.pokemontcg.io/swsh11/symbol.png","lowest_market_price":9.27,"ptcgoCode":"LOR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh11-131"},{"card_count":"2","card_id":"swsh11-70","card_image_large":"https://images.pokemontcg.io/swsh11/70_hires.png","card_name":"Sableye","card_number":"70","card_supertype":"Pok\u00e9mon","card_symbol":"https://images.pokemontcg.io/swsh11/symbol.png","lowest_market_price":3.31,"ptcgoCode":"LOR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh11-70"},{"card_count":"1","card_id":"swsh9-41","card_image_large":"https://images.pokemontcg.io/swsh9/41_hires.png","card_name":"Manaphy","card_number":"41","card_supertype":"Pok\u00e9mon","card_symbol":"https://images.pokemontcg.io/swsh9/symbol.png","lowest_market_price":0.69,"ptcgoCode":"BRS","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh9-41"},{"card_count":"1","card_id":"swsh10-46","card_image_large":"https://images.pokemontcg.io/swsh10/46_hires.png","card_name":"Radiant Greninja","card_number":"46","card_supertype":"Pok\u00e9mon","card_symbol":"https://images.pokemontcg.io/swsh10/symbol.png","lowest_market_price":3.04,"ptcgoCode":"ASR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh10-46"},{"card_count":"2","card_id":"swsh11-50","card_image_large":"https://images.pokemontcg.io/swsh11/50_hires.png","card_name":"Cramorant","card_number":"50","card_supertype":"Pok\u00e9mon","card_symbol":"https://images.pokemontcg.io/swsh11/symbol.png","lowest_market_price":0.26,"ptcgoCode":"LOR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh11-50"},{"card_count":"2","card_id":"sm2-123","card_image_large":"https://images.pokemontcg.io/sm2/123_hires.png","card_name":"Energy Recycler","card_number":"123","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/sm2/symbol.png","lowest_market_price":0.5,"ptcgoCode":"GRI","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sm2-123"},{"card_count":"2","card_id":"sv1-194","card_image_large":"https://images.pokemontcg.io/sv1/194_hires.png","card_name":"Switch","card_number":"194","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/sv1/symbol.png","lowest_market_price":0.13,"ptcgoCode":"SVI","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sv1-194"},{"card_count":"4","card_id":"swsh10-154","card_image_large":"https://images.pokemontcg.io/swsh10/154_hires.png","card_name":"Switch Cart","card_number":"154","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/swsh10/symbol.png","lowest_market_price":1.29,"ptcgoCode":"ASR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh10-154"},{"card_count":"2","card_id":"swsh5-125","card_image_large":"https://images.pokemontcg.io/swsh5/125_hires.png","card_name":"Escape Rope","card_number":"125","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/swsh5/symbol.png","lowest_market_price":0.38,"ptcgoCode":"BST","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh5-125"},{"card_count":"1","card_id":"swsh10-146","card_image_large":"https://images.pokemontcg.io/swsh10/146_hires.png","card_name":"Hisuian Heavy Ball","card_number":"146","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/swsh10/symbol.png","lowest_market_price":0.16,"ptcgoCode":"ASR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh10-146"},{"card_count":"4","card_id":"swsh8-225","card_image_large":"https://images.pokemontcg.io/swsh8/225_hires.png","card_name":"Battle VIP Pass","card_number":"225","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/swsh8/symbol.png","lowest_market_price":2.29,"ptcgoCode":"FST","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh8-225"},{"card_count":"2","card_id":"swsh10-150","card_image_large":"https://images.pokemontcg.io/swsh10/150_hires.png","card_name":"Roxanne","card_number":"150","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/swsh10/symbol.png","lowest_market_price":0.1,"ptcgoCode":"ASR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh10-150"},{"card_count":"4","card_id":"swsh11-163","card_image_large":"https://images.pokemontcg.io/swsh11/163_hires.png","card_name":"Mirage Gate","card_number":"163","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/swsh11/symbol.png","lowest_market_price":0.15,"ptcgoCode":"LOR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh11-163"},{"card_count":"3","card_id":"sv1-181","card_image_large":"https://images.pokemontcg.io/sv1/181_hires.png","card_name":"Nest Ball","card_number":"181","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/sv1/symbol.png","lowest_market_price":0.62,"ptcgoCode":"SVI","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sv1-181"},{"card_count":"4","card_id":"swsh11-155","card_image_large":"https://images.pokemontcg.io/swsh11/155_hires.png","card_name":"Colress's Experiment","card_number":"155","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/swsh11/symbol.png","lowest_market_price":0.3,"ptcgoCode":"LOR","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/swsh11-155"},{"card_count":"3","card_id":"sv2-172","card_image_large":"https://images.pokemontcg.io/sv2/172_hires.png","card_name":"Boss\u2019s Orders (Ghetsis)","card_number":"172","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/sv2/symbol.png","lowest_market_price":0.37,"ptcgoCode":"PAL","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sv2-172"},{"card_count":"2","card_id":"sv1-167","card_image_large":"https://images.pokemontcg.io/sv1/167_hires.png","card_name":"Beach Court","card_number":"167","card_supertype":"Trainer","card_symbol":"https://images.pokemontcg.io/sv1/symbol.png","lowest_market_price":0.12,"ptcgoCode":"SVI","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sv1-167"},{"card_count":"3","card_id":"sve-3","card_image_large":"https://images.pokemontcg.io/sve/3_hires.png","card_name":"Basic Water Energy","card_number":"3","card_supertype":"Energy","card_symbol":"https://images.pokemontcg.io/sve/symbol.png","lowest_market_price":0,"ptcgoCode":"SVE","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sve-3"},{"card_count":"4","card_id":"sve-1","card_image_large":"https://images.pokemontcg.io/sve/1_hires.png","card_name":"Basic Grass Energy","card_number":"1","card_supertype":"Energy","card_symbol":"https://images.pokemontcg.io/sve/symbol.png","lowest_market_price":0,"ptcgoCode":"SVE","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sve-1"},{"card_count":"4","card_id":"sve-5","card_image_large":"https://images.pokemontcg.io/sve/5_hires.png","card_name":"Basic Psychic Energy","card_number":"5","card_supertype":"Energy","card_symbol":"https://images.pokemontcg.io/sve/symbol.png","lowest_market_price":0,"ptcgoCode":"SVE","tcgplayer_url":"https://prices.pokemontcg.io/tcgplayer/sve-5"}]

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

      <Grid container>
        <Grid item md={8}>
          {/* <Masonry columns={2} style={{backgroundColor: 'blue'}}> */}
          <Masonry columns={2}>
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
                    price={parseFloat((card.lowest_market_price) * (card.card_count)).toFixed(2)} 
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
                    price={parseFloat((card.lowest_market_price) * (card.card_count)).toFixed(2)} 
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
                    price={parseFloat((card.lowest_market_price) * (card.card_count)).toFixed(2)} 
                    imageUrl={card.card_image_large}
                    tcgplayerUrl={card.tcgplayer_url}
                    handleHover={handleHover}
                  />
                </ListItem>
              ))}
            </Card>
          </Masonry>
        </Grid>

        <Grid item md={4}>
          {/* <Masonry columns={1} style={{backgroundColor: 'yellow'}}> */}
            <img src={cardImage} style={{height: 'auto', width: '100%'}}/>
          {/* </Masonry> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default MainDeck;