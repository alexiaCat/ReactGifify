export const getGifs = async(category) => {
    const apiKey = 'MTQyhyHQkkN4nGEa43MRmfh1nNzydzdK';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
console.log(gifs);
    return gifs;
}
