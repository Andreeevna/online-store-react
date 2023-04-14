import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { store } from './redux/store'

import App from './components/App/App'

import './styles/index.css'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<HashRouter basename={window.location.pathname || ''}>
			<App />
		</HashRouter>
	</Provider>
)
