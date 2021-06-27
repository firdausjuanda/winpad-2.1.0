import './share.css'
import { FiImage, FiSmile, FiVideo } from 'react-icons/fi'
export default function Share() {
    return (
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareHeader">
                    <img src="assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input type="text" placeholder="Apa yang ingin anda katakan." className="shareInputText" />
                </div>
                <div className="shareFooter">
                    <ul className="shareFooterItemList">
                        <li className="shareFooterItem">
                            <FiImage className="shareFooterItemIcon"/>
                            <span className="shareFooterItemText">Foto</span>
                        </li>
                        <li className="shareFooterItem">
                            <FiVideo className="shareFooterItemIcon"/>
                            <span className="shareFooterItemText">Video</span>
                        </li>
                        <li className="shareFooterItem">
                            <FiSmile className="shareFooterItemIcon"/>
                            <span className="shareFooterItemText">Reaction</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
