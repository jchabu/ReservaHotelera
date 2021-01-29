// Opciones del calendario
document.getElementById("fechaReserva").setAttribute("min", fechaToday());
document.getElementById("fechaReserva").setAttribute("value", fechaToday());

function fechaToday() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; // Enero es 0
    if (mm < 10) {
        mm = '0' + mm
    }
    var aaaa = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    today = aaaa + '-' + mm + '-' + dd;
    return today;
}

// Número de noches

$(document).ready(function () {
    $('[data-toggle="popover-noches"]').popover({
        html: true,
        placement: "bottom",
        content: function () {
            return '<div id="select"><h6>COMUNES</h6><a class="dropdown-item">4 Noches</a><a class="dropdown-item">7 Noches</a>' +
                '<a class="dropdown-item">10 Noches</a><a class="dropdown-item">14 Noches</a><div class="dropdown-divider"></div>' +
                '<h6>DIARIAS</h6><a class="dropdown-item">1 Noche</a><a class="dropdown-item">2 Noches</a><a class="dropdown-item">3 Noches</a>' +
                '<a class="dropdown-item">4 Noches</a><a class="dropdown-item">5 Noches</a><a class="dropdown-item">6 Noches</a><a class="dropdown-item">7 Noches</a>' +
                '<a class="dropdown-item">8 Noches</a></div>'
        }
    }).on('shown.bs.popover', function () {
        document.querySelectorAll('#select .dropdown-item').forEach(element => {
            element.addEventListener('click', () => {
                document.getElementById('numeroNoches').value = element.textContent;
                $('#numeroNoches').popover('hide');
            })
        });
    });
});

// Habitaciones y huespedes
var numHabitaciones = 1;

var numAdultos = 0;
var numNinios = 0;
var arrayAdultos = [];
var arrayNinios = [];

var popoverHabitacion = $('[data-toggle="popover-habitaciones"]').popover({
    html: true,
    content: `<div class="room-container container-fluid column"></div>`,
    trigger: 'click'
})


$('[data-toggle="popover-habitaciones"]').on('shown.bs.popover', function (e) {
    for (let i = 1; i <= numHabitaciones; i++) {
        nuevaHabitacion(i);
    }
});

<<<<<<< HEAD

function nuevaHabitacion(numero) {
    var contenedor = document.getElementsByClassName("room-container")[0];
    var room = createNode("div", "", ["room"], []);
    room.appendChild(createNode("strong", "Habitación " + numero, [], []));


    var adultos = createNode("p", "", ["adultos"], []);
    adultos.appendChild(createNode("h8", "Adultos ", [], []));
    adultos.appendChild(createNode("input", "", ["numAdultos"], [{ name: "value", value: "0" }, { name: "size", value: "1" }, { name: "readonly", value: "" }]));
    var botonMas = adultos.appendChild(createNode("button", "+", [], []));
    var botonMenos = adultos.appendChild(createNode("button", "-", [], []));
    adultos.appendChild(botonMas);
    adultos.appendChild(botonMenos);

    var ninios = createNode("p", "", ["ninos"], []);
    ninios.appendChild(createNode("h8", "Niños ", [], []));
    ninios.appendChild(createNode("input", "", ["numNinios"], [{ name: "value", value: "0" }, { name: "size", value: "1" }, { name: "readonly", value: "" }]));
    var botonMasN = ninios.appendChild(createNode("button", "+", [], []));
    var botonMenosN = ninios.appendChild(createNode("button", "-", [], []));
    ninios.appendChild(botonMasN);
    ninios.appendChild(botonMenosN);

    var containButtons = createNode("div", "", ["botones"], []);
    var botonNuevaHab = createNode("button", "Nueva habitación", [], []);
    containButtons.appendChild(botonNuevaHab);
    var botonDelHab = createNode("button", "X", [], []);
    containButtons.appendChild(botonDelHab);

    var botonDone = createNode("button", "Done", [], []);
    containButtons.appendChild(botonDone);

    room.appendChild(adultos);
    room.appendChild(ninios);
    room.appendChild(containButtons);
    contenedor.appendChild(room);
    botonMas.addEventListener("click", function () { addAdult(numero) });
    botonMenos.addEventListener("click", function () { delAdult(numero) });
    botonMasN.addEventListener("click", function () { addKid(numero) });
    botonMenosN.addEventListener("click", function () { delKid(numero) });
    botonNuevaHab.addEventListener("click", function () {
        if (numHabitaciones < 4) {
            numHabitaciones += 1;
            nuevaHabitacion(numHabitaciones);
        }
    })
    botonDelHab.addEventListener("click", function () {
        if (numHabitaciones > 1) {
            contenedor.removeChild(contenedor.lastChild);
            numHabitaciones -= 1;
        }
    })
    botonDone.addEventListener("click", function () {
        var numeroHabitacion = 1;
        document.querySelectorAll('.room').forEach(room => {
            
            room.querySelectorAll('.numAdultos').forEach(ad => {
                numAdultos += ad.value;
                arrayAdultos.push(ad.value);
            })
            room.querySelectorAll('.numNinios').forEach(ch => {
                numNinios += ch.value;
                arrayNinios.push(ch.value);
            })
            numeroHabitacion +=1;
        })
        document.getElementById("huespedes").value = numeroHabitacion - 1 + " habitaciones";
        $('[data-toggle="popover-habitaciones"]').popover('hide');
    })
}

