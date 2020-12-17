import React from 'react';
import { Space, Button, Upload, Typography} from 'antd';
import './style.css';
import logo from '../../res/logo/GD-logo.png';

function App() {
  return (
    
    <div className="App-page">
      <div className="App-header">
        
      </div>
      <div class="App-body">
        <Space direction="vertical" size={[1, -10]}>
            <img src={logo} width={400} alt="Laboratoria" />
            <Upload>
              <Button block type="primary" style={{width: 400}}>OPEN A PROJECT</Button>
            </Upload>
            <Button block type="primary">CREATE A NEW PROJECT</Button>
            <Button block type="text" style={{color: "#fff"}}href="http://wiki.compilgames.net/doku.php/gdevelop5/start">SEARCH THE DOCUMENTATION</Button>
        </Space>
        
      </div>
      <div className="App-footer">
        <Space size={[-10, 1]}>
          <Button block type="text" style={{color: "#fff", fontSize: "20" }}>ABOUT GDEVELOP</Button>
          <Button block type="text" style={{color: "#fff", fontSize: "20" }}>GDEVELOP FORUMS</Button>
          <Button block type="text" style={{color: "#fff", fontSize: "20" }}>HELP AND TUTORIALS</Button>
        </Space>
      </div>
    </div>
  );
}

export default App;