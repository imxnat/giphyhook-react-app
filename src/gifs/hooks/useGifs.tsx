import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

const useGifs = () => {

	// state que maneja el fetch de la data by query
	const [gifs, setGifs] = useState<Gif[]>([]);

	// manejador de las busquedas previas
	const [previousSearchTerm, setPreviousSearchTerm] = useState(['The legend of Zelda', 'Nintendo Switch 2']);

	// manejador del buscador de terminos
	const handleSearch = async (valueSearch: string) => {
		const newSearch = valueSearch.trim().toLowerCase();

		if (newSearch.length === 0) return; // verificar si esta vacio

		if (previousSearchTerm.includes(newSearch)) return; // Verificar que no haya duplicados

		const addNewPreviousTerm = [newSearch, ...previousSearchTerm];

		// 	 la peticion de la api
		const getGifs = await getGifsByQuery(newSearch); // action thats is fetching the data

		// 	 Estado actual de la API key
		setGifs(getGifs);

		addNewPreviousTerm.length >= 8 ? null : setPreviousSearchTerm(addNewPreviousTerm);

	};


	const handlePreviousSearchClicked = (term: string) => {
		console.log({ term });
	};

	return (
		{
			//values
			gifs,
			previousSearchTerm,

			//actions
			handleSearch,
			handlePreviousSearchClicked,

		}
	);
};
export default useGifs;