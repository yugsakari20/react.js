import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Data from './form.jsx'
import Timer from './Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timer/>
    <Data />

  </StrictMode>,
)
