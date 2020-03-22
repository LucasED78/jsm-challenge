export default {
  concatInformations: (info, separator = ' ') => {
   return info.reduce((prev, curr) => `${prev}${separator} ${curr}`);
  }
}