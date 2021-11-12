export const titleRegex = (path) => {
  const fullPath = path.pathname
  const removeMovie = /\/movie\//
  const cutPath = fullPath.replace(removeMovie, '')
  const cleanupTitle = /%20/g
  const cleanTitle = cutPath.replace(cleanupTitle, ' ')
  return cleanTitle;
}