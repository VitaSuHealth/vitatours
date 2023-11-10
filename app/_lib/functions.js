
export const getContactGegevens  = async () =>  {
    const res = await client.getEntries({content_type:'contactGegevens'});
    const items = res.items;
    const adres  = items.filter(item => item.fields.slug == 'adres');
  //   setAdress(items);
    console.log(adres);

     return res;
}