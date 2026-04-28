import { useState } from "react";

const MAX_HISTORY = 8;

export const useSearchHistory = () => {
    const [history, setHistory] = useState<string[]>([]);

    const addToHistory = (term: string) => {
        if (history.includes(term)) return;
        if (history.length >= MAX_HISTORY) return;
        setHistory(prev => [term, ...prev]);
    };

    return { history, addToHistory };
};