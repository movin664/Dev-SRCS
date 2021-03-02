import logo from './logo.png';

function NavBarTop(){

    const bankName= "bankName"

    return(
        
        <div className="navTop">

            <img src={logo} height="90px" alt="logo"/>
            <p>{bankName}</p>

        </div>


    );


}
function NavBarBottom(){
    return(
        <div className="navWrapper">
            <div className="navElements">
                <a href="/">SRCS</a>
                <a href="/">Registered members</a>    
            </div>
        </div>


    );


}

function navBar(){
    return (
        <header>
            <NavBarTop />
            <NavBarBottom />
        </header>

    );

}

export default navBar;