// import { Resend } from "resend";

// const resend = new Resend(process.env.AUTH_RESEND_KEY);

// export async function sendEmail(to: string, subject: string, reactHTML: any) {
//   const { data, error } = await resend.emails.send({
//     from: "AmitInvoice <info@resend.amitprajapati.co.in>",
//     to: to,
//     subject: subject,
//     react: reactHTML,
//   });

//   if(error){
//     return error
//   }
//   return data
// }

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, subject: string, reactHTML: any) {
  const { data, error } = await resend.emails.send({
    from: "RKInvoice <onboarding@resend.dev>",
    to,
    subject,
    react: reactHTML,
  });

  if (error) {
    console.error(error);
    return error;
  }

  return data;
}
