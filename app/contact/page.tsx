import ContactHeader from "../_components/ContactHeader"
import ContactLinks from "../_components/ContactLinks"
import FormSection from "../_components/FormSection"
import type { Metadata } from 'next'

 
export const metadata: Metadata = {
  title: 'Vita Tours - Contact',
  description: 'Vita Tours - Contact',
  openGraph: {
    title: `Vita Tours- Contact`,
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitahealth.sr%2F&psig=AOvVaw0Ummre69IhdHXm4UyZCnHS&ust=1701542198029000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiev-Tw7oIDFQAAAAAdAAAAABAH",
        width: 1200,
        height: 630,
        alt: `Vita Tours Contact  image`
      }
    ],
  },
}

function index() {
  //Form section heading
  const heading: string = 'Laat Ons Weten Waarmee Wij U Van Dienst Kunnen Zijn.'
  return (
    <>
        <ContactHeader/>
        <div className="container">
          <ContactLinks contactLink={false}/>
        </div>
        <FormSection heading={heading} showSocials={true}/>
    </>
  )
}

export default index