import { Container, Grid } from '@mui/material'

function CardDetail(props) {

  const handleMouseEnter = () => {
    props.handleHover(props.imageUrl)
  }

  return (
    <Container disableGutters onMouseEnter={handleMouseEnter}>
      <Grid container>
        <Grid item md={10}>
          {props.count} {props.name} <img src={props.symbol} style={{height: '1.5em'}}/>
        </Grid>
        <Grid item md={2} style={{textAlign: 'end'}}>
          <a href={props.tcgplayerUrl} target='_blank' style={{textDecoration: 'none', color: '#00899F'}}>
            ${props.price}
          </a>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CardDetail