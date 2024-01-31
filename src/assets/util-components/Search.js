
import { useState } from 'react';

import '../styles/Search.css';

const Search = ()=>{
    const [name,setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('') // empty the field after submitting.
        console.log("Name searched: ", name) // testing
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
                <input placeholder="search" value={name} onChange={
                    e=> setName(e.target.value)}/>
           </form>
        </div>
    )

}

export default Search;

