import Questions from '../_components/Questions'
import ContactLinks from '../_components/ContactLinks'
import Samenwerking from '../_components/Samenwerking'
import Services from '../_components/Services'
import OverOnsHeader from '../_components/OverOnsHeader'
import OverOnsIntro from '../_components/OverOnsIntro'
import type { Metadata } from 'next'


 
export const metadata: Metadata = {
  title: 'Vita Tours - Over Ons',
  description: 'Vita Tours - Over Ons',
  openGraph: {
    title: `Vita Tours- Over Ons`,
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitahealth.sr%2F&psig=AOvVaw0Ummre69IhdHXm4UyZCnHS&ust=1701542198029000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiev-Tw7oIDFQAAAAAdAAAAABAH",
        width: 1200,
        height: 630,
        alt: `Vita Tours About  image`
      }
    ],
  },
}

export default function page() {

    //Footer Questions
    const q1: string = 'Heb je een vraag over wat wij aanbieden?'
    const q2: string = 'Of'
    const q3: string = 'Wilt u nog meer info over de ressorten?'
    const q4: string = 'Aarzel niet en neem contact op met ons.'

    //Test
    
  return (
    <div>
        <OverOnsHeader/>
        <div className="container">  
          <OverOnsIntro/>
          <Services/>
          <Samenwerking showHeader={false}/>
          <Questions q1={q1} q2={q2} q3={q3} q4={q4}/>
          <ContactLinks/>
        </div>
    </div>
  )
}
