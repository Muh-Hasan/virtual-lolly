import React, { useRef, useState } from "react"
import Header from "../components/header"
import Lolly from "../components/Lolly"

export default function CreateNew() {
    
    const [flavourTop , setFlavourTop] = useState('#ef0078')
    const [flavourMiddle , setFlavourMiddle] = useState('#ff8d00')
    const [flavourEnd , setFlavourEnd] = useState('#dd0074')
    const toRef = useRef()
    const messageRef = useRef()
    const fromRef = useRef()
    const handleSubmit = () => {
        console.log(toRef.current.value);
        console.log(messageRef.current.value);
        console.log(fromRef.current.value);
    }
    
    return (
    <div className="container">
      <Header />
      <div className="form-flex">
        <div>
          <Lolly
            fillLollyBottom={flavourEnd}
            fillLollyMiddle={flavourMiddle}
            fillLollyTop={flavourTop}
          />
        </div>
        <div className="colorContainer">
          <label>
            <input type="color" name="top" value={flavourTop} onChange={(e) => setFlavourTop(e.target.value)} />
          </label>
          <label>
            <input type="color" name="middle" value={flavourMiddle} onChange={(e) => setFlavourMiddle(e.target.value)}/>
          </label>
          <label>
            <input type="color" name="bottom" value={flavourEnd} onChange={(e) => setFlavourEnd(e.target.value)}/>
          </label>
        </div>
        <div className='form-main'>
            <label>
                To
            </label>
                <input type='text' ref={toRef}/>
            <label>
                Message
            </label>
                <textarea rows= {15} columns='30' ref={messageRef} />
            <label>
                From
            </label>
                <input type='text' ref={fromRef} />
        <div>
            <button onClick={handleSubmit}>create</button>
        </div>
        </div>
      </div>
    </div>
  )
}
