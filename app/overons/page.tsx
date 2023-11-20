import Questions from '../_components/Questions'
import ContactLinks from '../_components/ContactLinks'
import Samenwerking from '../_components/Samenwerking'
import Services from '../_components/Services'
import OverOnsHeader from '../_components/OverOnsHeader'
import OverOnsIntro from '../_components/OverOnsIntro'

export default function page() {
  return (
    <div>
        <OverOnsHeader/>
        <div className="container">
          <OverOnsIntro/>
          <Services/>
          <Samenwerking showHeader={false}/>
          <Questions/>
          <ContactLinks/>
        </div>
    </div>
  )
}
