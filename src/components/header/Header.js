import { faCampground, faCaravan, faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                <FontAwesomeIcon icon={faCampground} />
                <span>Tents</span>
                </div>
            <div className="headerListItem">
                 <FontAwesomeIcon icon={faHouseChimney} />
                <span>Cabins</span>
            </div>
                <div className="headerListItem">
                 <FontAwesomeIcon icon={faCaravan} />
                <span>RVs</span>
            </div>
        </div>
        <h1 className="headerTitle">A modern camping experience. Awesome.</h1>
        <p className="headerDesc">
            Book your next level camping trip now!
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                {/* <FontAwesomeIcon icon {faBed} className="headerIcon" /> */}
                <input type="text" 
                placeholder="Where are you staying?"
                className="headerSearchInput"
                />
            </div>
            <div className="headerSearchItem">
                {/* <FontAwesomeIcon icon {faCalendarDays} className="headerIcon" /> */}
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(
                    date[0].startDate,
                    "MM/dd/yyy"
                    )} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
              {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>} 
            </div>
            <div className="headerSearchItem">
                {/* <FontAwesomeIcon icon {faPerson} className="headerIcon" /> */}
                <span className="headerSearchText">2 adults 2 children</span> 
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
            </div>
        </div>
    </div>
</div>
    
    );
};

export default Header