function addAdult(numero) {
    var cifra = document.getElementsByClassName("numAdultos")[numero - 1].value;
    if (cifra < 4) {
        cifra = Number(cifra) + 1;
        document.getElementsByClassName("numAdultos")[numero - 1].value = cifra;
        numAdultos =  Number(numAdultos) + 1;
    }
}
function delAdult(numero) {
    var cifra = document.getElementsByClassName("numAdultos")[numero - 1].value;
    if (cifra > 0) {
        cifra -= 1;
        document.getElementsByClassName("numAdultos")[numero - 1].value = cifra;
        numAdultos =  Number(numAdultos) - 1;
    }
}

function addKid(numero) {
    var cifra = document.getElementsByClassName("numNinios")[numero - 1].value;
    if (cifra < 3) {
        cifra = Number(cifra) + 1;
        document.getElementsByClassName("numNinios")[numero - 1].value = cifra;
        numNinios = Number(numNinios) + 1;
    }
}
function delKid(numero) {
    var cifra = document.getElementsByClassName("numNinios")[numero - 1].value;
    if (cifra > 0) {
        cifra -= 1;
        document.getElementsByClassName("numNinios")[numero - 1].value = cifra;
        numNinios = Number(numNinios) - 1;
    }
=======
function popoverHabitacion(numero){
    return `<div id="habitacion${numero}">
    <h5>Habitación ${numero}</h5>Adultos
    <input class="row-2" type="number" id="numAdultos${numero}" value="1" min="1" max="4">
    
    Niños
    <input class="row-2" type="number" id="numNiños${numero}" value="0" min="0" max="3">
    <div>
    <hr/>`
>>>>>>> e69b745d13d699f5d8584433bc6d318a511be780
}

document.getElementById("search").addEventListener("click", function () {
    var hotelDestino = document.getElementById("hotelDestino").value;
    console.log("Destino" + hotelDestino);
    var fechaReserva = document.getElementById("fechaReserva").value;
    console.log("Fecha de reserva: " + fechaReserva);
    var numeroNoches = document.getElementById("numeroNoches").value;
    console.log("Número de noches: " + numeroNoches);
    for (let i = 0; i < numHabitaciones; i++){
        console.log("Habitación " + i + " :");
        console.log("   Adultos: " + arrayAdultos[i]);
        console.log("   Niños: " + arrayNinios[i]);
    }
})


function createNode(name, content, classes, attributes) {
    var node = document.createElement(name);

    if (content != "") {
        var nodeContent = document.createTextNode(content);
        node.appendChild(nodeContent);
    }
    if (classes.length > 0) {
        classes.forEach(classElement => {
            node.classList.add(classElement);
        });
    }

    if (attributes.length > 0) {
        attributes.forEach(nodeAttribute => {
            node.setAttribute(nodeAttribute.name, nodeAttribute.value);
        })
    }
    return node;
}