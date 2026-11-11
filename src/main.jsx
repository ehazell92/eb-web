import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RedesignApp from './redesign/RedesignApp.jsx'
import PortfolioPage from './redesign/PortfolioPage.jsx'
import './styles.css'

const currentPath = window.location.pathname.replace(/\/+$/, '')
const isRedesignPortfolio = currentPath === '/redesign/portfolio'
const isRedesign = currentPath === '/redesign'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isRedesignPortfolio ? <PortfolioPage /> : isRedesign ? <RedesignApp /> : <App />}
  </StrictMode>,
)
