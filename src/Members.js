import SearchBar from './SearchBar';
import axios from 'axios';
import Popup from './Popup';
import {useState} from 'react';


function Title(){
    return(

        <div className="title">
            <h1 style={{
                fontWeight:500
            }}>Members</h1>

        </div>

    );

}

function Buttons(){

    const [buttonPopup,setButtonPopup]=useState(false);

    return(

        // To apply the same styling to the buttons, The buttons from the home component are reused. 
        //add member button and search bar on registered members page.
        

        <div className="mainFunctionalityButtons"> 
            <button className="btn1" onClick={()=>setButtonPopup(true)}> Add member &nbsp; &nbsp;<i className="fa fa-plus" aria-hidden="true"></i></button>
            <SearchBar/>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>My popup</h3>
            </Popup>
            
        </div>

    );   

}

function Members(){


    return(
 
            <section className="homepageBody">
                <Title/>
                <Buttons/>
            </section>

    );



}

export default Members;