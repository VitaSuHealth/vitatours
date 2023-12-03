import { NextResponse } from "next/server";
import {mailOptions, transporter} from "@/app/_lib/nodemailer"

// To handle a POST request to /api/contact
export async function POST(request) {
  const data = await request.json();
  const textEmail = `
                      Hallo, er is een nieuw bericht binnengekomen via de website. \n
                      -------------------------------------------------------------\n
                      Afkomstig van: ${data.naam} \n
                      -------------------------------------------------------------\n
                      Te bereiken op: ${data.telNummer} \n
                      Email adres: ${data.email} \n
                      -------------------------------------------------------------\n
                      Het bericht: ${data.bericht} \n
                      -------------------------------------------------------------\n
                      Hopende je voldoende te hebben geinformeerd.\n
                      Met vriendelijke groet,\n \n
                      De Vita tours website.
                    `
  const htmlText = 
                  `
                    <h3>Hallo, er is een nieuw bericht binnengekomen via de website.</h3>
                    <hr/>
                    <h3>Afkomstig van: ${data.naam}</h3>
                    <h3>Te bereiken op: ${data.telNummer}</h3>
                    <h3>Email adres: ${data.email}</h3>
                    <hr />
                    <h3>Het bericht: <br/> ${data.bericht}</h3>
                    <hr />
                    <p>Hopende je voldoende te hebben geinformeerd. <br />
                        Met vriendelijke groet,<br /><br />
                        De Vita tours website
                    </p>
                  `

try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.onderwerp,
      text: textEmail,
      html: htmlText
    })
    return NextResponse.json({succes: true}, {status: 200})
  } catch (error) {
  console.log(error)
  return NextResponse.json({message: error.message}, {status: 400})
}

}
