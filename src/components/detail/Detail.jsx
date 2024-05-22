import React from 'react'
import './Detail.css'



const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Yasemin Licina</h2>
        <p>User description</p>
      </div>
      <div className="info">
        <option value="">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </option>

        <option value="">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </option>
        <option value="">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./birdie.jpg" alt="" />
                <span>Photo found by Hamit Licina</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="./birdie.jpg" alt="" />
                <span>Photo found by Hamit Licina</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="./birdie.jpg" alt="" />
                <span>Photo found by Hamit Licina</span>
              </div>
              <img src="./download.png" alt="" className='icon' />
            </div>
          </div>
        </option>

        <option value="">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </option>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail