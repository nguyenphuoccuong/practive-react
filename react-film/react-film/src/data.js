export const Slider = [
    {img : "https://cdn.galaxycine.vn/media/2024/10/27/my-hero-academy-3_1730030978915.jpg"},
    {img : "https://cdn.galaxycine.vn/media/2024/10/16/venom-sneak-2048_1729048456073.jpg"},
    {img : "https://cdn.galaxycine.vn/media/2024/10/30/the-paradise-of-thorns-3_1730262481612.jpg"}
]

export const listDataHomePage = [
    {
        title : "Đang Chiếu",
        api : import.meta.env.VITE_DOMAIN_API
        +"movie/now_playing?api_key=" +import.meta.env.VITE_DOMAIN_KEY + "&language="+import.meta.env.VITE_DOMAIN_LANG+"&page=1"
    },
    {
        title : "Ua Thich",
        api : import.meta.env.VITE_DOMAIN_API
        +
        "movie/popular?api_key=" +import.meta.env.VITE_DOMAIN_KEY + "&language="+import.meta.env.VITE_DOMAIN_LANG+"&page=1"
    },
    {
        title : "Sap Chieu",
        api : import.meta.env.VITE_DOMAIN_API + "movie/upcoming?api_key=" +import.meta.env.VITE_DOMAIN_KEY + "&language="+import.meta.env.VITE_DOMAIN_LANG +"&page=1"
    }
]