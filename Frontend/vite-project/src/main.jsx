import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FaceExpressionDetector from './Feature/Face_Expression/Pages/FaceExpression_Detector'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FaceExpressionDetector />
  </StrictMode>,
)
