import Image from 'next/image'
import contentfulReturn from '../_types/ContentfulReturn'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export default function ServiceCard({service, row}: {service: contentfulReturn, row: boolean}) {
    const {afbeelding, beschrijving, naam} = service.fields;
  return (
    <div className={`service-card ${!row ? 'min-w': ''} `}>
        <div className="afbeelding">
            <Image src={`https:` + afbeelding.fields.file.url} 
                    width="1000"
                    height="1000"
                    alt={`${naam} image`} priority={true}/>
        </div>
        <div className="text">
            <p className="text-header">{naam}</p>
            <div className={`text-content ${!row ? 'text-clamp': ''} `}>
                {documentToReactComponents(beschrijving)}
            </div>
        </div>
    </div>
  )
}
