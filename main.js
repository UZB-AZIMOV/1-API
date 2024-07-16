const API_URL = "https://jsonplaceholder.typicode.com";
const wrapper = document.querySelector(".wrapper")


async function fetchUsers(api){
   let response = await fetch(`${api}/users`)

   response
   .json()
   .then((res)=>createCard(res))
   .catch((err)=> console.log(err))
}

fetchUsers(API_URL)

const IMAGES = [
    "https://sun9-6.userapi.com/impg/D3l7eYSAzBffYJw5GxHKsmHiK8I5N4tgDtz56w/zp_8lnYJzVI.jpg?size=1200x752&quality=96&sign=fcdb952f32d113b40ca8b53251de3fd1&c_uniq_tag=hB7yFCR6_KyPVRR7blRBCfGcOO_UlpF2rJSmehmemYg&type=album",
    "https://overclockers.ru/st/legacy/blog/121152/387780_O.jpg",
    "https://www.cheltv.ru/wp-content/uploads/2021/04/gelt.jpg",
    "https://i.etsystatic.com/22267623/r/il/579caf/2304686633/il_1588xN.2304686633_hvkq.jpg",
    "https://cdn-edge.kwork.ru/pics/t3/19/18135443-1639050920.jpg",
    "https://u.9111s.ru/uploads/202208/11/f9e6600b5c6decb2044bc541430d72d5.jpg",
    "https://i.ytimg.com/vi/9y4Z3k6IjMY/maxresdefault.jpg",
    "https://www.funnyart.club/uploads/posts/2022-12/1671652727_www-funnyart-club-p-kartinki-devushka-s-telefonom-foni-15.jpg",
    "https://i.work.ua/article/2032b.jpg",
    "https://sun9-6.userapi.com/impg/D3l7eYSAzBffYJw5GxHKsmHiK8I5N4tgDtz56w/zp_8lnYJzVI.jpg?size=1200x752&quality=96&sign=fcdb952f32d113b40ca8b53251de3fd1&c_uniq_tag=hB7yFCR6_KyPVRR7blRBCfGcOO_UlpF2rJSmehmemYg&type=album",
]


function createCard(deta){
    deta.slice(0,10).forEach((users,index)=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`
        <div class="imgs">
                <img class="card__img" src=${IMAGES[index]} alt="foto">
                </div>
                <div class="cup"> 
        <p class="name">${users.name}</p>
        <p class ="username">Username: ${users.username}</p>
        <p class ="email">Email:  ${users.email}</p>
                <p class ="address">Addres: ${ users.address.street}</p>
            <div class="box">
                            <p class ="address">Phone : ${ users.phone}</p>
                            <p class ="companiya">Companiya: ${ users.company.name}</p>
                            <p class ="bs">Bs : ${ users.company.bs}</p>
            </div>
        <div class="bag">
            <button class="btn">View More</button>

        </div>
        </div>
        </div>
        `
        wrapper.appendChild(card)
        
    })
}




