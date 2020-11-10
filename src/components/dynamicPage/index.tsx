import React from "react"
import Lolly from "../lolly"
import gql from 'graphql-tag'
import Header from "../header"
import { useQuery } from "@apollo/client"

export const query = gql`
  query MyQuery($lollyPath: String!) {
    LOLLIES {
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

export default function LollyPage() {
    const { data } = useQuery(query)
    console.log(data);
    
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            your link
        </div>
        <div>
            {/* <Lolly/> */}
        </div>
    </div>
  )
}
