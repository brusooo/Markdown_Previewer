import React, { Component } from 'react'
import { marked } from 'marked'
import Prism from "prismjs";

import * as Unicons from '@iconscout/react-unicons';


marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class PreviewPanel extends Component {

  getMarkdownText = () => {
    let rawMarkup = marked(this.props.message, { renderer: renderer });
    return { __html: rawMarkup };
  }

  render() {

    return (
      <div className="previewIt">
        <div className="top">
          <Unicons.UilBullseye className="edit icon" />
          <h2>Preview</h2>
          
        </div>
        <div className="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
      </div>
    )
  }
}

export default PreviewPanel