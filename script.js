var radio;
var text;

window.onload = () => {
    radio = document.querySelectorAll("kanin[type='radio']")
    radio.forEach(i => {
        i.onclick = () => {
            activateRadio(i)
        }
        i.classList.add("inactive");
        i.innerHTML = "<radio></radio><a>" + (i.attributes.value.nodeValue) + "</a>";
    })

    text = document.querySelectorAll("kanin[type='text'],kanin[type='number']");
    console.log(text);
    text.forEach(i => {
        i.onclick = () => {
            activateText(i);
        }
        i.setAttribute("placeholder", i.innerHTML);

    })

    var sub = document.querySelectorAll("kanin[type='submit']");
    console.log(sub);
    sub.forEach(i => {
        i.onclick = () => {
            submitForm(i)
        }
    })
}

function submitForm() {
    var finalList = "";
    var k = document.querySelector("kanishk");
    if (k.attributes.methode.nodeValue == "get") {
        finalList = window.origin + "/" + k.attributes.action.nodeValue + "?";

        text = document.querySelectorAll("kanin[type='text'],kanin[type='number']");
        text.forEach(ele => {
            var itext = (ele.innerHTML).replaceAll(" ", "+");

            finalList += "&" + ele.attributes.name.nodeValue + "=" + itext;
            console.log(ele.attributes.name.nodeValue);
        })

        radio.forEach(ele => {
            if (ele.classList.contains("active")) {

                finalList += "&" + ele.attributes.name.nodeValue + "=" + ele.attributes.value.nodeValue;
            }

        })

    }


    console.log(finalList);
    window.location.replace(finalList);
}

function activateRadio(element) {
    toggleActive(element);
    var other = document.querySelectorAll("kanin[type='radio']");
    // other =
    var sametype;
    console.log("Tlsdhlfkawsldk");
    other.forEach(temp => {
        // console.log(temp);

        if (temp.attributes.name.nodeValue == element.attributes.name.nodeValue) {
            if (temp.attributes.value.nodeValue != element.attributes.value.nodeValue)
                if (temp.classList.contains("active")) toggleActive(temp)
        }


    });
    console.log("Tlsdhlfkawsldk");

    console.log(element.innerHTML)
    // if(other[0].classList.contains("active")
    console.log(other);
}

function toggleActive(element, what = "inactive", by = "active") {
    if (element.classList.contains(what)) {
        element.classList.add(by)
        element.classList.remove(what)

    }
    else if (element.classList.contains(by)) {
        element.classList.remove(by)
        element.classList.add(what)
    }
    else
        element.classList.add(by)


}
var tempPlaceholder;
let blinkerOn = false;
var tempElement;
function activateText(element) {
    window.tempElement = element;
    toggleActive(element)
    var txt = element.innerHTML;
    if (element.classList.contains("placeholder")) {
        tempPlaceholder = txt;
        txt = "";
    }
    window.blinkerOn = true;
    document.getElementById("filler").style.display = "block";
    console.log(document.getElementById("filler").style)

    // window.setTimeout();
    console.log(element.firstChild);
    element.lastElementChild

    // timer(element, blinker)
}


// //dead code broooooo
// function timer(element, blinker) {
//     window.setTimeout(function () {
//         blinker();
//         if (window.blinkerOn != false)
//             timer(element, blinker);
//     }, 1500);
// }


function cleartemp() {
    window.blinkerOn = false;

    // window.tempElement.innerHTML = (element.firstChild.data);
    var element = window.tempElement;
    // console.log(element.lastElementChild);
    // if (element.lastElementChild != null) element.innerHTML = (element.firstChild.data);
    // console.log(element.firstChild.data);
    console.log("doen");
}
// var newText = "";
// var typing = false;
// function blinker() {
//     var element = window.tempElement;
//     console.log("doen2");

//     if (element.lastElementChild != null || window.blinkerOn == false) {
//         element.innerHTML = (element.firstChild.data) + newText;
//         newText = ""
//     }
//     else
//         if (!typing)
//             element.innerHTML += '<span id="blinker">I</span>';
//     // console.log(innerHTML);
// }
// // function addBlinker();
// console.log(radio)
function insertData(char) {
    var text = String.fromCharCode(char)
    var oldText = window.tempElement.innerHTML;
    var pholder = (window.tempElement.attributes.placeholder.nodeValue);
    console.log(pholder.nodeValue, oldText);
    if (pholder == oldText) {
        oldText = "";
    }

    console.log("DSf");
    //------>from where  make placeholder replace change and radio if one clicks other with same value get unselected and submit form
    window.tempElement.innerHTML = oldText + text;
    console.log("Dfasd");
}
function writeInput(char) {
    console.log(char);
    // window.tempElement.
    console.log(window.tempElement);
    if (window.tempElement.classList.contains("active")) {

        if (window.tempElement.attributes.type.nodeValue == "number") {
            if (48 <= char && char <= 57) {
                insertData(char)
            }
        }
        else if (window.tempElement.attributes.type.nodeValue == "text") {
            if (64 <= char && char <= 90) {
                insertData(char)
            }
        }


        if (char === 32) {
            window.tempElement.innerHTML = window.tempElement.innerHTML + ' ';
        }
        if (char === 8) {
            var text = window.tempElement.innerHTML;
            window.tempElement.innerHTML = text.substring(0, text.length - 1)
            if (window.tempElement.innerHTML.length <= 0)
                window.tempElement.innerHTML = window.tempElement.attributes.placeholder.nodeValue;
        }
    }
}



function select() {
    toggleActive(window.tempElement);
    cleartemp();
    document.getElementById("filler").style.display = "none";
}


window.onkeydown = (value) => {
    writeInput(value.keyCode);
}


