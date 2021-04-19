
function Popup(props){

    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" style={{
                padding:"1% 2% 1% 2%"
            }} onClick={()=>props.setTrigger(false)}>close  &nbsp; &#10005;</button>
                {props.children}
                <form action="/action_page.php">
                    <div className="group_element">
                        <label for="Customer_Name">Customer name :</label>
                        <input type="text" name="Customer_Name" id="Customer_Name"/>
                    </div>
                    <div className="group_element">
                        <label for="Customer_Id">Customer Id :</label>
                        <input type="text" name="Customer_Id" id="Customer_Id"/>
                    </div>
                    <div className="group_element">
                        <label for="Customer_NIC">Customer NIC :</label>
                        <input type="text" name="Customer_NIC" id="Customer_NIC"/>
                    </div>
                    <div className="group_element">
                        <label for="Customer_TelNo">Customer telephone :</label>
                        <input type="text" name="Customer_TelNo" id="Customer_TelNo"/>
                    </div>
                    <div className="group_element">                       
                        <input type="file" id="Customer_Signature" name="Customer_Signature" accept="image/*"style={{display:'none',visiblity:'none'}}></input>
                    </div>
                    <button type="submit">Add Member</button>
                </form>
            </div>
        </div>
    ):"";




}
export default Popup;