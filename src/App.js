import React, { useState } from 'react'
import Markdown from 'react-markdown';

function App() {

  const [markdown, setMarkdown] = useState('## Markdown preview')

  // var markdownn = require("markdown").markdown;
  // console.log(markdownn.toHTML("Hello *World*!"));


  return (
    <main>
      <section className="markdown">
        <textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
        <article className="result">
          <Markdown>{markdown}</Markdown></article>
      </section>
    </main>
  )
}

export default App
