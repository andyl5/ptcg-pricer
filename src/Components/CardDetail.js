function CardDetail(props) {

  const handleMouseEnter = () => {
    props.handleHover(props.imageUrl)
  }

  return (
    <div className="container"
      onMouseEnter={handleMouseEnter}
    >
      <a href={props.tcgplayerUrl} target="_blank" style={{textDecoration: 'none', color: 'black'}}>
        <div className="row" style={{backgroundColor: 'blue'}}>
          <div className="col-1">
            <p>{props.count}</p>
          </div>
          <div className="col-9" style={{backgroundColor: 'green'}}>
            <p>{props.name} <img src={props.symbol} style={{height: '1.25em'}}/></p>
          </div>
          <div className="col-2" style={{backgroundColor: 'red'}}>
            <p>${props.price}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardDetail