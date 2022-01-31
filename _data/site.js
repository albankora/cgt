module.exports = {
  baseURL: process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:8080' : "https://cityguide.tips",
  isProd: process.env.ELEVENTY_ENV === 'production' ? true : false,
}