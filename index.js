const Container = document.getElementsByClassName("container");
const Button = document.getElementsByClassName("button")[0]; // Get the first button
const NotesContainer = document.getElementsByClassName("notescontainer")[0]; // Get the first notes container
function shownotes() {
    NotesContainer.innerHTML = localStorage.getItem("notes");
}
shownotes(); 

function updatestorage() {
    localStorage.setItem("notes",NotesContainer.innerHTML);
}

Button.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.style.cursor = "pointer";
    NotesContainer.appendChild(inputbox);
    inputbox.appendChild(img);
});
NotesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") 
    {
        e.target.parentElement.remove();
        updatestorage();
    }
    else if (e.target.tagName === "P") {
        Notes = document.querySelectorAll(".inputbox");
        Notes.forEach(nt => {
            nt.onkeyup = function() {
                updatestorage();
            }
            
        });
    }
})
document.addEventListener("keydown", event =>{
    if (event.key == "Enter") {
        document.execCommand("insertLineBreak");
        document.preventDefault();
    }
})