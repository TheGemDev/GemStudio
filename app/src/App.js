import React from 'react';
import { Space, Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="App-header">
        <Space direction="vertical" size={[0, 100]} wrap>
          <Button block type="primary" style={{width: 400}}>OPEN A PROJECT</Button>
          <Button block type="primary">CREATE A NEW PROJECT</Button>
          <Button block type="link" href="http://wiki.compilgames.net/doku.php/gdevelop5/start">SEARCH THE DOCUMENTATION</Button>
        </Space>
      </div>
    </div>
  );
}

export default App;
