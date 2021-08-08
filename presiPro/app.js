//init variables
const body = document.querySelector('body')
const sideBarOpen = document.querySelector('#sideBarOpen')
const sideBarClose = document.querySelector('#sideBarClose')
const sideBar = document.querySelector('.side')

const toggleAnimeFunc = (params, params2) => {
    // params.classList.add('toggleAnime')
    params2.classList.remove('toggleDisable')
    params.classList.add('toggleDisable')
}
//SideBar Design
sideBarOpen.addEventListener('click', () => {
    sideBar.style.transform = "translateX(0%)"
    toggleAnimeFunc(sideBarOpen, sideBarClose)
})
sideBarClose.addEventListener('click', () => {
    sideBar.style.transform = "translateX(-100%)"
    toggleAnimeFunc(sideBarClose, sideBarOpen)
})
//End SideBar Design