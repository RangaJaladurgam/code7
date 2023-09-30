let url = 'https://kontests.net/api/v1/all';
let test = fetch(url)

test.then((contest)=>{
    return contest.json()
}).then((contest)=>{
    iCard = "";
    for (const key in contest) {
        // console.log(contest[key])
        let timeInHours = Math.floor(contest[key].duration/60/60)
        iCard += `
            <div class="card rounded-lg" style="width: 20rem;">
                    <img src="https://th.bing.com/th/id/OIP.8yvEuqvflK50v8yqLOOC7gHaD4?pid=ImgDet&rs=1" class="card-img-top"
                        alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${contest[key].name}</h5>
                        <p class="card-text">Duration : ${timeInHours} hrs</p>
                        <p class="card-text">Start time : ${contest[key].start_time}</p>
                        <p class="card-text">End time : ${contest[key].end_time}</p>
                        <p class="card-text">Site - <b>${contest[key].site}</b> </p>
                        <a href="${contest[key].url}" class="btn btn-primary" target="_blank">View Contest</a>
                    </div>
            </div>`
        cardsDisplay.innerHTML = iCard
    }
})
