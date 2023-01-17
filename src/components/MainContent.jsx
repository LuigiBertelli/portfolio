
import AboutMe from './AboutMe'
import Projects from './Projects'
import Technologies from './Technologies'

import '../styles/components/maincontent.sass'

const MainContent = ({lang}) => {
  return (
    <div id="main-content">
      <AboutMe lang={lang} />
      <Technologies lang={lang} />
      <Projects lang={lang} />
    </div>
  )
}

export default MainContent