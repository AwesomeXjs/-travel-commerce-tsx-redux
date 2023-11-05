import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './state/store'
import './scss/_style.scss'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
