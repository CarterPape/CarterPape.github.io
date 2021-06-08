import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
);
    
const App = () => (
    <InstantSearch
        searchClient={searchClient}
        indexName={process.env.ALGOLIA_INDEX_NAME}
    >
        <SearchBox />
        <Hits />
    </InstantSearch>
);

export default App;
