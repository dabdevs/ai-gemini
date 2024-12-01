import './sidebar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';

function Sidebar() {
    const [extended, setExtended] = useState(false);
    const {prompts} = useContext(Context)
    console.log('prompts', prompts)

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prevExtended => !prevExtended)} className='menu' src={assets.menu_icon} alt="Menu icon" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="New chat" />
                    {extended && <p>New Chat</p>}
                </div>

                {
                    extended &&
                    <div className="recent">
                        {prompts.length > 0 && <p className="recent-title">Recent</p>}

                        {prompts?.map((prompt, i) => (
                            <div className="recent-entry" key={i}>
                                <img src={assets.message_icon} alt="Message Icon" />
                                <p>{prompt}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Question icon" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History icon" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Setting icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
