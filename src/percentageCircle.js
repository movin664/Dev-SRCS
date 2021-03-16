var matchPercentage=71
var matchPercentageString=""+ matchPercentage
var matchPercentageName="c100 p"+ matchPercentage;


function SignatureStatus(){

    if(matchPercentage>70){

        return <h3>Authentic</h3>
        
    }
    return <h3>Forged</h3>

}


function percentageCircle(){

    return(

    <div class="clearfix">

                <div className={matchPercentageName}>
                    <span>{matchPercentage}%</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                    
                </div>
                <SignatureStatus/>

    </div>
    );


}
export default percentageCircle;
