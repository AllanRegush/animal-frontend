import { useState, useEffect } from "react";

export function useAnimalSearch() {
    const [animals, setAnimals] = useState([]);

    async function search(q) {
      try {
        const result = await fetch(
          'http://localhost:8080?' + new URLSearchParams({ q })
        );
        const data = await result.json();
        setAnimals(data);
        localStorage.setItem('lastQuery', q);
      }
      catch (e) {
        console.error(e);
      }
    }
  
    useEffect(() => {
      const lastQuery = localStorage.getItem('lastQuery');
      search(lastQuery);
    }, [])

    return { search, animals };
}