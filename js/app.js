"use strict";

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

let coches = [
  {
    title: "Pagani Huayra",
    photo: "cocheejemplo.jpg",
    price: "120000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia erat ut erat auctor iaculis. Integer vulputate, mi eu ornare eleifend, orci lectus dictum leo, et efficitur quam velit a.",
    maxSpeed: "320kph",
    tunning: true,
  },
  {
    title: "Toyota Yaris",
    photo: "cocheejemplo.jpg",
    price: "60000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia erat ut erat auctor iaculis. Integer vulputate, mi eu ornare eleifend, orci lectus dictum leo, et efficitur quam velit a.",
    maxSpeed: "160kph",
    tunning: false,
  },
  {
    title: "Fiat 500",
    photo: "cocheejemplo.jpg",
    price: "85000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia erat ut erat auctor iaculis. Integer vulputate, mi eu ornare eleifend, orci lectus dictum leo, et efficitur quam velit a.",
    maxSpeed: "120kph",
    tunning: true,
  },
  {
    title: "Ford Shelby GT500",
    photo: "cocheejemplo.jpg",
    price: "240000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia erat ut erat auctor iaculis. Integer vulputate, mi eu ornare eleifend, orci lectus dictum leo, et efficitur quam velit a.",
    maxSpeed: "380kph",
    tunning: true,
  },
  {
    title: "Smart",
    photo: "cocheejemplo.jpg",
    price: "45000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia erat ut erat auctor iaculis. Integer vulputate, mi eu ornare eleifend, orci lectus dictum leo, et efficitur quam velit a.",
    maxSpeed: "140kph",
    tunning: false,
  },
];

const cochesGallery = () => {
  coches.map((coche, index) => {
    let galeria = document.getElementById("gallery");
    galeria.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
            <div class="card cursor-pointer" data-toggle="modal" data-target="#exampleModal-${index}">
                <img src="./assets/img/${
                  coche.photo
                }" class="card-img-top" alt="${coche.title}">
                <div class="card-body">
                    <h5 class="card-title">${coche.title}</h5>
                    <p class="card-text">
                        Precio: <i class="fas fa-dollar-sign"></i> ${
                          coche.price
                        }
                    </p>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-car"></i>&nbsp;${
                          coche.title
                        }</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class='row'>
                            <div class='col-sm-12 col-md-6 col-lg-4'>
                                <img src="./assets/img/${
                                  coche.photo
                                }" class="w-100" alt="${coche.title}">
                            </div>
                            <div class='col mt-2'>
                                <h5>Descripción</h5>
                                <p>${coche.description}</p>
                            </div>
                        </div>
                        <hr/>
                        <div class='row'>
                            <div class='col-sm-12 col-md-4 col-lg-4'>
                                <h6>Velocidad máxima:</h6>
                                <p><i class="fas fa-tachometer-alt"></i>&nbsp;${
                                  coche.maxSpeed
                                }</p>
                            </div>
                            <div class='col-sm-12 col-md-4 col-lg-4'>
                                <h6>Tuneable:</h6>
                                <p><i class="fas fa-tools"></i>&nbsp;${
                                  coche.tunning === true ? "Si" : "No"
                                }</p>
                            </div>
                            <div class='col-sm-12 col-md-4 col-lg-4'>
                                <h6>Precio:</h6>
                                <h4><i class="fas fa-dollar-sign"></i> ${
                                  coche.price
                                }</h4>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i>&nbsp;Cerrar</button>
                        <a class="btn btn-sm btn-success" target="_blank" href="mailto:donaciones@gitanosrp.es?subject=Comprar%20coche%20${
                          coche.title
                        }&body=Escribe%20aquí%20tu%20mensaje"><i class="fas fa-shopping-cart"></i>&nbsp;Quiero este coche</a>
                    </div>
                </div>
            </div>
        </div>
    `;
  });
};
