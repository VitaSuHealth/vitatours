import ContactHeader from "../_components/ContactHeader"
import ContactLinks from "../_components/ContactLinks"
import FormSection from "../_components/FormSection"
function index() {
  //Form section heading
  const heading: string = 'Laat Ons Weten Waarmee Wij U Van Dienst Kunnen Zijn.'
  return (
    <>
        <ContactHeader/>
        <div className="container">
          <ContactLinks/>
        </div>
        <FormSection heading={heading} showSocials={true}/>
    </>
  )
}

export default index