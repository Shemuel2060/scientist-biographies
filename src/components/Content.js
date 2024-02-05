
import '../assets/styles/Content.css';
import scientistData from '../assets/data/scientistData.json';
import { useSearch } from './SearchContext';


const Content = () =>{
    const {filteredData} = useSearch();
    console.log('Filtered data in contents.js', filteredData)
    
    return(
      filteredData.length===1? ( 
        <div>
          <div className='main-container'>
              <div className='img-viewer'>
                    <img src={filteredData[0].imageUrl} alt={filteredData[0].alt}/>
                    <h4>{filteredData[0].name}</h4>
              </div>
               <div className='biography'>
                    <h3>{filteredData[0].periodOfLife}</h3>
                    <p>{filteredData[0].work}</p>
               </div>
            </div>
        </div>
        ):(
          <div>
          {scientistData.scientists.map((scientist)=>(
            <div className='main-container' key={scientist.id}>
              <div className='img-viewer'>
                    <img src={scientist.imageUrl} alt={scientist.alt}/>
                    <h4>{scientist.name}</h4>
              </div>
               <div className='biography'>
                    <h3>{scientist.periodOfLife}</h3>
                    <p>{scientist.work}</p>
               </div>
            </div>
            ))}
        </div>
        )     
    )
}
export default Content;