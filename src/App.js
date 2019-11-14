import React from 'react';
import './App.css';
import LeftPanel from './LeftPanel/LeftPanel.js'
import MiddlePanel from './MiddlePanel/MiddlePanel.js'
import RightPanel from './RightPanel/RightPanel.js'
function App() {
  return (
    <div className="App">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
    </div>
  );
}

export default App;
