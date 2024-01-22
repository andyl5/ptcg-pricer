from modules.get_ptcg_set_id import get_ptcg_set_id
from modules.api_request import make_api_request
from modules.get_tcgplayer_price import get_tcgplayer_price

def main(text_decklist):
    deck_dict = {f'{get_ptcg_set_id(card.split()[-2])}{card.split()[-1]}': {'id': f'{get_ptcg_set_id(card.split()[-2])}{card.split()[-1]}', 'card_num': f'{card.split()[-1]}', 'count': card.split()[0]} for id, card in enumerate(text_decklist.splitlines()) if card!='' and card[0].isdigit()}

    query_params_list = [f'id:{id}' for id in deck_dict]
    query_params_string = " OR ".join(query_params_list)
    print(query_params_string)

    api_response = make_api_request(query_params_string)
    print(api_response)

    deck_dict['deck_stats'] = {
        'deck_total_price': 0,
        'pokemon_count': 0,
        'trainer_count': 0,
        'energy_count': 0,
    }

    for r_card in api_response:
        card_id = r_card['id']
        card_count = deck_dict[card_id]['count']
        
        # Update card information
        deck_dict[card_id]['name'] = r_card['name']
        deck_dict[card_id]['supertype'] = r_card['supertype']
        deck_dict[card_id]['card_image'] = r_card['images']['large']
        deck_dict[card_id]['total_card_price'] = '{:.2f}'.format(get_tcgplayer_price(r_card['tcgplayer'], int(card_count)))
        deck_dict[card_id]['set_symbol'] = r_card['set']['images']['symbol']
        deck_dict[card_id]['tcgplayer_url'] = r_card['tcgplayer']['url']

        # Update counts and total prices in deck_stats
        deck_dict['deck_stats']['deck_total_price'] += float(deck_dict[card_id]['total_card_price'])
        
        if deck_dict[card_id]['supertype'] == 'Pokémon':
            deck_dict['deck_stats']['pokemon_count'] += int(card_count)
        elif deck_dict[card_id]['supertype'] == 'Trainer':
            deck_dict['deck_stats']['trainer_count'] += int(card_count)
        elif deck_dict[card_id]['supertype'] == 'Energy':
            deck_dict['deck_stats']['energy_count'] += int(card_count)

    deck_list_response = [card for card in deck_dict.values()]
    print(deck_list_response)

    return deck_list_response