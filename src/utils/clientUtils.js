export const filterSpecial = (lat, lon) => {  
  return (lat >= -46.361899 && lat <= -34.276938 || lon >= -2.196998 && lon <= -15.411580) 
   || (lat >= -52.997614 && lat <= -44.428305 || lon >= -19.766959 && lon <= -23.966413)
}