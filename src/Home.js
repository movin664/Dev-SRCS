import ToolContainer from './tool-container';

function Title(){
    return(

        <div className="title">
            <h1 style={{
                fontWeight:500
            }}>SRCS TOOL</h1>

        </div>

    );

}

function Buttons(){
    return(

        // compare button and identify signature button on home page
        <div className="mainFunctionalityButtons">
            <button className="btn1"> Compare signatures</button>
            <button className="btn2">Identify signature</button>
        </div>

    );   

}

 
function Home(){

    return(
        
        <section className="homepageBody">
            <Title/>
            <Buttons/>
            <ToolContainer/>

        </section>

    );


}

export default Home;