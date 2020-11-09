import React from "react"
import Header from "../components/header"
import Lolly from "../components/Lolly"

export default function CreateNew() {
  return (
    <div className="container">
      <Header />
      <div className="form-flex">
        <div>
          <Lolly
            fillLollyBottom="#000"
            fillLollyMiddle="#fefefe"
            fillLollyTop="#ffff"
          />
        </div>
        <div className="colorContainer">
          <label>
            <input type="color" name="top" value="#fff" />
          </label>
          <label>
            <input type="color" name="middle" value="#fff" />
          </label>
          <label>
            <input type="color" name="bottom" value="#000" />
          </label>
        </div>
        <div className='form-main'>
            <label>
                To
            </label>
                <input type='text' />
            <label>
                Message
            </label>
                <textarea rows= {15} columns='30' />
            <label>
                From
            </label>
                <input type='text' />
        </div>
      </div>
    </div>
  )
}
