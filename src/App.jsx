import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Journey from './components/Journey'
import GithubCTA from './components/GithubCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Journey />
        <GithubCTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
