import React from "react"
import Header from "./header/header"
import Main from "./main/main"
import ProjectCont from "./ProjectCont/projectCont"
import StaffCont from "./StaffCont/staffCont"
import Footer from "./components/footer/footer"
import './App.scss'
import ContactBlock from "./components/Contact/input-block"



function App() {
  return (
    <div>
      <Header />
      <div className="G-container">
        <Main />
        <ProjectCont />
        <StaffCont />
        <ContactBlock />
      </div>
      <Footer />
    </div>
  )
}

export default App



