import { Inngest } from "inngest";

export const inngest = new Inngest({id:"promptui",
  eventKey: process.env.INNGEST_EVENT_KEY,      // 🔑 event key
  signingKey: process.env.INNGEST_SIGNING_KEY,
  environment: process.env.INNGEST_ENVIRONMENT })