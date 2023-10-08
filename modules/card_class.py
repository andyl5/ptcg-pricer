class Card:
    def __init__(self, ptcgoCode, card_number, card_count):
        self.card_id = ""
        self.card_name = ""
        self.card_number = card_number
        self.card_supertype = ""
        self.card_count = card_count
        self.ptcgoCode = ptcgoCode
        self.lowest_market_price = 0
        self.card_image_large = ""
        self.tcgplayer_url = ""
        self.card_symbol = ""

    def set_card_id(self, card_id):
        self.card_id = card_id

    def set_card_name(self, card_name):
        self.card_name = card_name

    def set_card_supertype(self, card_supertype):
        self.card_supertype = card_supertype

    def set_image_large(self, card_image_large):
        self.card_image_large = card_image_large

    def set_lowest_market_price(self, lowest_market_price):
        self.lowest_market_price = lowest_market_price

    def set_tcgplayer_url(self, tcgplayer_url):
        self.tcgplayer_url = tcgplayer_url

    def set_card_symbol(self, card_symbol):
        self.card_symbol = card_symbol

    def return_ptcgoCode(self):
        return self.ptcgoCode
    
    def return_card_number(self):
        return self.card_number
    
    # def return_card_count(self):
    #     return self.card_count
    
    # def return_card_id(self):
    #     return self.card_id

    # def return_card_name(self):
    #     return self.card_name
    
    # def return_card_supertype(self):
    #     return self.card_supertype
    
    # def return_card_image_large(self):
    #     return self.card_image_large
    
    # def return_lowest_market_price(self):
    #     return self.lowest_market_price
    
    # def return_tcgplayer_url(self):
    #     return self.tcgplayer_url