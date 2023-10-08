from data.ptcg_sets import ptcg_sets

def get_ptcg_set_id_prefix(ptcgoCode):
	for set in ptcg_sets:
		try:
			if set['ptcgoCode'] == ptcgoCode:
				set_id = set['id']
				if set.get('prefix') == None:
					set_prefix = ''
				else:
					set_prefix = set['prefix']
				return set_id, set_prefix
		except:
			pass
	return '', ''