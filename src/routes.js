import EntryForm from './components/EntryForm.svelte'
import Dashboard from './components/Dashboard.svelte'

export const routes = {
  '/': EntryForm,
  '/search': Dashboard,
  '/calendar': Dashboard,
  '/dashboard': Dashboard,
}
