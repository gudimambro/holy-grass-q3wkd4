import { getServerSession } from "next-auth";
import { getGalleryList } from "../services/gallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";

// const getPosts = async () => {
//   try {
//     const res = await axios.get(
//       "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
//     );

//     return res.data;
//   } catch (error) {}
// };

const page = async () => {
  // const session = await getServerSession(authOptions);
  // console.log("session", session);

  const posts = await getGalleryList({ limit: 52, offset: 0 });
  return (
    <main className="mt-5 container mx-auto">
      {/* <pre>session: {JSON.stringify(session)}</pre> */}
      <div className="my-5 text-3xl font-bold text-center">Photo Gallery</div>
      <div className="grid grid-cols-fluid">
        {posts?.photos.map((item, index) => {
          return (
            <div
              key={index}
              className="m-5 border rounded-md overflow-hidden transition duration-150 hover:scale-110"
            >
              <Link href={`/${item.id}`}>
                <div>
                  <Image
                    className="w-full"
                    src={item.url}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100"
                  />
                  <div className="p-4">
                    <div className="text-lg font-semibold truncate">
                      {item.title}
                    </div>
                    <div className="text-sm truncate">{item.description}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
