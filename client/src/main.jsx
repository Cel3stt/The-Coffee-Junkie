import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'

import store  from './store/store'
import { Toast } from './components/ui/toast'
import { Toaster } from './components/ui/toaster'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Provider store={store}>
      <App/>
      <Toaster/>
   </Provider>
  </BrowserRouter>


)
