import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

function Main() {
  const { search, recentPrompt, loading, data, setInput, input } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>AI Gemini</p>
        <img src={assets.user_icon} alt="User icon" />
      </div>
      <div className="main-container">
        {recentPrompt && (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : data && (
                <p dangerouslySetInnerHTML={{ __html: data }}></p>
              )}
            </div>
          </div>
        )}

        {!recentPrompt && (
          <section>
            <div className="greet">
              <p>
                <span>Hello, Derek</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places for vacation</p>
                <img src={assets.compass_icon} alt="Compass icon" />
              </div>
              <div className="card">
                <p>Explain Artificial Intelligence</p>
                <img src={assets.bulb_icon} alt="Compass icon" />
              </div>
              <div className="card">
                <p>Explain the basics of Project Management?</p>
                <img src={assets.message_icon} alt="Compass icon" />
              </div>
              <div className="card">
                <p>Improve the following code.</p>
                <img src={assets.code_icon} alt="Compass icon" />
              </div>
            </div>
          </section>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery icon" />
              <img src={assets.mic_icon} alt="mic icon" />
              <img
                onClick={() => search()}
                src={assets.send_icon}
                alt="send icon"
              />
            </div>
          </div>
          <p className="bottom-info">
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
