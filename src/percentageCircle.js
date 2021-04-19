var matchPercentage=50;
var matchPercentageName="c100 p"+ matchPercentage;


function SignatureStatus(){

    if(matchPercentage>70){

        return <h3>Authentic</h3>
        
    }
    if(matchPercentage==0){

        return <h3>Status...</h3>

    }
    return <h3>Forged</h3>

}


function percentageCircle(){

    return(

    <div className="clearfix">

                <div className={matchPercentageName}>
                    <span>{matchPercentage}%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                    
                </div>
                <SignatureStatus/>

    </div>
    );


}
export default percentageCircle;
