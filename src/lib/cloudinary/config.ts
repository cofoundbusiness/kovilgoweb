/**
 * Cloudinary Media Delivery Helper.
 * Formats optimized image URLs with automatic format (f_auto) and quality (q_auto).
 */
export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'kovilgo',
};

export function getOptimizedImageUrl(publicId: string, width?: number, height?: number): string {
  const transforms: string[] = ['f_auto', 'q_auto'];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transforms.join(',')}/${publicId}`;
}
