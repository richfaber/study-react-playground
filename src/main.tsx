import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import { worker } from './mocks/browser.ts';

const container = document.getElementById('root');
if (!container) {
  throw new Error('root 엘리먼트를 찾을 수 없어요.');
}

worker.start().then(() => {

  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})

