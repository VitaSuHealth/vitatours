import Questions from '../_components/Questions'
import ContactLinks from '../_components/ContactLinks'
import Samenwerking from '../_components/Samenwerking'
import Services from '../_components/Services'
import OverOnsHeader from '../_components/OverOnsHeader'
import OverOnsIntro from '../_components/OverOnsIntro'

export default function page() {

    //Footer Questions
    const q1: string = 'Heb je een vraag over wat wij aanbieden?'
    const q2: string = 'Of'
    const q3: string = 'Wilt u nog meer info over de ressorten?'
    const q4: string = 'Aarzel niet en neem contact op met ons.'
    
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
