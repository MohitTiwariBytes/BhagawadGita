const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '17c8c6e698msh0c61cebb5d4cef0p19160bjsn92d07381870f',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
    }
};

let chapter = 0;

const button = document.getElementById("button")
const chapterNum = document.getElementById("chapterNumber")
const chapterName = document.getElementById("name")
const nameMeaning = document.getElementById("nameMeaning")
const summary = document.getElementById("summary")



async function getData() {
    try {
        const resp = await fetch(url, options);
        const result = await resp.json();
        console.log(result[chapter])
        chapterNum.innerText = result[chapter].id;
        chapterName.innerText = result[chapter].name;
        nameMeaning.innerHTML = result[chapter].name_meaning;
        summary.innerHTML = result[chapter].chapter_summary        ;


    } catch (error) {
        console.error(error);
    }
}

getData()

button.addEventListener("click", () =>{
    chapter += 1 ;
    getData()
    if(chapter>=18){
        chapter = 0;
    }

})