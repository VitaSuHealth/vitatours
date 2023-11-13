"use client"

import { createContext, useState, useEffect } from "react";
import { client } from "../_lib/client";

export const ContentContext = createContext({});

export default function ContentProvider({ children }) {
  const [contactGegevens, setContactgegevens] = useState([]);
  const [adres, setAdres] = useState();
  const [telNummer, setTelNummer] = useState();
  const [openingstijden, setOpeningstijden] = useState();
  const [tikTok, setTikTok] = useState();
  const [instagram, setInstagram] = useState();
  const [facebook, setFacebook] = useState();
  const [email, setEmail] = useState();

  const getContactGegevens = async () => {
    const result = await client.getEntries({ content_type: "contactGegevens" });
    const items = await result.items;
    // console.log(items)
    setContactgegevens(items);
    return items;
  };

  const filterContactgegevens = () => {
    contactGegevens.forEach((gegeven) => {
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
    filterContactgegevens(contactGegevens);
  }, [contactGegevens]);

  return (
    <ContentContext.Provider value={{adres, telNummer, openingstijden, tikTok, instagram, facebook, email}}>{children}</ContentContext.Provider>
  );
}
