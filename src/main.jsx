import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import './api/firebase.js'
import './styles/global.css';

createRoot(document.getElementById('root')).render(<App />);
