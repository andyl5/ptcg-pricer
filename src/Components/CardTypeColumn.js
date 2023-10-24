import CardDetail from "./CardDetail";
import { Card, CardHeader, ListItem } from "@mui/material"

function CardTypeColumn(props) {
  return (
    <div>
      <Card>
        <CardHeader 
          title={`Pokémon (${props.count})`}
          style={{backgroundColor: '#A1162E', color: 'white'}} 
        ></CardHeader>
        {props.cards.map(card => (
          <ListItem divider>
            <CardDetail 
              count={card.card_count} 
              name={card.card_name}
              symbol={card.card_symbol}
              price={card.card_total_price} 
              imageUrl={card.card_image_large}
              tcgplayerUrl={card.tcgplayer_url}
              handleHover={props.handleHover}
              />
          </ListItem>
        ))}
      </Card>
    </div>
  )
}

export default CardTypeColumn