//  Audio Ao Selecionar O Perfil !
    function play() {
    let audio = document.querySelector('audio');
    audio.play();
    console.log('Mouse sobre o perfil - reproduzir áudio');

}
    let profiles = document.querySelectorAll('.profile');
    profiles.forEach(addEvent);

    function addEvent(item, index, arr){
    profiles[index].addEventListener('mouseenter', play);
}
//  Fim codigo
    let usuarios = [
    {nome: "Vayne", img: "img/avatar10.png"},
    {nome: "Viego", img: "img/avatar9.jpg"},
    {nome: "Ahri", img: "img/avatar8.jpg"}
];  
    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++){
        ul.innerHTML += `
        <li>
        <a href="#">
            <div class="profile">
                <img src="${usuarios[i].img}" alt="Gallo">
                <span>${usuarios[i].nome}</span>
            </div>
        </a>
        </li>`;
    }
    ul.innerHTML +=`
    <li>
    <a href="#">
        <div class="profile">
            <i class='bx bxs-plus-circle'></i>
            <span>Adicionar perfil</span>
        </div>
    </a>
    </li>`
