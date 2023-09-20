import { useEffect, useState } from "react";

const KEY = "b0237cb1";

// export function useMovies(query, callback) {
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error(
            `Something wrong with fetching movies. HTTP error status: ${res.status}`
          );
        }

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie not found!");
        }

        setMovies(data.Search);
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    // at least 3 characters
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return {
    movies,
    isLoading,
    error,
  };
}
