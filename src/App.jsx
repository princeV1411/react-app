import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PrimaryButton from './components/PrimaryButton'
import CircleAvatar from './components/CircleAvatar'
import Cards from './components/Cards'
import SideMenu from './components/SideMenu'

import Profile from "./pages/Profile"
import './App.css'

function App() {
  const data =[
    {
      resourcesName: "Notes",
      resourcesDeccription: "Subject wise notes prepared by topper and seniors",
      resourcesValue: "2,250"
    },
    {
      resourcesName: "Notes",
      resourcesDeccription: "Subject wise notes prepared by topper and seniors",
      resourcesValue: "2,250"
    },
    {
      resourcesName: "Notes",
      resourcesDeccription: "Subject wise notes prepared by topper and seniors",
      resourcesValue: "2,250"
    },
    {
      resourcesName: "Notes",
      resourcesDeccription: "Subject wise notes prepared by topper and seniors",
      resourcesValue: "2,250"
    }
  ]
  return (
    <>
      <Navbar/>
      <div className="content">
         <SideMenu/>
        <HeroSection
          title={
            <>
              Everything<br />
              you need,<br />
            </>
          }
          highlight="all in one place."
          description="access syllabus,notes,code & previous year paper -your complete academic companion."
        />
        <PrimaryButton/>
        <CircleAvatar/>
      </div>
      
      <div className="boxRight" id="page2">
        <HeroSection
          title={
            <>
              Explore Resources<br />
            </>
          }
          highlight="Built for your success."
          description="Lorem ipsum dolor, sit amet  Non, aliquam! Cumque accusantium aperia"
        />
        <div className="box">
          {
            data.map((props, index)=>(
              <Cards 
                key={index}
                resourcesName={props.resourcesName}
                resourcesDeccription={props.resourcesDeccription}
                resourcesValue={props.resourcesValue}
              />
            ))
          }
  
        </div>
          <div className="xyz">
              <div><img src="#" alt="img"/></div>
              <h2>Your journey to acadmic <br/><span>Exellence </span> start here</h2>
              <div><img src="#" alt="img"/>̥</div>
          </div>
      </div>

      <section id="page3">
          <h1>contect</h1>
      </section>
    </>
  )
}
export default App
