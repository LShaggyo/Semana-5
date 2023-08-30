const propertyTemplate =
{
    name: '',
    src: '',
    description: '',
    address: '',
    room: '',
    bathrooms: '',
    price: '',
    smoke: false,
    pets: false,
    type: ''
}

const properties = {
    sale: [],
    rent: []
}

properties.sale.push({
    ...propertyTemplate,
    name: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    description: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    address: "123 Luxury Lane, Prestige Suburb, CA 45678",
    room: "4 habitaciones",
    bathrooms: "4 baños",
    price: "$5.000",
});

properties.sale.push({
    ...propertyTemplate,
    name: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    description: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    address: "789 Mountain Road, Summit Peaks, CA 23456",
    room: "2 Habitaciones",
    bathrooms: "1 Baños",
    price: "$1.200",
    smoke: true,
    pets: true
});

properties.sale.push({
    ...propertyTemplate,
    name: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    description: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    address: "567 Skyline Avenue, Skyview City, CA 56789",
    room: "3 Habitaciones",
    bathrooms: "3 Baños",
    price: "$4.500",
    smoke: false,
    pets: true
});

properties.rent.push({
    ...propertyTemplate,
    name: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    address: '123 Main Street, Anytown, CA 91234',
    room: '2 Habitaciones',
    bathrooms: '2 Baños',
    price: '$2.000',
    smoke: false,
    pets: true
},
{
    ...propertyTemplate,
    name: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    address: '456 Ocean Avenue, Seaside Town, CA 56789',
    room: '3 Habitaciones',
    bathrooms: '3 Baños',
    price: '$2,500',
    smoke: true,
    pets: true
},
{
    ...propertyTemplate,
    name: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    address: '789 Suburban Lane, Quietville, CA 34567',
    room: '2 Habitaciones',
    bathrooms: '2 Baños',
    price: '$2,200',
    smoke: false,
    pets: false
 
});


// // Función para generar HTML para una propiedad
function generatePropertyHtml(property) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${property.src}" class="card-img-top" alt="Imagen de propiedad" />
                <div class="card-body">
                    <h5 class="card-title">${property.name}</h5>
                    <p class="card-text">${property.description}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${property.address}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${property.room} |
                        <i class="fas fa-bath"></i> ${property.bathrooms}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${property.price}</p>
                    <p class="${property.smoke ? 'text-success' : 'text-danger'}">
                        <i class="fas fa-${property.smoke ? 'smoking' : 'smoking-ban'}"></i> ${property.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${property.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas fa-paw"></i> ${property.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Función para agregar propiedades al contenedor HTML
function addPropertiesToContainer(propertiesArray, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';
    propertiesArray.forEach(property => {
        const propertyHtml = generatePropertyHtml(property);
        container.innerHTML += propertyHtml;
    });
}

// Función para agregar una nueva propiedad
function addProperty() {
    // Recoger datos del formulario
    // Aquí deberías usar algo como new FormData() para recoger los datos del formulario
    const newProperty = {
        ...propertyTemplate,
        // Completa los campos con los datos del formulario
    };

    if (newProperty.type === 'venta') {
        properties.sale.push(newProperty);
    } else if (newProperty.type === 'alquiler') {
        properties.rent.push(newProperty);
    }

    // Actualizar el DOM
    if (document.body.classList.contains('sale-page')) {
        addPropertiesToContainer(properties.sale, '.property-container');
    } else if (document.body.classList.contains('rent-page')) {
        addPropertiesToContainer(properties.rent, '.property-container-rent');
    }
}

// Evento cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('sale-page')) {
        addPropertiesToContainer(properties.sale, '.property-container');
    } else if (document.body.classList.contains('rent-page')) {
        addPropertiesToContainer(properties.rent, '.property-container-rent');
    }
});
