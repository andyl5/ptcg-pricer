from modules.ptcg_sets_data import ptcg_sets

def get_ptcg_set_id(ptcgoCode):
	for set in ptcg_sets:
		if set.get('ptcgoCode') == ptcgoCode:
			set_id = set.get('id', '')
			prefix = set.get('prefix', '')
			return f"{set_id}-{prefix}"
	return ''