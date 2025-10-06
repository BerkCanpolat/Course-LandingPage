import './App.css'
import Category from './components/category/Category'
import Courses from './components/courses/Courses'
import FeatureSection from './components/feature/FeatureSection'
import GiftCardSection from './components/giftCardSection/GiftCardSection'
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
    <GiftCardSection/>
    </>
  )
}

export default App