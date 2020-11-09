import React from "react"
import Header from "../components/header"
import Lolly from "../components/Lolly"
import { navigate } from 'gatsby'

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='lolly-list'>
        <div>
          <Lolly
            fillLollyBottom="#000"
            fillLollyMiddle="#fefefe"
            fillLollyTop="#ffff"
          />
        </div>
        <div>
          <Lolly
            fillLollyBottom="#000"
            fillLollyMiddle="#fefefe"
            fillLollyTop="#ffff"
          />
        </div>
        <div>
          <Lolly
            fillLollyBottom="#000"
            fillLollyMiddle="#fefefe"
            fillLollyTop="#ffff"
          />
        </div>
        <div>
          <Lolly
            fillLollyBottom="#000"
            fillLollyMiddle="#fefefe"
            fillLollyTop="#ffff"
          />
        </div>
        <div>
          <Lolly
            fillLollyBottom="#000"
            fillLollyMiddle="#fefefe"
            fillLollyTop="#ffff"
          />
        </div>
      </div>
      <div>
        <button onClick={() => navigate('/createNew')}>Create New</button>
      </div>
    </div>
  )
}
