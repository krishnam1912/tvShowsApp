const form = document.querySelector("#sa");
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    console.log(searchTerm);
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        console.log(res.data);
        makeImages(res.data);
        form.elements.query.value = '';
    }
    catch (e) {
        console.log(e);
    }
});
const makeImages = (shows) => {
  
    for (let s of shows) {
        if (s.show.image) {
            const img = document.createElement("IMG");
            img.src = s.show.image.medium;
            const p = document.createElement("p");
            p.innerText = "Ratings " + s.show.rating.average;
            document.body.append(img);
            document.body.append(p);
        }
    }
}