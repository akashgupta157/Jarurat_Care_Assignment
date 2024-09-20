import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ServiceProvider } from './ServiceContext.jsx'

createRoot(document.getElementById('root')).render(
  <ServiceProvider>
    <App />
  </ServiceProvider>,
)
