import dummySignature from './dummySignature.png';
import dummySignature2 from './dummySignature2.png';
import PercentageCircle from './percentageCircle';
import AddButton from './add.png';
import { useState } from 'react';

const toolName="compare signatures" // heading at the top which changes according to selected option


function SignaturePad(){

    //let enteredSignature=dummySignature2; //dummy signature

    const[enteredSignature,setSignature]=useState(dummySignature);  //to monitor the changes done to the state of the signature every time the user selects


    //this function reads the users selected file and previews it in the signature pad(customer entered signature)
    const imageHandler=(e)=>{

        const selected=e.target.files[0];

        let reader=new FileReader();
        reader.onloadend=()=> {
            setSignature(reader.result);
        }
        reader.readAsDataURL(selected);
        console.log(selected); // to test  if the correct signature was selected
        
    }

    /*imageHandler = (e) =>{
        const reader=new FileReader();

        reader.onload=()=>{
            if (reader.readyState===2){

                this.setState({enteredSignature: reader.result})
            
            reader.readAsDataURL(e.target.files[0]);
            }

        }
    }*/


    return(

        <div className="signaturePad">
            <div className="signatureContainer">
                <img src={enteredSignature}  height="100%" width="80%" alt="signature"/>
            </div>
            <input type="file" id="uploadSig" name="uploadSig" accept="image/*"style={{display:'none',visiblity:'none'}}  onChange={imageHandler}></input>
            <label htmlFor="uploadSig"><img src={AddButton} height="50px" alt="upload signature"/></label>
            
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

    let enteredSignature=dummySignature2; //dummy signature

    return(

        <div className="signaturePadMini">
            <div className="signatureContainerMini">
                <img src={enteredSignature}  height="100%" width="80%" alt="signature"/>
            </div>
        </div>


    );

}


function CompareButton(){
    return(

            <button className="btnCompare" > Compare signatures</button>
        

    );   

}


function toolContainer(){

    //const[matchPercentage,setMatchPercentage]=useState(0);

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