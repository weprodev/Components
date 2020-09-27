let editGraduate = document.getElementById('editGraduate');
let submitEdit = document.getElementById('submitEdit');

let tdGraduate = document.getElementsByClassName("td-graduate");

editGraduate.addEventListener("click" , function(){
    for (const x of tdGraduate) {
        let createInput = document.createElement("input");
        createInput.setAttribute('type' , 'text');
        let tdGraduateValue = document.getElementById('G-one').innerHTML;
        x.innerHTML = '';
        createInput.setAttribute('value' , `${tdGraduateValue}`);
        createInput.setAttribute('class' , 'inputG');
        createInput.setAttribute('id' , 'inputG');
        x.appendChild(createInput);
    }
    editGraduate.classList.add("no-click");
    submitEdit.classList.remove("no-click");
});

submitEdit.addEventListener("click" , function(){
    for (const y of tdGraduate) {
        let selectInput = document.getElementById('inputG');
        let valueInput = selectInput.value;
        y.innerHTML = '';
        let createSpan = document.createElement("span");
        createSpan.setAttribute('class' , 'G-one');
        createSpan.setAttribute('id' , 'G-one');
        createSpan.innerHTML = valueInput;
        y.appendChild(createSpan);
        console.log(createSpan);
    }
    console.log(editGraduate);
    editGraduate.classList.remove("no-click");
    submitEdit.classList.add("no-click");
});

