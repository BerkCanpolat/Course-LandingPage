import './App.css'
import Category from './components/category/Category'
import Courses from './components/courses/Courses'
import FeatureSection from './components/feature/FeatureSection'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Courses/>
    <Category/>
    <FeatureSection/>
    </>
  )
}

export default App