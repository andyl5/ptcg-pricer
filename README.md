# Pokemon TCG Decklist Pricing
In the Pokemon Trading Card Game community, it is common to share text-based decklists with each other. This tool allows players to import text-based decklists and see the market price for each card in the deck.

https://github.com/andyl5/ptcg-decklist-pricing/assets/81489476/19cfcbe2-902a-4444-a563-bd10f7337dec

## Built With
* [React](https://react.dev/)
* [Bootstrap](https://getbootstrap.com/)
* [Flask](https://flask.palletsprojects.com/en/3.0.x/)
* [PokemonTCG API](https://docs.pokemontcg.io/)

## Setup and Installation
1. Make sure you have Node.js installed. You can download it here at [https://nodejs.org](https://nodejs.org).
2. Clone the project to your local machine. `git clone https://github.com/andyl5/ptcg-decklist-pricing`
3. Install the Python backend dependencies. `pip install -r requirements.txt`
4. Install the frontend dependencies. `npm install`
5. Run the frontend application in one terminal `npm start`, run the backend application in another terminal `flask --app flask_app run`.

## Usage
1. Import a PTCG text-based decklist. (PTCG Live decklist formats are accepted)
    * Cards must be in the following format: `cardCount cardName cardSet cardNumber`. Example: `4 Comfey LOR 79`
      * Energy cards must also follow this format. For the cardSet, you can use `SVE`.
2. Click the render button. In a few seconds, your decklist will be shown alongside card market prices.

## Roadmap
- [X] Add styling to the components
- [X] Add total deck price
- [X] Optimize speed of backend
- [ ] Add usage instructions
