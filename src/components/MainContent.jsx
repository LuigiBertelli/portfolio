
import AboutMe from './AboutMe'
import Projects from './Projects'
import Technologies from './Technologies'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <div id="main-content">
      <AboutMe/>
      <Technologies/>
      <Projects/>
    </div>
  )
}

export default MainContent