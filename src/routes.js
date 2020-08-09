import EntryForm from './components/entry-form/EntryForm.svelte'
import Dashboard from './components/Dashboard.svelte'
import Search from './components/search/Search.svelte'
import Calendar from './components/Calendar.svelte'

export const routes = {
  '/': EntryForm,
  '/entry/:date': EntryForm,
  '/search': Search,
  '/calendar/:date?': Calendar,
  '/dashboard': Dashboard,
}
