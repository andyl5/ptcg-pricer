def get_tcgplayer_price(data, card_count):
    if data['tcgplayer'].get('prices') is not None:
        market_prices = []
        for price_type in data['tcgplayer']['prices']:
            market_prices.append(data['tcgplayer']['prices'][price_type]['market'])
        lowest_market_price = min(market_prices)
        card_total_price = lowest_market_price * card_count
        return card_total_price
    return 0