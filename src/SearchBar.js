function SearchBar(){

    return(

        <div className="search-container">
            <form action="/action_page.php">
                 <input type="number" placeholder="Enter customer ID to search" name="search"/>
                    <button type="submit" >
                <i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>

    );
    
}
export default SearchBar;