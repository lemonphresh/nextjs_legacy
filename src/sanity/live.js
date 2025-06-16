import { defineLive } from "next-sanity";

import { client } from "@/sanity/client";

export const { SanityLive, sanityFetch } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }),
});
