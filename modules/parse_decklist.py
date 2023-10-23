import json
from modules.get_ptcg_set import get_ptcg_set_id_prefix
from modules.card_class import Card
from modules.deckstats_class import DeckStats
from modules.api_request import make_api_request
from modules.get_tcgplayer_price import get_tcgplayer_price

def parse_decklist(decklist):
    lines = decklist.splitlines()
    json_decklist = []
    deckstats_object = DeckStats()

    for line in lines:
        if line != "" and line [0].isdigit():
            parsed_words = line.split()

            card_object = Card(parsed_words[-2], parsed_words[-1], parsed_words[0])
            ptcgoCode = card_object.return_ptcgoCode()
            card_number = card_object.return_card_number()
            card_count = card_object.return_card_count()
            set_id, set_prefix = get_ptcg_set_id_prefix(ptcgoCode)

            data = make_api_request(set_id, set_prefix, card_number)

            try:
                card_supertype = data['supertype']
                card_total_price_float = get_tcgplayer_price(data, card_count)

                card_object.set_card_id(data['id'])
                card_object.set_card_name(data['name'])
                card_object.set_card_supertype(card_supertype)
                card_object.set_image_large(data['images']['large'])
                card_object.set_tcgplayer_url(data['tcgplayer']['url'])
                card_object.set_card_total_price('{:.2f}'.format(card_total_price_float))
                card_object.set_card_symbol(data['set']['images']['symbol'])

                deckstats_object.update_deck_total_price(card_total_price_float)
                if card_supertype == 'Pokémon':
                    deckstats_object.update_pokemon_count(card_count)
                elif card_supertype == 'Trainer':
                    deckstats_object.update_trainer_count(card_count)
                elif card_supertype == 'Energy':
                    deckstats_object.update_energy_count(card_count)

            except TypeError:
                pass

            json_decklist_string = json.dumps(card_object.__dict__)
            json_decklist_dict = json.loads(json_decklist_string)
            json_decklist.append(json_decklist_dict)

    deckstats_object.format_deck_total_price()
    json_deckstats_string = json.dumps(deckstats_object.__dict__)
    json_deckstats_dict = json.loads(json_deckstats_string)
    json_decklist.append(json_deckstats_dict)
    return json_decklist