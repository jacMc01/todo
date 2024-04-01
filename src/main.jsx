import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // make sure Tailwind is imported in this file
import App from './App';

function Main() {
  useEffect(() => {
    document.body.className = 'bg-gray-300 min-h-screen';
  }, []);

  return <App />;
}

ReactDOM.render(<Main />, document.getElementById('root'));
