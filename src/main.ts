import { Snake } from "tgsnake";

async function init() {
  const apiId = process.env.API_ID!;
  const apiHash = process.env.API_HASH!;

  const client = new Snake({
    apiId: +apiId,
    apiHash,
    logLevel: "info",
    clientOptions: {},
    login: {
      forceDotSession: false,
    },
    experimental: { alwaysSync: true },
  });

  client.on("message", (ctx) => {
    console.log({
      messageId: ctx.message?.id,
      messageText: ctx.message?.text,
      messageDate: ctx.message.date?.toLocaleString(),
      chatId: ctx.message.chat?.id?.toString(),
      chatTitle: ctx.message.chat?.title,
      userFirstName: ctx.message?.from?.firstname,
    });
  });

  client.run();
}

init();
