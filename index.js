const app = document.getElementById("app");
const api_key = '424d067514392b29a97bc4e50972ed14';
let typeURL = "";
const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=pl-PL&page=1`
const imageOnSitePath = `https://image.tmdb.org/t/p/w500`;

const fetchTopMovies = async () => {
    try {
        const response = await fetch(`${apiURL}`)
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const searchTopMovies = document.querySelector("#best-films");
searchTopMovies.addEventListener("click", () => {
    fetchTopMovies().then((data) => {
        for (let i = 0; i < data.results.length; i++) {
            app.innerHTML += `<div class="film div-shadow" id=film${i}>
                            <img class="responsive div-shadow" src=${imageOnSitePath}${data.results[i].poster_path}></i>
                            <div class="description">
                            <h2>${data.results[i].title}</h2>
                            <p>${data.results[i].overview}</p>
                            </div>
                        </img>`;
        }
    })
});

typeURL = "top_rated";