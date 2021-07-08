import React, { useState, useEffect, useContext } from 'react';
import { TokenContext } from '.';

export default function Books() {
  const [tokenData] = useContext(TokenContext);
  const booksApiUrl = 'https://localhost:5001/api/books';

  const [books, setBooks] = useState();

  function fetchData() {
    if(!tokenData) {
      return;
    }
    
    fetch(booksApiUrl, {
      headers: {
        'Authorization': `Bearer ${tokenData.token}`
      }
    })
    .then(response => response.json())
    .then(books => setBooks(books));
  }

  useEffect(fetchData, [tokenData]);

  return (
    tokenData 
    ? (
      <ul>
        {books?.map(b => 
          <li key={b.id}>{b.title}</li>
          )}
      </ul>
    )
    : (<span>No token</span>)
  );
}