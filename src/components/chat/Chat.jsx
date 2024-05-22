import React, { useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react'



const Chat = () => {

  const [open, setOpen] = useState(false)

  const [text, setText] = useState("")

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }

  return (
    <div className='chat' >
      <div className="top">
        <div className="user">
          <img src='./avatar.png' alt='' />
          <div className="texts">
            <span>Yasemin Licina</span>
            <p>There is nobody better than you!!!</p>
          </div>
        </div>
        <div className="icons">
          <img src='./phone.png' alt='' />
          <img src='./video.png' alt='' />
          <img src='./info.png' alt='' />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Baby I love you so much! More than ever...</p>
            <span>1 min Ago</span>
          </div>
        </div>
        
        <div className="message own">
          <div className="texts">
            <p>Baby I love you so much! More than ever...</p>
            <span>1 min Ago</span>
          </div>
        </div>
        
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Baby I love you so much! More than ever...</p>
            <span>1 min Ago</span>
          </div>
        </div>
        
        <div className="message own">
          <div className="texts">
            <p>Baby I love you so much! More than ever...</p>
            <span>1 min Ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./birdie.jpg" alt="" />
          <div className="texts">
            <p>Baby I love you so much! More than ever...</p>
            <span>1 min Ago</span>
          </div>
        </div>
        
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message" value={text} onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat