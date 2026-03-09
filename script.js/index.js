function showSection(id){

document.querySelectorAll(".section").forEach(section=>{
section.classList.add("hidden")
})

document.getElementById(id).classList.remove("hidden")

}



fetch("https://api.github.com/users/YOUR_USERNAME/repos")

.then(res=>res.json())

.then(data=>{

let container = document.getElementById("repoContainer")

data.slice(0,6).forEach(repo=>{

container.innerHTML += `

<div class="bg-white p-4 rounded shadow">

<h3 class="font-bold">${repo.name}</h3>

<p class="text-sm text-gray-500">
${repo.language || "Code Project"}
</p>

<a href="${repo.html_url}" target="_blank"
class="text-blue-500 text-sm">
View Code
</a>

</div>

`

})

})