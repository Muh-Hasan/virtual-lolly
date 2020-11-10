import React from "react"
import Lolly from "../lolly"
import gql from 'graphql-tag'
import Header from "../header"
import { Link } from 'gatsby'

export const query = gql`
  query MyQuery($lollyPath: String!) {
    lollies {
      getLollyByPath(lollyPath: $lollyPath) {
        flavorBot
        flavorMid
        flavorTop
        lollyPath
        message
        recipientName
        sendersName
      }
    }
  }
`

export default function LollyPage({ data }) {
    
  return (
    <div>
      <Header />
      <div className="freezedLollyCardWrapper">
          <Lolly
            fillLollyTop={data?.lollies.getLollyByPath?.flavourTop}
            fillLollyBottom={data?.lollies.getLollyByPath?.flavourBot}
            fillLollyMiddle={data?.lollies.getLollyByPath?.flavourMid}
          />

          <div className="freezedLollyData">
            <div className="linkWrapper">
              <h4>Share this link with your frined</h4>
              <p>{`/lollies/${data?.lollies.getLollyByPath?.lollyPath}`}</p>
            </div>
            <div className="freezedLollyCard">
              <h1>to: {data?.lollies.getLollyByPath?.recipientName}</h1>
              <p>{data?.lollies.getLollyByPath?.message}</p>
              <h3>From: {data?.lollies.getLollyByPath?.sendersName}</h3>
            </div>
            <div className="recivermessage">
              <p>
                {data?.lollies.getLollyByPath?.sendersName} made this virtual lollipop for you.
                You can <Link to="/createLolly"> make your own</Link> to send to
                a friend who deserve some sugary treat which won't rot their
                teeth...
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
