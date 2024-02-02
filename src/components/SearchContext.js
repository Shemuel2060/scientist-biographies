
import {useState, useContext, createContext} from 'react';

// create context
const SearchContext = createContext();

export const SearchProvider = ({children})=>{

    const [filteredData, setFilteredDate]  = useState({})/*initial state as
                                    an empty object- filteredData to be used
                                    in the Content component */

    // define search function to be used in the search component
    const handleSearch = (filteredResults) =>{
        // the filtered results to be the filtered data
        setFilteredDate(filteredResults)
    }
    return(
        <SearchContext.Provider value={{filteredData, handleSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

// define custom hook to provide the created context
export const useSearch = () => useContext(SearchContext)

