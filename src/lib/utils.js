export const formatDate = (date) => {
  const dateObject = new Date(date)
  const formattedDate = `${(dateObject.getMonth() + 1).toString().padStart(2, '0')}.${dateObject.getDate().toString().padStart(2, '0')}.${dateObject.getFullYear()}`;
  return formattedDate
}

export const checkIsImage = (url) => {
  const imageExtensions = ['.gif', '.jpg', '.jpeg', '.png', '.tiff', '.webp', '.svg', '.avif'] // you can add more extensions

  let isImage

  imageExtensions.map((e) => {
    if (url.includes(e)) return isImage = true;
  })

  return isImage

}

export const checkIsVideo = (url) => {

  const videoExtensions = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mov', '.mp4'] //you can add more extensions

  let isVideo = false
  
  videoExtensions.map((e) => {
    if (url.toLowerCase().includes(e)) return isVideo = true
  })

  return isVideo
}