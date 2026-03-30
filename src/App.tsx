import GifList from "./gifs/components/GifList";
import PreviousSearches from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";
import useGifs from "./gifs/hooks/useGifs";


const GifApp = () => {

	const { handleSearch, handlePreviousSearchClicked, gifs, previousSearchTerm } = useGifs();

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
			<GifList gifs={gifs.length == 0 ? mockGifs : gifs} />
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
