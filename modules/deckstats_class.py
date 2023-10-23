class DeckStats:
    def __init__(self):
        self.deck_total_price = 0
        self.pokemon_count = 0
        self.trainer_count = 0
        self.energy_count = 0
    
    def update_deck_total_price(self, card_total_price):
        self.deck_total_price += card_total_price
    
    def update_pokemon_count(self, card_count):
        self.pokemon_count += card_count

    def update_trainer_count(self, card_count):
        self.trainer_count += card_count

    def update_energy_count(self, card_count):
        self.energy_count += card_count

    def format_deck_total_price(self):
        self.deck_total_price = '{:.2f}'.format(self.deck_total_price)