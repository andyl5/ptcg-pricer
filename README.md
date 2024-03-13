# Pokemon TCG Pricer
In the Pokemon Trading Card Game community, it is common to share text-based decklists with one another. This tool allows players to import text-based decklists and see the market prices for the cards in their decks.

## Demo
https://github.com/andyl5/ptcg-decklist-pricing/assets/81489476/411bac87-decd-4adf-a63e-fbb6f0bc83b1

## How It's Made:

**Tech used:** React, MaterialUI, Flask, PokemonTCG API

## How It Works
1. Import a PTCG text-based decklist from either the Pokemon Trading Card Game Live, or another deck sharing website such as LimitlessTCG.
    * Cards must be in the following format: `cardCount cardName cardSet cardNumber`. Example: `4 Comfey LOR 79`, separated by a line break.
2. The backend will parse the decklist and call the PokemonTCG API to retrieve information about each card. The API responses are parsed and formatted as a JSON object and sent to the frontend.
3. Each card and its corresponding information are displayed.

## Running the project locally
1. Make sure you have Node.js installed. You can download it here at [https://nodejs.org](https://nodejs.org).
2. Clone the project to your local machine. `git clone https://github.com/andyl5/ptcg-pricer`
3. Install the Python backend dependencies. `pip install -r requirements.txt`
4. Install the frontend dependencies. `npm install`
5. Run the frontend application in one terminal `npm start`, run the backend application in another terminal `flask --app flask_app run`.

## Optimizations
Originally, each card in the deck would trigger a separate API request. For example, if there are 30 unique cards in the deck, there would be 30 requests to the API. To optimize the performance of the API calls, I consolidated the individual API calls into a singular batch request. This resulted in 5x faster API response time and significantly reduced overhead.

## Lessons Learned:
I learned about lifting state up in React and applied this concept to dynamically change the "active" card image displayed whenever the user hovers over a different card in the deck.
