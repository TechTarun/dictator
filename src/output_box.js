import React from 'react';
import { Input } from 'antd';
import "antd/dist/antd.css";

const { TextArea } = Input;

class OutputBox extends React.Component { 
  render() {
    return (
      <div className="output">
        <TextArea rows={6} placeholder="Speak to get your text here..." value={this.props.spoken_text} />
      </div>
    );
  }
}

export default OutputBox;