
import Search from "../assets/util-components/Search";
import '../assets/styles/Top.css';

function Top(){
    return(
        <div className="top-container">
            <div className="heading">
                <header><h1>Scientist</h1></header>
            </div>
            <div>
                <Search/>
            </div>
            
        </div>
    )
}
export default Top;