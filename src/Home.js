import ToolContainer from './tool-container';

function Title(){
    return(

        <div className="title">
            <h1 style={{
                fontWeight:400
            }}>SRCS TOOL</h1>

        </div>

    );

}

function Buttons(){
    return(
        <div className="compareANDIdentify">
            <button className="btnCompare"> Compare signatures</button>
            <button className="btnIdentify">Identify signature</button>
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