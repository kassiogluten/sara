import fetch from "node-fetch";

const SENDGRID_API = process.env.SENDGRID_API;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({ messageContent }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "contato@sarahjacob.com.br",
            },
          ],
          subject: "[SITE] Formulário de contato",
        },
      ],
      from: {
        email: "sarahjacob@kassio.site",
        name: "SITE SARAH JACOB",
      },
      content: [
        {
          type: "text/html",
          value: messageContent,
        },
      ],
    }),
  });
};

export { sendEmail };
