import type { NextApiRequest, NextApiResponse } from "next";
<<<<<<< HEAD
<<<<<<< HEAD

import { clerkClient, currentUser } from "@clerk/nextjs";
=======
>>>>>>> baa6929 (emwo)
=======

import { currentUser } from "@clerk/nextjs";
>>>>>>> 7749313 (meow)
 
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
 
const f = createUploadthing();
<<<<<<< HEAD
  
=======
 
const auth = (req: NextApiRequest, res: NextApiResponse) => ({ id: "fakeId" }); // Fake auth function
 
>>>>>>> baa6929 (emwo)
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
<<<<<<< HEAD

    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
=======
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, res }) => {
      // This code runs on your server before upload
      const user = await currentUser;
 
      // If you throw, the user will not be able to upload
      if (!user) throw new Error("Unauthorized");
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
>>>>>>> baa6929 (emwo)
 
      console.log("file url", file.url);
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;