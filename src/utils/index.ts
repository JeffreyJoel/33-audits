export function convertTitleToSlug(title: string) {
    return title
    .toLowerCase()        
    .trim()              
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}