import logo from './logo.png';
import {Link} from 'react-router-dom';

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
                <Link to="/">SRCS</Link>
                <Link to="/members">Registered members</Link>    
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