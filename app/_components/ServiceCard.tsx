import Image from 'next/image'
import contentfulReturn from '../_types/ContentfulReturn'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from "@contentful/rich-text-types";


export default function ServiceCard({service}: {service: contentfulReturn}) {
    const {afbeelding, beschrijving, naam} = service.fields;
  return (
    <div className='service-card'>
        <div className="afbeelding">
            <Image src={`https:` + afbeelding.fields.file.url} 
                    width="1000"
                    height="1000"
                    alt={`${naam} image`} priority={true}/>
        </div>
        <div className="text">
            <p className="text-header">{naam}</p>
            <div className="text-content">
                {documentToReactComponents(beschrijving)}
            </div>
        </div>
    </div>
  )
}
