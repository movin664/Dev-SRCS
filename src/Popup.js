
function Popup(props){

    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" style={{
                padding:"1% 2% 1% 2%"
            }} onClick={()=>props.setTrigger(false)}>close  &nbsp; &#10005;</button>
                {props.children}
            </div>
        </div>
    ):"";




}
export default Popup;