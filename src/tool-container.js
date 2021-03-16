import dummySignature from './dummySignature.png';
import PercentageCircle from './percentageCircle';

const toolName="compare signatures"
var enteredSignature=dummySignature;

function SignaturePad(){

    return(

        <div className="signaturePad">
            <div className="signatureContainer">
                <img src={enteredSignature}  height="130px" alt="signature"/>
            </div>
        </div>


    );

}
function SearchBar(){

    return(

        <div className="search-container">
            <form action="/action_page.php">
                 <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>

    );


}
function SignaturePadMini(){

    return(

        <div className="signaturePadMini">
            <div className="signatureContainerMini">
                <img src={enteredSignature}  height="80px" alt="signature"/>
            </div>
        </div>


    );

}

function CompareButton(){
    return(

            <button className="btnCompare"> Compare signatures</button>
        

    );   

}

function toolContainer(){

    return(
   
        <div className="toolContainer">
             <h2>{toolName}</h2>
             <div className="flex-elements">
                <div className="leftAllignedElements">
                    <SignaturePad/>

                    <div className="btnCompareContainer">
                        <CompareButton/>
                    </div>
                </div>      
                <div className="rightAllignedElements">
                    <SearchBar/>
                    <SignaturePadMini/>
                    <PercentageCircle/>
                </div>
                
            </div>
        </div>

    );

}


export default toolContainer;