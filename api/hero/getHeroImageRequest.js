export default async function getHeroImagesRequest() {
  try {
    const response = await fetch('http://localhost:3005/hero-images', { method: 'get' });
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
