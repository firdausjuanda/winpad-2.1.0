import { FiBell, FiMessageCircle, FiSearch, FiUser } from 'react-icons/fi';

import './topbar.css';

export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">
                    Winpad
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <FiSearch className="searchIcon"/>
                    <input placeholder="Search everything you want" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Workline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <FiUser/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <FiMessageCircle/>
                        <span className="topbarIconBadge">9+</span>
                    </div>
                    <div className="topbarIconItem">
                        <FiBell/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="assets/person/1.jpeg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}