import {client} from "@/app/_lib/client"
import Link from "next/link";
import RessortCard from "./RessortCard";
import contentfulRessort from "../_types/Ressort";
import ContentfulRessortObject from "../_types/ContentfulRessortObject";

const getRessorts = async () => {
const result = await client.getEntries({ content_type: "ressort" });
const items = await result.items;
// console.log(items)
return items;
};

export default async function RessortCards() {
    const ressorten : ContentfulRessortObject[] = await getRessorts();
    // console.log(ressorten);

  return (
    <section id="ressorten">
      <div className="heading">
            <h1 className="section-heading">
                Ressorten
            </h1>
        </div>
        <div className="ressort-cards-container">
            {ressorten.map( ressort  => (
                <RessortCard ressort= {ressort} key={ressort.fields.slug}/>
            ))
            }
        </div>
        <div className="cta">
            <Link href={'/overons'} className="secund-btn">Alle Ressorten </Link>
        </div>

    </section>
  )
}
