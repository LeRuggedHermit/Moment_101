// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const button = document.getElementById("showPic");
const content = document.getElementById("plusContent");

button.addEventListener("click", e=>{

        //om den blir klickad lÃ¤ses CSS in i en variabel:
        let style = window.getComputedStyle(content);
    
        //dÃ¤refter anvÃ¤nds en If-sats fÃ¶r att visa den.
        if (style.display === "none") {
    
            content.style.display = "block";
        }
    
})