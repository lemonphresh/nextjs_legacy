import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-11-01",
  dataset: "production",
  projectId: "i5b5f1yn",
  useCdn: false,
});
