// App.js

import { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import SecondPage from './components/SecondPage';
import SignUp from './components/SignUp';
import Goals from './components/Goals';
import Tracker from './components/Tracker';
import Schedule from './components/Schedule';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="left-gray"></div>
      <div className="page-content">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
      </div>
      <div className="right-gray"></div>
    </div>
  );
}

export default App;
