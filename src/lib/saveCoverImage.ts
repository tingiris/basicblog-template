import fs from "fs";
import { join } from "path";
import { generateCoverImageSVG } from "./generateCoverImage";

/**
 * Saves a cover image SVG for a post if it doesn't already exist
 * Returns the path to the cover image
 */
export function saveCoverImageIfNeeded(slug: string, date: string, existingCoverImage?: string): string {
  // If cover image already exists, return it
  if (existingCoverImage) {
    return existingCoverImage;
  }

  // Generate the cover image path
  const coverImagePath = `/assets/blog/${slug}/cover.svg`;
  const publicPath = join(process.cwd(), "public", "assets", "blog", slug);
  const filePath = join(publicPath, "cover.svg");

  // Create directory if it doesn't exist
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }

  // Generate and save the SVG
  const svgContent = generateCoverImageSVG(date);
  fs.writeFileSync(filePath, svgContent, "utf8");

  return coverImagePath;
}

