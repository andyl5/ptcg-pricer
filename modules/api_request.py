import requests

def make_api_request(request_parameters):
    request_url = f"https://api.pokemontcg.io/v2/cards?q=({request_parameters})&select=id,name,supertype,images,tcgplayer,set"
    print(request_url)
    try:
        response = requests.get(request_url)
        data = dict(list(response.json().items())[0:1])['data']
        return data
    except:
        # error handling if request fails. tell client, "Sorry, please try again later"
        pass

