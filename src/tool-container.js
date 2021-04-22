//import dummySignature from './dummySignature.png';
import dummySignature2 from './dummySignature2.png';
import PercentageCircle from './percentageCircle';
import AddButton from './add.png';
import { useState,useEffect} from 'react';
import Axios from "axios";

const toolName="compare signatures" // heading at the top which changes according to selected option


function SignaturePad({setImageFile}){


    //let enteredSignature=dummySignature2; //dummy signature
 
    const[enteredSignature,setSignature]=useState("");  //to monitor the changes done to the state of the signature every time the user selects
    //const fileURL="C:\\Users\\andre\\Desktop\\SDGP_SIG\\"
    //console.log(filePath)//testing if the correct file path is added

    //this function reads the users selected file and previews it in the signature pad(customer entered signature)


        const imageHandler=(e)=>{

            const selected=e.target.files[0];
            let reader=new FileReader();
            reader.readAsDataURL(selected);
            //setImageFile(fileURL+selected.name)

            

            setImageFile(reader.result);

            console.log(selected.name);//testing if right file was selected\
            //setFilePath(fileURL+selected.name);

            reader.onloadend=()=> {
                setSignature(reader.result);
                setImageFile(reader.result)
                //console.log(reader.result)
                //setFilePath(fileURL+selected.name);
                
                
                

                // var textChunk = reader.result.toString('utf8')
                // setFilePath(textChunk)
                // setImageFile(filePath)
                //console.log(filePath)
                //setFilePath("filepath= "+fileURL+selected.name)
                //console.log(reader.result)//testing the binary data,which will be added to api
            }


            //setFilePath(reader.result)
            //reader.readAsDataURL(selected);
            //console.log(reader.result)
            //setFilePath("filepath= "+fileURL+selected.name);
            //console.log(filePath); // to test  if the correct signature was selected
            
            
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
                <img src={enteredSignature}  height="120px" alt="signature"/>
            </div>
            <input type="file" id="uploadSig" name="uploadSig" accept="image/*"style={{display:'none',visiblity:'none'}}  onChange={imageHandler}></input>
            <label htmlFor="uploadSig"><img src={AddButton} height="50px" alt="upload signature"/></label>
            
        </div>

 
    );



}

function SearchBar({setCustId}){

    const[customerId,setCustomerId]=useState(1211);


            const handleChange=(event)=>{

            
                setCustomerId(event.target.value);
                console.log("type produced:" + typeof(customerId));

            }

            const handleSubmit=(event)=>{

                event.preventDefault();
              
                setCustId(parseInt(customerId));
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


function SignaturePadMini({enteredCustId}){

    const[value,setValue]=useState("");
    //const[customerId,setCustomerId]=useState(enteredCustId);
    console.log(enteredCustId)
    //const[originalsList,setOriginalsList]=useState([]);

    // console.log(typeof(enteredCustId));

    useEffect(()=>{
 
        Axios.get('http://localhost:3001/api/get').then((response)=>{

            //setOriginalsList(response.data)
            console.log(response.data);
            //console.log(enteredCustId);
            //console.log(typeof(enteredCustId))
            //console.log(customerId);
    
            //console.log("the useState: "+customerId)

            //console.log(typeof(response.data.CustId))
            

            console.log("this is the correct number " +enteredCustId);
            //setCustomerId(number);

            
            let selectedItem = response.data.find(item => item.CustId === enteredCustId)
            let data = selectedItem.img;
            var imageURL = 'data:image/png;base64,' + new Buffer(data, 'binary').toString('base64');
            setValue(imageURL);

        })
            

    
    },[enteredCustId])
            

    /*useEffect(() => { 

        console.log(originalSignature)
        let selectedItem = originalSignature.find(item => item.CustId === 12345);
        let data = selectedItem.img;
        let buff = new Buffer(data, 'base64');
        
        setValue(buff.toString('ascii'));

        console.log('"' + data + '" converted from Base64 to ASCII is "' + value + '"');
        console.log(selectedItem.img); 
        console.log("yes its me!")
    
    
    }, [originalSignature])*/

    

    
    return(

            <div className="signaturePadMini">
                <div className="signatureContainerMini">
                    <img src={value} height="80px" alt='signature'/>
                </div>
            </div>
        

    );

}


// function CompareButton(){
//     return(

//             <button type="submit" className="btnCompare"> Compare signatures</button>
   

//     );   

// }


function ToolContainer(){

    //const[matchPercentage,setMatchPercentage]=useState(0);

    const[enteredCustId,setCustId]=useState(12345)
    const [ImageFile,setImageFile]=useState("");

    const [data,setData]=useState({

        custId:"",
        address: ""
       //custName:""

    }) 

    function post(e){

        e.preventDefault();
        //console.log(data.custId);
        Axios.post("http://localhost:5000/test",{
            
            custId: data.custId,
            address: data.address

    }).then(()=>{
           alert("successfull insert");
        })

    }

    // var json_data=JSON.parse(data);
    //     console.log(json_data);

    useEffect(()=>{
        
        
        console.log("coming from the search bar :"+enteredCustId);
       // console.log("coming from the signature pad: "+ ImageFile);

        data.custId=enteredCustId;
        //setData.address=ImageFile;

        console.log(data);
        console.log("CustId changed: "+ enteredCustId)
       // console.log(typeof(enteredCustId));


    },[enteredCustId]);

    useEffect(()=>{
        
        
        //console.log("coming from the search bar :"+enteredCustId);
        console.log("coming from the signature pad: "+ ImageFile);

        //setData.custId=enteredCustId;
        data.address=`${ImageFile}`;

        
        
        console.log("image changed "+ImageFile)
        //console.log(typeof(enteredCustId));


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
                    <SignaturePadMini enteredCustId={enteredCustId}/>
                    <PercentageCircle/>
                </div>
                
            </div>
        </div>

    );

}




export default ToolContainer;