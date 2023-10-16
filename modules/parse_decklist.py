import json
from modules.get_ptcg_set import get_ptcg_set_id_prefix
from modules.card_class import Card
from modules.api_request import make_api_request
from modules.get_tcgplayer_price import get_tcgplayer_price

def parse_decklist(decklist):
    lines = decklist.splitlines()
    json_decklist = []

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
                card_object.set_card_id(data['id'])
                card_object.set_card_name(data['name'])
                card_object.set_card_supertype(data['supertype'])
                card_object.set_image_large(data['images']['large'])
                card_object.set_tcgplayer_url(data['tcgplayer']['url'])
                card_object.set_card_total_price('{:.2f}'.format(get_tcgplayer_price(data, card_count)))
                card_object.set_card_symbol(data['set']['images']['symbol'])
            except TypeError:
                pass

            json_string = json.dumps(card_object.__dict__)
            json_dict = json.loads(json_string)
            json_decklist.append(json_dict)
    return json_decklist