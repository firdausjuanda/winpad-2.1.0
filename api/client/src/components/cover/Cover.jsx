import './cover.css'

export default function Cover() {
    return (
        <div className="cover">
            <div className="coverWrapper">
                <img src="assets/post/p2.jpeg" alt="" className="coverPicture" />
                <img src="assets/person/2.jpeg" alt="" className="profilePicture" />
                <div className="coverIdentity">
                    <div className="coverUsername">Firdaus Juanda</div>
                    <div className="coverCompanyName">Process Engineer at Wilmar Nabati Indonesia Padang</div>
                </div>
            </div>
        </div>
    )
}
