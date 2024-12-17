export function convertTitleToSlug(title: string) {
    return title
    .toLowerCase()        
    .trim()              
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export const getOrdinalSuffix = (day: number) => {
    if (typeof day !== "number" || day < 1 || day > 31) {
      return ""; 
    }
  
    const j = day % 10;
    const k = day % 100;
  
    if (j === 1 && k !== 11) return `${day}st`;
    if (j === 2 && k !== 12) return `${day}nd`;
    if (j === 3 && k !== 13) return `${day}rd`;
    return `${day}th`;
  };