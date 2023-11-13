import {client} from "@/app/_lib/client"

import ContactLinks from "./_components/ContactLinks";
import Questions from "./_components/Questions";
import Samenwerking from "./_components/Samenwerking";
import ServicesPreview from "./_components/ServicesPreview";

async function getContactGegevens () {
  const res = await client.getEntries({content_type:'contactGegevens'});
   return res;
}

  // const client = createClient({
  //   space:  process.env.CONTENTFUL_SPACE_ID!,
  //   accessToken: process.env.CONTENTFUL_ACCES_KEY!,
  // })

// const aboutIntro = await client.getEntries({content_type:'siteTextAndImages', 'fields.slug': 'about-intro'});
// const gerechten = await client.getEntries({content_type:'gerechten'});
// const socialImage = await client.getEntries({content_type:'socialImages', 'fields.slug': 'home'});
// const algemeenImage = await client.getEntries({content_type:'socialImages', 'fields.slug': 'algemeen'});
// const menuImage = await client.getEntries({content_type:'menuImage'});

// const district = await client.getEntries({content_type:'district'});
// const diensten = await client.getEntries({content_type:'diensten'});
// const ressort = await client.getEntries({content_type:'ressort'});
// const samenWerking = await client.getEntries({content_type:'siteContent', 'fields.slug': 'samenwerking'});
// const headingHome1 = await client.getEntries({content_type:'siteContent', 'fields.slug': 'heading-home-1'});
// const headingHome2 = await client.getEntries({content_type:'siteContent', 'fields.slug': 'heading-home-2'});
// const overOnsBanner = await client.getEntries({content_type:'siteContent', 'fields.slug': 'overonsbanner'});
// const overOnsColumn = await client.getEntries({content_type:'siteContent', 'fields.slug': 'overonscolumn'});

  // const shareImages = socialImage.items[0] !== undefined ? socialImage : algemeenImage;

//   return {
//     props: {
//       contactGegevens: contactGegevens.items,
//       district: district.items,
//       ressort: ressort.items,
//       samenWerking: samenWerking.items,
//       headingHome1: headingHome1.items,
//       headingHome2: headingHome2.items,
//       overOnsBanner: overOnsBanner.items,
//       overOnsColumn: overOnsColumn.items,
      
//       revalidate: 100
//     }
//   }
// }



export default async function Home() {
  // const contactGegevens = await getContactGegevens();
  return (
    <main className=''>
      <div className="container">
        <Samenwerking/>
        <ServicesPreview/>
        <Questions/>
        <ContactLinks/>
      </div>
    </main>
  )
}
