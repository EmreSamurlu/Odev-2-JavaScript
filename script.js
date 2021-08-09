// creating close btn
let i;

let myList = document.getElementsByTagName('LI');
for (i = 0; i < myList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7") // close btn 
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
};

// close btn click
const close = document.getElementsByClassName('close');
for (i = 0 ; i < close.length; i++){
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// check symbol add

let list = document.querySelector('ul');
list.addEventListener('click', function (cs) {
    if(cs.target.tagName === 'LI'){
        cs.target.classList.toggle('checked');
    }
});

// create new list item with add btn

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0){
        alert ("Lütfen Giriş Yapınız");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById('myInput').value = "";

    let span = document.createElement('SPAN');
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}