
import { useState } from 'react';
import { useSearch } from '../../components/SearchContext';

import data from '../data/scientistData.json'

import '../styles/Search.css';

const Search = ()=>{
    const [name,setName] = useState('')
    const {handleSearch} = useSearch();
    const useData = data.scientists; // get array of data

    const handleInputChange = (event) => {
        const input = event.target.value;
        setName(input);
    
        // Filter the data based on user input
        const filteredResults = useData.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        );
    
        handleSearch(filteredResults); // Pass the filtered data to the parent component
        console.log("filtered data: ", filteredResults) // an object...
      };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('') // empty the field after submitting.
        console.log("Name searched: ", name) // testing
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
                <input placeholder="search by name(s)" value={name} 
                onChange={handleInputChange}/>
           </form>
        </div>
    )

}

export default Search;

