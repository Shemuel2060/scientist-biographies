
import '../assets/styles/Content.css';
import scientistData from '../assets/data/scientistData.json';

const Content = () =>{
    return(
        <>
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
        </>
    )
}
export default Content;