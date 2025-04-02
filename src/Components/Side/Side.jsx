
import Profile from "../Profile/Profile";
import profilePic from "../../assets/Unknown_person.jpg";
import "../../styles/Side.css";

export default function Side() {

    return (
        <aside>
            <div className="side-header--wrapper">
                <h2 className="side-title">Leads2GO</h2>
                <button className="side-header-btn">=</button>
            </div>            
            <Profile src={profilePic} />
            {/* create ul list under (icon of house and HOME word) the li
            items should be My View, My Leads, My Team */}
            {/* My View should display Agents information, with Tile that 
            are clickable (Leads, Add Lead )
                My Leads should display list all leads inside table name, email,
                number, address with plus Icon somewhere to open add leads form,
                leads should be attached to a agent
                
                My Team should display members of team and number of leads they have*/}  
        </aside>
    )
}