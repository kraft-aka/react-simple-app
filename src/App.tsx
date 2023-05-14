import React, { useState } from 'react'
import ListGroup from './Components/ListGroup'
import Alert from './Components/Alert';
import Button from './Components/Button';

export default function App() {
  let items = ["NY", "London", "Frankfurt", "Tokyo"];
  const [alertVisible, setAlertVisible] = useState(false)
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <>
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>Hello World!</Alert>}
      <Button onClick={()=> setAlertVisible(true)}>My Button</Button>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
    </>
  )
}
