const app = document.getElementById("app");
const api_key = '424d067514392b29a97bc4e50972ed14';
const apiURL = `https://api.themoviedb.org/3/movie/`;
const languageURL = `&language=pl-PL&page=1`;
const topURL = `${apiURL}top_rated?api_key=${api_key}${languageURL}`;
const nowPlayingURL = `${apiURL}now_playing?api_key=${api_key}${languageURL}`;
const upcomingURL = `${apiURL}upcoming?api_key=${api_key}${languageURL}`;
const popularURL = `${apiURL}popular?api_key=${api_key}${languageURL}`;
const imageOnSitePath = `https://image.tmdb.org/t/p/w500`;

const fetchURL= async (URL) => {
    try {
        const response = await fetch(URL)
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchDraw = (data) => {
    app.innerHTML = "";
    for (let i = 0; i < data.results.length; i++) {
        app.innerHTML +=    `<div class="film div-shadow" id=film${i}>
                            <img class="responsive div-shadow" src=${imageOnSitePath}${data.results[i].poster_path}></i>
                            <div class="description">
                            <h2>${data.results[i].title}</h2>
                            <p>${data.results[i].overview}</p>
                            </div>
                            </img>`;
    }
    document.getElementById('film1').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};  

const searchTopMovies = document.querySelector("#best-films");
const searchNowPlayingMovies = document.querySelector("#now-playing-films");
const searchUpcomingMovies = document.querySelector("#upcoming-films");
const searchPopularMovies = document.querySelector("#popular-films");

searchTopMovies.addEventListener("click", () => {
    fetchURL(topURL).then((data) => fetchDraw(data))
});
searchNowPlayingMovies.addEventListener("click", () => {
    fetchURL(nowPlayingURL).then((data) => fetchDraw(data))
});
searchUpcomingMovies.addEventListener("click", () => {
    fetchURL(upcomingURL).then((data) => fetchDraw(data))
});
searchPopularMovies.addEventListener("click", () => {
    fetchURL(popularURL).then((data) => fetchDraw(data))
});

