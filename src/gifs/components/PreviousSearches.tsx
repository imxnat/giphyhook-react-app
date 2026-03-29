interface Props {
  previousSearch: string[];
  handlePreviousSearchClicked: (term: string) => void;
}

const PreviousSearches = ({ previousSearch, handlePreviousSearchClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h3>LATEST SEARCHES</h3>
      <ul className="previous-searches-list">
        {previousSearch.map((term) => (
          <li key={term}
            className="previous-searches-list li"
            onClick={() => handlePreviousSearchClicked(term)}
          >{term}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PreviousSearches;