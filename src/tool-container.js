import dummySignature from './dummySignature.png';

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

function toolContainer(){

    return(
   
        <div className="toolContainer">
             <h2>{toolName}</h2>
             <SignaturePad/>
             <p>hello this is just to get extra space</p>
        </div>

    );

}


export default toolContainer;