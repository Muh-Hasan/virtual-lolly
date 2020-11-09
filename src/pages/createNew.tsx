import React, { useState } from "react"
import Header from "../components/header"
import Lolly from "../components/Lolly"
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const createLollyMutation = gql`
    mutation createLolly($recipientName: String!, $message: String!, $senderName: String!, $flavourTop: String!, $flavourMiddle: String!,$flavourBottom: String!) {
        createLolly(recipientName: $recipientName, message: $message, senderName: $senderName, flavourTop: $flavourTop, flavourMiddle: $flavourMiddle,flavourBottom: $flavourBottom) {
            message
            path
        }
    }
`
export default function CreateNew() {
  const [createLolly] = useMutation(createLollyMutation)

  const [flavourTop, setFlavourTop] = useState("#ef0078")
  const [flavourMiddle, setFlavourMiddle] = useState("#ff8d00")
  const [flavourEnd, setFlavourEnd] = useState("#dd0074")
  const [recipentName , setRecipentName] = useState('')
  const [message , setMessage] = useState('')
  const [senderName , setSenderName] = useState('')
  
  const handleSubmit = async () => {
    const result = await createLolly({
      variables: {
        recipentName: recipentName,
        message: message,
        senderName: senderName,
        flavourTop: flavourTop,
        flavourBottom: flavourEnd,
        flavourMiddle: flavourMiddle,
      },
    })
    console.log(result)
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
            <input
              type="color"
              name="top"
              value={flavourTop}
              onChange={e => setFlavourTop(e.target.value)}
            />
          </label>
          <label>
            <input
              type="color"
              name="middle"
              value={flavourMiddle}
              onChange={e => setFlavourMiddle(e.target.value)}
            />
          </label>
          <label>
            <input
              type="color"
              name="bottom"
              value={flavourEnd}
              onChange={e => setFlavourEnd(e.target.value)}
            />
          </label>
        </div>
        <div className="form-main">
          <label>To</label>
          <input type="text" required onChange={(e) => setRecipentName(e.target.value)} />
          <label>Message</label>
          <textarea rows={15} columns="30" required onChange={(e) => setMessage(e.target.value)}/>
          <label>From</label>
          <input type="text" required onChange={(e) => setSenderName(e.target.value)} />
          <div>
            <button onClick={handleSubmit}>create</button>
          </div>
        </div>
      </div>
    </div>
  )
}
