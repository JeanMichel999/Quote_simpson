import axios from 'axios'
import React, { useEffect, useState } from 'react';


function App() {
  const [quote, setQuote] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) =>
        setQuote(response.data[0]))

  }, [count]

  )

  return (
    <div className="App">
      <p>{quote.quote}</p>
      <p>{quote.character}</p>
      <img src={quote.image} alt={quote.character} />
      <button type="button" onClick={() => setCount((count) => count + 1)}>Chercher un nouveau Simpson</button>
    </div>
  );
}

export default App;
