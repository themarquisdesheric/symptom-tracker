import { location } from 'svelte-spa-router'
import { derived } from 'svelte/store';
import path from 'path'
import { getTodaysDate } from '../utils/utils'

const isPastEntry = derived(
	location,
	$location => {
		if ($location.includes('entry')) {
			const todaysDate = getTodaysDate()
			const entryDate = path.basename($location)
			
			return todaysDate !== entryDate
		}
		
		return false
	}
);

export default isPastEntry
