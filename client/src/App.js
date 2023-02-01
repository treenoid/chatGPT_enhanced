import './App.css';
import './normal.css';
import { useState } from 'react';

function App() {

const [input, setInput] = useState("");
const [chatLog, setChatLog] = useState([{
  user: "gpt",
  message: "henLo, what is thine request?"
},{
  user: "me",
  message: "...䷀"
}]);

  async function handleSubmit(e){
    e.preventDefault();
    setChatLog([...chatLog, { user: 'me', message: `${input}`}])
    setInput("");
    const response = await fetch ("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message:chatLog.map((message) => message.message).join("")
      })
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="App">
      <aside className="sidemenu">
      <div className="side-menu-button">
        <span>𝌹</span>
        New Chat
      </div>
    </aside>
    <section className="chatbox">
    <div class="chat-log">
     {chatLog.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
  
</div>

<div className="chat-input-holder">
  <form onSubmit={handleSubmit}>
      <input
      rows="1"
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      className="chat-input-textarea">
        

        
      </input>
      </form>
    </div>
    <button class="send-button">䷀</button>        
    </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className= {`chat-message ${message.user === "gpt" && "chatgpt"}`}>
          <div className="chat-message-center">
            <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
              {message.user=== "gpt" && <div class="chatgpt-symbol">◎</div>}
              <div className={`avatar ${message.user === "me" && "me"}`}>
              {message.user=== "me" && <div class="me-symbol">∥</div>}
              </div>
            </div>
            <div className="message">
              {message.message}
            </div>
          </div>
        </div>
  )
}
export default App;
