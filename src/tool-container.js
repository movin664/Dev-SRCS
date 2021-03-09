import dummySignature from './dummySignature.png';

const toolName="compare signatures"
var enteredSignature=dummySignature;

function SignaturePad(){

    return(

        <div className="signaturePad">
            <div className="signatureContainer">
                <img src={enteredSignature}  alt="signature" height="130px" alt="logo"/>
            </div>
        </div>


    );

}

function toolContainer(){

    return(
   
        <div className="toolContainer">
             <h2>{toolName}</h2>
             <SignaturePad/>
        </div>

    );

}


export default toolContainer;