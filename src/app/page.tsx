import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { defineQuery } from "next-sanity";

import LeadIn from "@/components/molecules/LeadIn/LeadIn";
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";

const PAGE_QUERY = defineQuery(`*[
  _type == "community"
  && defined(slug.current)
] | order(name asc){_id, name, bgColor, logo, slug}`);

const { dataset, projectId } = client.config();

const urlFor = (source: string) =>
  projectId && dataset ? imageUrlBuilder({ dataset, projectId }).image(source) : null;

interface Community {
  _id: string;
  name: string;
  bgColor?: string;
  logo?: string;
  slug: {
    current: string;
  };
}

export default async function IndexPage() {
  const { data }: { data: Community[] } = await sanityFetch({
    query: PAGE_QUERY,
  });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col gap-12">
      <LeadIn title="Community List" />
      <div className="px-4 sm:px-16">
        <h5 className="text-xl text-gray-500">{data.length} Results</h5>
        <hr className="my-8 text-gray-300" />
        <ul className="grid grid-cols-1 gap-6 mb-12">
          {data.map((comm) => (
            <li
              key={comm._id}
              className={`flex shadow-md bg-gray-50 hover:bg-gray-200 min-w-full md:min-w-150 mx-auto flex-row items-center rounded-lg`}
            >
              <Link
                className="flex flex-row p-4 items-center"
                href={`/community/${comm?.slug?.current}`}
              >
                {comm.logo ? (
                  <img
                    alt={comm.name || "Logo"}
                    className="aspect-square mr-4 p-1 overflow-hidden rounded-lg"
                    height={75}
                    src={urlFor(comm.logo)?.width(75).height(75).url() || ""}
                    style={{ backgroundColor: comm.bgColor }}
                    width={75}
                  />
                ) : (
                  <div
                    className="w-[75px] h-[75px] mr-4 p-1 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: comm.bgColor }}
                  >
                    {comm.name
                      ?.split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                )}

                <h2 className="text-xl font-semibold">{comm?.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
