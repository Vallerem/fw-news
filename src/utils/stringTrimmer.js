export const trimContent = (content, words = 10) => {
  let wordsArray = content.split(" ");
  if (wordsArray.length >= 6) {
    return wordsArray.slice(0, words).join(" ") + "...";
  }  
  return wordsArray.slice(0, words).join(" ");
};