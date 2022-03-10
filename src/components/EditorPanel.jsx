import React, { Component } from 'react'

import * as Unicons from '@iconscout/react-unicons';




class EditorPanel extends Component {
  render() {
    return (
      <div className='editIt'>
        <div className="top">
          <Unicons.UilPen className="edit icon" />
          <h2>Editor</h2>
        </div>

        <div>
          <textarea className="editorView" onChange={this.props.handleTextArea}>{this.props.passageLine}</textarea>
        </div>

      </div>
    )
  }
}

export default EditorPanel