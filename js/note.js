shownotes()
//If user add the note add it to the local storage;
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
let addTxt = document.getElementById("addText");
let notes = localStorage.getItem("notes");
if(notes===null){
    noteObj = [];
}
else{
    noteObj = JSON.parse(notes);
}
noteObj.push(addTxt.value);
localStorage.setItem("notes", JSON.stringify(noteObj));
addTxt.value="";
shownotes()
})
//Function to show Elements from Local Storage
function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes===null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse(notes);
    }
    let html="";
    noteObj.forEach(function(element,index){
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
      
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <bottom class="btn btn-primary" id=${index} onclick="DeleteNote(this.id)">Delete Note</bottom>
        </div>
      </div>
        `
    })
    let noteElm= document.getElementById('note');
    if(noteObj != 0){
      noteElm.innerHTML=html;
    }
    else{
        noteElm.innerHTML=`<h6>No Note is available, Use "Add note Section" to add note</h6>`;
    }
}
//Function to Delete a note;
function DeleteNote(index){
let notes = localStorage.getItem('notes');
if(notes === null){
noteObj=[];
}
else{
    noteObj=JSON.parse(notes);
}
noteObj.splice(index, 1);
localStorage.setItem("notes", JSON.stringify(noteObj));
shownotes();
}
//To search the element by text;
let search = document.getElementById("serachTxt");
search.addEventListener('input',function(){
    let inputval = search.value.toLowerCase();
    let noteCards= document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputval)){
        element.style.display="block";
      }
     else{
        element.style.display="none";
     }
    })
})