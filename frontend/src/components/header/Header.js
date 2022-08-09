import { faCampground, faCaravan, faHouseChimney, faPerson, faBed, faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
          adult:1,
          children:0
      });

      const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] +1 : options[name] -1,
            };
        });
    };

    return (
            <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem">
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
        { type !== "list" &&
            <>
            <h1 className="headerTitle">A modern camping experience. Awesome.</h1>
        <p className="headerDesc">
            Book your next level camping trip now!
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" 
                placeholder="Where are you staying?"
                className="headerSearchInput"
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
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
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.children} children`}</span>
                {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                        <button 
                        disabled={options.adult <= 1}
                        className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                    </div>
                    <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button 
                    disabled={options.children <= 0 }
                    className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                    </div>
                    </div>
                    </div>}
                    </div>
            <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
            </div>
        </div></>}
    </div>
</div>
    
    );
};

export default Header