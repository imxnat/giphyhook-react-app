import { useState } from "react";
import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
// import { mockGifs } from "./mock-data/gifs.mock";
import type { Gif } from "./gifs/interfaces/gif.interface";
// import { mockGifs } from "./mock-data/gifs.mock";
import { getRandomGifs } from "./gifs/actions/get-random-gifs.action";


const GifApp = () => {
	// state que maneja el fetch de la data by query
	const [gifs, setGifs] = useState<Gif[]>([]);


	const [randomGifs, setRandomGifs] = useState<Gif[]>([]);
	// console.log(getRandomGifs());

	// const fetchRandomGifs = getRandomGifs();
	// setRandomGifs(fetchRandomGifs);


	// manejador del buscador de terminos
	const handleSearch = async (valueSearch: string) => {

		const newSearch = valueSearch.trim().toLowerCase();

		if (newSearch.length === 0) return; // verificar si esta vacio

		if (previousSearchTerm.includes(newSearch)) return; // Verificar que no haya duplicados

		const addNewPreviousTerm = [newSearch, ...previousSearchTerm];

		// la peticion de la api
		const getGifs = await getGifsByQuery(newSearch); // action thats is fetching the data

		// Estado actual de la API key
		setGifs(getGifs);

		addNewPreviousTerm.length >= 8 ? null : setPreviousSearchTerm(addNewPreviousTerm);

	};


	// manejador de las busquedas previas
	const [previousSearchTerm, setPreviousSearchTerm] = useState(['The legend of Zelda', 'Nintendo Switch 2']);

	const handlePreviousSearchClicked = (term: string) => {
		console.log({ term });
	};


	return (
		<>
			{/* Header */}
			<CustomHeader
				title="👾 Gipyhylook!"
			/>

			{/* search */}
			<SearchBar
				placeholder="Search your favorite theme gifs..."
				OnSearchValue={handleSearch}
			/>

			{/* busqueda previa */}
			<PreviousSearches
				previousSearch={previousSearchTerm}
				handlePreviousSearchClicked={handlePreviousSearchClicked} />

			{/* show search Gifs */}
			<GifList gifs={gifs.length == 0 ? randomGifs : gifs} />
		</>
	);
};
export default GifApp;




/** Tarea realizar logica del search bar > handleSearch
 * 
 * (✅) 1. validar que el valueSearch no este vacio 
 * (✅) 2. Convertir el valueSearch a minusculas y eliminar espacios en blanco
 * (✅) 3. Evitar busquedas duplicadas verificando si el termino ya existe en previousSearchTerm
 * (✅) 4. Actualizar previousSearchTerm agregando el nuevo termino al inicio y limitando a 8 elemntos maximo, no puede ser un arreglo de mas de 8 elementos
 */
