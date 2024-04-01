import { MetadataRoute } from "next";
import * as fs from "fs";
import path from "path";

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}`
  : "http://localhost:3000";

function getFiles(dirPath: string) {
  let files = fs.readdirSync(dirPath);
  let filePaths: string[] = [];

  files.forEach((file: string) => {
    // Ignore dynamic routes
    if (file.startsWith("[") && file.endsWith("]")) {
      return;
    }

    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      filePaths = [...filePaths, ...getFiles(`${dirPath}/${file}`)];
    } else {
      if (file.startsWith("page")) {
        filePaths.push(
          path.join(dirPath.replace(/\((.*?)\)/g, "").replace("app", ""), "/"),
        );
      }
    }
  });

  return filePaths;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
  let pagesPromise;
  const filePaths = getFiles("./app");
  try {
    pagesPromise = filePaths.map((page) => ({
      url: `${baseUrl}/${page.replace("\\", "/")}`,
      lastModified: new Date().toISOString(),
    }));
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }
  return [...routesMap, ...pagesPromise];
}
