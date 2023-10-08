import requests

def make_api_request(set_id, set_prefix, card_number):
    api_query_url = f"https://api.pokemontcg.io/v2/cards?q=id:{set_id}-{set_prefix}{card_number}&select=id,name,supertype,images,tcgplayer,set"
    print(api_query_url)
    try:
        r = requests.get(api_query_url)
        data = dict(list(r.json().items())[0:1])['data'][0]
        return data
    except:
        pass