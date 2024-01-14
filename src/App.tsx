import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="title-bar">
          <span>Baylee.dev Template</span>
        </div>
        <div className="app-sidebar">
          <a href="https://github.com/mxbaylee/github-page-template">😽 GitHub Repo</a>
        </div>
        <div className="app-content">
          <h1>🤪 Baylee's Open Source Template</h1>
          <p>This template allows you to build TypeScript React applications that compile to gh-pages easily!</p>

          <h2>💫 Using this template</h2>

          <p>Clone the template</p>

          <pre><code>
          git clone git@github.com:mxbaylee/github-page-template.git PROJECT_NAME
          </code></pre>
          <pre><code>
          cd PROJECT_NAME
          </code></pre>

          <p>Update the port</p>

          <pre><code>
          npm run reroll:port
          </code></pre>
          <pre><code>
          npm pkg set 'homepage'='/'$(basename "$PWD")
          </code></pre>

          <p>Update git</p>

          <pre><code>
          rm -rf .git
          </code></pre>
          <pre><code>
          git init
          </code></pre>
          <pre><code>
          git add --all
          </code></pre>
          <pre><code>
          git commit -m '🥳 Initial commit'
          </code></pre>
          <pre><code>
          git remote add origin PROJECT_ORIGIN
          </code></pre>
          <pre><code>
          git push
          </code></pre>

          <p>Initial deploy</p>

          <pre><code>
          npm install
          </code></pre>
          <pre><code>
          npm run deploy
          </code></pre>


          <h2>💻 Logistically</h2>

          <p>🤖 To run</p>

          <pre><code>
          npm install
          </code></pre>
          <pre><code>
          npm start
          </code></pre>

          <p>📦 To deploy</p>

          <pre><code>
          npm run deploy
          </code></pre>
        </div>
      </div>
    </>
  );
}

export default App;
