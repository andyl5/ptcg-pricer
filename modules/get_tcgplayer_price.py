def get_tcgplayer_price(tcgplayer_data, card_count):
    if tcgplayer_data.get('prices') is not None:
        market_prices = []
        for price_type in tcgplayer_data['prices']:
            market_prices.append(tcgplayer_data['prices'][price_type]['market'])
        lowest_market_price = min(market_prices)
        card_total_price = lowest_market_price * card_count
        return card_total_price
    return 0