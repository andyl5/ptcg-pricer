# Pokemon TCG Decklist Pricing
In the Pokemon Trading Card Game community, it is common to share text-based decklists with one another. This tool allows players to import text-based decklists and see the market prices for the cards in their decks.

## Demo
https://github.com/andyl5/ptcg-decklist-pricing/assets/81489476/411bac87-decd-4adf-a63e-fbb6f0bc83b1

## Built With
* [React](https://react.dev/)
* [MaterialUI](https://mui.com/material-ui/)
* [Flask](https://flask.palletsprojects.com/en/3.0.x/)
* [PokemonTCG API](https://docs.pokemontcg.io/)

## Setup and Installation
1. Make sure you have Node.js installed. You can download it here at [https://nodejs.org](https://nodejs.org).
2. Clone the project to your local machine. `git clone https://github.com/andyl5/ptcg-decklist-pricing`
3. Install the Python backend dependencies. `pip install -r requirements.txt`
4. Install the frontend dependencies. `npm install`
5. Run the frontend application in one terminal `npm start`, run the backend application in another terminal `flask --app flask_app run`.

## Usage
1. Import a PTCG text-based decklist from either Pokemon Trading Card Game Live, or another deck sharing website such as LimitlessTCG.
    * Cards must be in the following format: `cardCount cardName cardSet cardNumber`. Example: `4 Comfey LOR 79`
2. Click the button. In a small moment, your decklist will be shown alongside card market prices.

## Roadmap
- [X] Add styling to the components
- [X] Add total deck price
- [X] Speed up data retrieval
- [ ] Add usage instructions
