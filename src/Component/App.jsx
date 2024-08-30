import React , { useState } from 'react'
import Header from './Header'
import Interface from './Interface'
import Footer from './Footer'
import About from './About'
import Voltitle from './volTitle'
import Volunteering from './Volunteering'
import ExpTitle from './expTitle'
import Experience from './Experience'
import {volunteeringList , experienceList } from './cardsLists'



function App() {

  const [darkMode , setDarkMode] = useState(false);


  return (
    <div>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Interface darkMode={darkMode}/>
        <About darkMode={darkMode} />
        <Voltitle darkMode={darkMode} />
        {volunteeringList.map(volunteer => craeteVolCard({ ...volunteer, darkMode }))}
        <ExpTitle darkMode={darkMode}/>
        {experienceList.map(experience => craeteExpCard({ ...experience, darkMode }))}
        <Footer darkMode={darkMode} />
    </div>
  )
}



function craeteVolCard(props){
  return(
    <Volunteering 
      key={props.id}
      title={props.title}
      img1={props.img1}
      img2={props.img2}
      img3={props.img3}
      content={props.content}
      btnTarget={props.btnTarget}
      darkMode={props.darkMode}
    />
  )
}

function craeteExpCard(props){
  return(
    <Experience 
      key={props.id}
      title={props.title}
      img1={props.img1}
      img2={props.img2}
      img3={props.img3}
      content={props.content}
      btnTarget={props.btnTarget}
      darkMode={props.darkMode}
    />
  )
}


export default App

