//Buttons
const darkButton = document.querySelector('.darktheme')// dark theme button
const newNote = document.querySelector(".newnote")     // new note button
const Save = document.querySelector(".save")           // save button
const Cancel = document.querySelector(".cancel")       // Cancel Button
//Left Notes
const leftSide = document.querySelector("aside")       // notes side
const leftTitle = document.querySelector(".lefttitle") //"My Notes"
const leftNotes = document.querySelector(".asideUL")   //Written Notes
//Right Text Area
const rightSide = document.querySelector(".rightside") // main .rightside 
const rightTitle = document.querySelector(".title")    //"take better notes"
const rightPP = document.querySelector(".pp")
const mainBody = document.querySelector("body")
const textArea = document.querySelector("textarea")
const textBox = document.querySelector(".textbox")

let notesArray = [{
    title: "note one",
    body: "this is my first note"
},
{
    title: "note two",
    body: "this is my second note"
}];

//feet
const foot = document.getElementById('footer')

// var foot = document.getElementById('footer'){
    // if(foot.checked === true){
    //     foot.style.backgroundColor = "#5D23C7"
    // }
    // else{
    //     foot.style.backgroundColor = "#e7ddcf"
    // }
    // };


function changeTheme(){
    mainBody.classList.toggle("dark-theme2");
    darkButton.classList.toggle("dark-theme");
    newNote.classList.toggle("dark-theme4");
    Save.classList.toggle("dark-theme4");
    Cancel.classList.toggle("dark-theme3"); 
    leftSide.classList.toggle("dark-theme");
    leftTitle.classList.toggle("dark-theme-font");
    leftNotes.classList.toggle("dark-theme-font");
    rightPP.classList.toggle("dark-theme-font");
    rightSide.classList.toggle("dark-theme2");
    rightTitle.classList.toggle("dark-theme-font");
    foot.classList.toggle("dark-theme2");
    if (darkButton.textContent == "Light Theme"){
        darkButton.textContent = "Dark Theme" 
    }
    else{ 
        darkButton.textContent = "Light Theme" 
    };
};
darkButton.addEventListener("click", changeTheme) // Click the dark theme button

function cancelButton(){
    textArea.style.display = "none"
    textBox.style.display = "none"
    Save.style.display = "none"
    Cancel.style.display = "none"
    // textArea.value = ""
}
Cancel.addEventListener("click", cancelButton) //           Event Listener Cancel

function newNoteVisible(){
        textArea.style.display = "block"
        textBox.style.display = "block"
        Save.style.display = "block"
        Cancel.style.display = "block"
        if (textArea.style.display == "block"){
            textArea.value.toggle(null)
        }
        // else{
        // textArea.value = ""
        // textArea.value = null
        // }
}
newNote.addEventListener("click", newNoteVisible)

// function newNoteVisible2(){
//     let i = 0;
//     for (i in textArea, textBox, Save, Cancel){
//         if (i === 1){
//             display === "none"
//             i = i + 1
//         }

//     }
// }
// newNote.addEventListener("click", newNoteVisible2)
function saveButton(){
    let titleName = prompt('Please name this note:');
    notesArray.push({title: titleName, body:textArea.value});
    var listTitle = document.createElement("li");
    var listContent = document.createTextNode(titleName);
    listTitle.appendChild(listContent);
    leftNotes.appendChild(listTitle);
}

Save.addEventListener("click", saveButton)      // Event Listener Save

// function getNoteTitle(e){
//     var inputNotes = e.target.innerText
//     notesArray.forEach(element)
//     if  (element.title == inputNotes){
//         textCont = title["body"]
//         textArea.value = textCont
//     } 
// }   

function getNoteTitle(event){
    var inputNotes=event.target.innerText
    for (var i = 0; i < notesArray.length; i++) {
        if (notesArray[i].title === inputNotes){
            textArea.value = notesArray[i].body
        }

    }
}

leftNotes.addEventListener("click", getNoteTitle)