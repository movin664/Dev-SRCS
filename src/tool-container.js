import AddButton from './add.png';
import { useState,useEffect} from 'react';
import Axios from "axios";
import IMAGES from './images.js'


const toolName="compare signatures" // heading at the top which changes according to selected option


function SignaturePad({setImageFile}){


    //let enteredSignature=dummySignature2; //dummy signature
 
    const[enteredSignature,setSignature]=useState("");  //to monitor the changes done to the state of the signature every time the user selects
    
        const imageHandler=(e)=>{

            const selected=e.target.files[0];
            let reader=new FileReader();
            reader.readAsDataURL(selected);
            console.log(selected.name);//testing if right file was selected\
        


        try{
            reader.onloadend=()=> {
                setSignature(reader.result);
                setImageFile(selected.name)
               
            }
        }catch{

            console.log("OOps you closed without picking a signature...")
        }


            
        }


    return(

        <div className="signaturePad">
            <div className="signatureContainer">
                <img src={enteredSignature}  height="120px" alt="signature"/>
            </div>
            <input type="file" id="uploadSig" name="uploadSig" accept="image/*"style={{display:'none',visiblity:'none'}}  onChange={imageHandler}></input>
            <label htmlFor="uploadSig"><img src={AddButton} height="50px" alt="upload signature"/></label>
            
        </div>

 
    );




}

function SearchBar({setCustId}){


    

    const[customerId,setCustomerId]=useState("");


            const handleChange=(event)=>{

            
                setCustomerId(event.target.value);
                console.log("type produced:" + typeof(customerId));

            }

            const handleSubmit=(event)=>{

                event.preventDefault();
              
                setCustId(customerId);
                console.log("in searech bar : "+typeof(customerId));
                console.log(`A customer submitted: ${customerId}`);                


            } 
        

    return(

        <div className="search-container">
            <form onSubmit={handleSubmit}>
                 <input placeholder="Enter customer ID to search" id="text" value={customerId} onChange={handleChange} type="number" name="custId"/>
                    <button type="submit" >
                        <i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>

    );
    
}



function RenderImage({enteredCustId}){

    console.log("in reder image"+enteredCustId)
    console.log(typeof(enteredCustId));

    try{
            if (parseInt(enteredCustId)===999){

            return <img src={IMAGES.signature_999} height="80px" width="300px" alt='signature' />
            }
            else if (parseInt(enteredCustId)===2249){

                return <img src={IMAGES.signature_2249} height="80px" width="300px" alt='signature' />
            }
            else if (parseInt(enteredCustId)===12311){

                return <img src={IMAGES.signature_12311} height="80px" width="300px" alt='signature' />
            }
            else if (parseInt(enteredCustId)===23432){

                return <img src={IMAGES.signature_23432} height="80px" width="300px" alt='signature' />
            }

            return  <img src={""} height="80px" width="300px" alt='signature' />

        }catch{
            alert("invalid customer id")
        }


}


function SignaturePadMini({enteredCustId}){



    console.log("in signaturePadMini"+enteredCustId);


    console.log(`./Test/Originals/${enteredCustId}`);
    console.log(typeof(enteredCustId));


    

    return(

            <div className="signaturePadMini">
                <div className="signatureContainerMini">
                    <RenderImage enteredCustId={enteredCustId}/>
                </div>
            </div>
        

    );

}

function SignatureStatus({signatureMatch}){

    if(signatureMatch>=75){

        return <h1>Risk level:<br></br>Low</h1>

    }
    else if(signatureMatch<75 && signatureMatch>=50){

        return <h1>Risk level:<br></br>Moderate</h1>

    }
    else if(signatureMatch>0 && signatureMatch<50){
        return <h1>Risk level:<br></br>High</h1>
    }

    return <h1>Risk level:<br></br>........</h1>


}



function ToolContainer(){

    //const[matchPercentage,setMatchPercentage]=useState(0);

    const[enteredCustId,setCustId]=useState(0)
    const[imageURL,setImageURL]=useState("")
    const [ImageFile,setImageFile]=useState("");

    const[signatureMatch,setSignatureMatch]=useState(0);
    
    

    var matchPercentageName="c100 p"+ signatureMatch;

    const [data,setData]=useState({

        custId:"",
        address: ""
       //custName:""

    }) 

    function post(e){

        e.preventDefault();
        Axios.post("http://localhost:5000/test",{
            
            custId: data.custId,
            address: data.address

    }).then((res)=>{
           
            console.log("successfull insert");
            setSignatureMatch(res.data)
            //SignatureStatus(signatureMatch);
            console.log(signatureMatch);

           
        })

    }

    

    useEffect(()=>{
            
        console.log("coming from the search bar :"+enteredCustId);//for testing

        data.custId=`${enteredCustId}.jpeg`  //create the test signatures filepath

        console.log(data);
        console.log("CustId changed: "+ enteredCustId)

    },[enteredCustId]);

    useEffect(()=>{

        console.log("coming from the signature pad: "+ ImageFile);

        data.address=`${ImageFile}`;   
        console.log("image changed "+ImageFile)

    },[ImageFile]);

    
    

    return(
   
        <div className="toolContainer">
             <h2>{toolName}</h2>
             <div className="flex-elements">
                <div className="leftAllignedElements">
                    <SignaturePad setImageFile={setImageFile}/>

                    <div className="btnCompareContainer">
                        <button  onClick={post} className="btnCompare"> Compare signatures</button>
                    </div>
                </div>      
                    <div className="rightAllignedElements">
                        <SearchBar  setCustId={setCustId}/>
                        <SignaturePadMini enteredCustId={enteredCustId} setImageURL={setImageURL}/>

                        <div className="clearfix">

                            <div className={matchPercentageName}>
                                <span>{signatureMatch}%</span>
                                <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>



                        </div>
                            <SignatureStatus signatureMatch={signatureMatch}/>
                        
                        
                    </div>
            

               
                </div>
                
            </div>
        </div>

    );

}




export default ToolContainer;