"use client"

import { createContext, useState, useEffect } from "react";
import { client } from "../_lib/client";
import ContactGegeven from "../_types/ContactGegeven";
import ContentfulContactObject from "../_types/ContentfulContact";

export interface ContentContextInterface {
  adres: ContactGegeven, 
  email: ContactGegeven, 
  instagram: ContactGegeven, 
  tikTok: ContactGegeven, 
  facebook: ContactGegeven, 
  openingstijden: ContactGegeven, 
  telNummer: ContactGegeven, 

}

export const ContentContext = createContext<Partial<ContentContextInterface>>({});

export default function ContentProvider({ children }: {children: React.ReactNode}) {
  const [contactGegevens, setContactgegevens] = useState([]);
  const [adres, setAdres] = useState<ContactGegeven>();
  const [telNummer, setTelNummer] = useState<ContactGegeven>();
  const [openingstijden, setOpeningstijden] = useState<ContactGegeven>();
  const [tikTok, setTikTok] = useState<ContactGegeven>();
  const [instagram, setInstagram] = useState<ContactGegeven>();
  const [facebook, setFacebook] = useState<ContactGegeven>();
  const [email, setEmail] = useState<ContactGegeven>();

  const getContactGegevens = async () => {
    const result = await client.getEntries({ content_type: "contactGegevens" });
    const items = await result.items;
    // console.log(items)
    setContactgegevens(items);
    return items;
  };

  const filterContactgegevens = () => {
    contactGegevens.forEach((gegeven : ContentfulContactObject) => {
      switch (gegeven.fields.slug) {
        case "adres":
          setAdres(gegeven.fields);
          break;
        case "telefoonnummer":
          setTelNummer(gegeven.fields);
          break;
        case "openingstijden":
          setOpeningstijden(gegeven.fields);
          break;
        case "tiktok":
          setTikTok(gegeven.fields);
          break;
        case "instagram":
          setInstagram(gegeven.fields);
          break;
        case "facebook":
          setFacebook(gegeven.fields);
          break;
        case "email":
          setEmail(gegeven.fields);
          break;
        default:
          console.log(gegeven.fields);
      }
    });
  };

  useEffect(() => {
    getContactGegevens();
  }, []);

  useEffect(() => {
    filterContactgegevens();
  }, [contactGegevens]);

  return (
    <ContentContext.Provider value={{adres, telNummer, openingstijden, tikTok, instagram, facebook, email}}>{children}</ContentContext.Provider>
  );
}
