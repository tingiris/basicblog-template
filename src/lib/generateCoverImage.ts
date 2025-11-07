import { START_DATE } from "./constants";

/**
 * Calculates the day number since the start date
 */
export function getDayNumber(date: string): number {
  const startDate = new Date(START_DATE);
  const postDate = new Date(date);
  const diffTime = postDate.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays + 1); // Ensure day starts at 1
}

/**
 * Formats a date string to a long date format (e.g., "January 1, 2025")
 */
export function formatLongDate(date: string): string {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Escapes XML/SVG special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Generates an SVG cover image with black background, white text showing Day number and long date
 */
export function generateCoverImageSVG(date: string): string {
  const dayNumber = getDayNumber(date);
  const longDate = formatLongDate(date);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="black"/>
  <text x="600" y="280" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">Day ${dayNumber}</text>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" dominant-baseline="central">${escapeXml(longDate)}</text>
</svg>`;
}

