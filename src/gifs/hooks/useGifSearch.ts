import { useCallback, useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { useSearchHistory } from "./useSearchHistory";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";


export const useGifSearch = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // useRef porque el cache es interno, no necesita disporar re-renders
    const cache = useRef<Record<string, Gif[]>>({});

    const { history, addToHistory } = useSearchHistory();

    const fetchGifs = useCallback(async (term: string) => {
        // si ya esta en cache, no hace la peticion
        if (cache.current[term]) {
            setGifs(cache.current[term]);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const results = await getGifsByQuery(term);
            cache.current[term] = results; // guardas en cache
            setGifs(results); // actualizas tu busqueda
        } catch {
            setError('No se pudieron cargar los gifs');
        } finally {
            setLoading(false);
        }
    }, []);


    const handleSearch = async (search: string) => {
        const term = search.trim().toLowerCase();
        if (!term || history.includes(term)) return;

        addToHistory(term);
        await fetchGifs(term);
    };

    const handlePreviousSearchClicked = useCallback((term: string) => {
        fetchGifs(term);
    }, [fetchGifs]);

    return {
        // values
        gifs,
        history,
        isLoading,
        error,
        // Actions
        handleSearch,
        fetchGifs,
        handlePreviousSearchClicked // expuesto para permirt re-buscar un termino del historial
    };
};