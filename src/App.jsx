import React, { Component } from 'react'

import "./App.css"

import announce from './assets/announce'

import EditorPanel from './components/EditorPanel'
import PreviewPanel from './components/PreviewPanel'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      passage: announce,
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 5000);
  }

  handleChange = (e) => {
    this.setState({
      passage: e.target.value
    })
  }

  render() {
    return (
      this.state.isLoading ?

        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>

        :

        <div>
          <div className='title'>
            <h1>Edit in Own way</h1>
          </div>

          <div className='view'>
            <EditorPanel
              handleTextArea={this.handleChange}
              passageLine={this.state.passage}
            />
            <PreviewPanel
              message={this.state.passage}
            />
          </div>

          <div className="footer">
            <h3>Brusooo</h3>
          </div>
        </div>
    )
  }
}

export default App