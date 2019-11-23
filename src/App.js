import React from 'react';
import './App.css';
import LeftPanel from './LeftPanel/LeftPanel.js'
import MiddlePanel from './MiddlePanel/MiddlePanel.js'
import RightPanel from './RightPanel/RightPanel.js'
import OpenWindow from './AddChanel/window.js'
import { Provider } from 'react-redux'
import windowStore from './AddChanel/windowStore.js'

function App() {
  return (
    <div className="App">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
        <Provider store={windowStore}>
        <OpenWindow/>
    	</Provider>
    </div>
  );
}

export default App;
