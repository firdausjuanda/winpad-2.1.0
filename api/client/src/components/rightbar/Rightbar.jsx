import Status from '../status/Status';
import WorkToday from '../workToday/WorkToday';
import './rightbar.css';

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <Status />
                <div className="activities">
                    <p className="title-sm">Activities log</p>
                    <img src="assets/info/i1.png" alt="" className="activitiesBanner" />
                </div>
                <WorkToday/>
            </div>
        </div>
    )
}
