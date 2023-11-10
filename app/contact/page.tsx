import Link from "next/link"
import Image from "next/image"
import ContactHeader from "../_components/ContactHeader"
import ContactLinks from "../_components/ContactLinks"
import Questions from "../_components/Questions"
import FormSection from "../_components/FormSection"
function index() {
  return (
    <>
        <ContactHeader/>
        <div className="container">
          <Questions/>
          <ContactLinks/>
        </div>
        <FormSection/>
    </>
  )
}

export default index