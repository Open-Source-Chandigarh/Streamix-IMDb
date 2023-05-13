const genrelist = ["Action","Comedy","Drama","Romance","Crime","Thriller","Horror","Sci-Fi"]

const btnse = document.querySelector(".genreselected")

const pick = genrelist[Math.floor(Math.random()*8)]


btnse.textContent = `${pick}`