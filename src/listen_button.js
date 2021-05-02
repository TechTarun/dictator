import React from 'react';
import  { Button } from 'antd';
import { AudioFilled } from '@ant-design/icons';
import "antd/dist/antd.css";
import OutputBox from './output_box.js';

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognizer = new SpeechRecognition()
recognizer.continuous = true;

class ListenButton extends React.Component {
  constructor() {
    super();
    this.state =  {
      listening: false,
      output_text: "",
      button_type:"primary"
    }
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
  }

  toggleListen() {
    this.setState({
      button_type: this.state.listening ? "primary" : "danger",
      listening: !this.state.listening,
    }, this.handleListen)
  }

  handleListen() {
    if (this.state.listening) {
      this.setState({
        output_text: ""
      })
      recognizer.start()
      // recognizer.onend = () => recognizer.start()
    } else {
      recognizer.stop()
    }

    recognizer.onstart = () => {
      console.log("Listening...")
    }
    
    recognizer.onend = () => {
      console.log('Done listening...')
    }

    let finalTranscript = ''
    recognizer.onresult = event => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
      }
      this.setState({
        output_text: finalTranscript
      })
  }
}

  render () {
    return (
      <>
      <div className="listen">
      <Button type={this.state.button_type} shape="circle" size="large" icon={<AudioFilled />} onClick={this.toggleListen} />
      </div>
      <OutputBox spoken_text={this.state.output_text} />
      </>
    );
  }
}
export default ListenButton;