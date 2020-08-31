function mostrar(){
    document.getElementById('oculto').style.display = "block";
}

const organizaciones = [
    {
        nombre: 'Asociación Civil Avanzar por el Desarrollo Humano', 
        contacto:'4918-0057, asociacionavanzar@gmail.com',
        sitio: 'http://www.avanzar.org.ar ',
        direccion: 'Lafuente  3114, Capital Federal, Villa Soldati, Buenos Aires', 
        recibe:'Muebles, Tecnología'
    },
    {
        nombre: 'Las Renatas Animales Especiales',
        contacto: '15-3473-2118, lasrenatascm@gmail.com', 
        sitio: '',
        direccion: 'Av esteban crovara 1000, Villa Madero, Buenos Aires.', 
        recibe: 'Cocina, Colchones y Frazadas, Muebles, Otros (Alimento balanceado, higiene y limpieza, materiales de construcción, pintura), Salud (Incluye medicinas), Tecnología',
    },
    {
        nombre: 'Acorn Argentina',
        contacto: '(011) 1562086009, acornargentina@gmail.com', 
        sitio:'http://www.acorninternational.org',
        direccion: 'Av. Cabildo 508, Villa Madero, La Matanza, Buenos Aires', 
        recibe: 'Otros (Alimento balanceado, higiene y limpieza, materiales de construcción, pintura)'
    },
    {
        nombre: 'El Rumbo, casa cultural',
        contacto: '15-5702-4527, elrumbocultural@gmail.com', 
        sitio:'',
        direccion: 'Virrey Vertiz 4721, PB, La Tablada, Buenos Aires', 
        recibe: 'Alimentos, Libros, Muebles, Artículos de recreación, Tecnología, Útiles escolares'
    }, 
    {             
    nombre:'Escuela Ciudad Oculta',
    contacto: '1161378923, damianreynoso05@gmail.com',
    sitio: '',
    direccion: 'Santander 5955, 1439, Mataderos, CABA, Ciudad de Buenos Aires',
        recibe: 'Cocina, Muebles, Otros (Alimento balanceado, higiene y limpieza, materiales de construcción, pintura), Artículos de recreación, Tecnología',
    },
    {
        nombre:'Inclusión',
        contacto: '(011) 1561604811, contacto@inclusion.org.ar',
        sitio: 'http://www.inclusion.org.ar',
        direccion: 'Av. Eva Perón 6600, 1247, Mataderos, CABA, Ciudad de Buenos Aires',
        recibe: 'Alimentos, Artículos para bebés, Cocina, Libros, Recreación, Ropa, Útiles escolares',
    },
    {
        nombre:'Centro Integral Emanuel',
        contacto: '1551050668, eve.sol.nye@gmail.com, en Facebook: Comedor Emanuel',
        sitio: 'https://www.facebook.com/nora.albarracin.338',
        direccion: 'Avenida eva Perón 6378, 3, 1439, Mataderos, CABA, Buenos Aires',
        recibe: 'Alimentos, Artículos para bebés, Cocina, Muebles, Otros (Alimento balanceado, higiene y limpieza, materiales de construcción, pintura), Recreación, Ropa, Salud, Tecnología',
    },
    {
        nombre:'Ciudad Luz, Acción solidaria',
        contacto: '(011) 69809349, gustavodperalta@hotmail.com',
        sitio: '',
        direccion: 'Av. Eva Perón  6380, 1754, CABA, Ciudad de Buenos Aires',
        recibe: 'Alimentos, Artículos para bebés, Cocina, Libros, Muebles, Otros (Alimento balanceado, higiene y limpieza, materiales de construcción, pintura), Recreación, Ropa, Tecnología, Útiles escolares',
    },
    {
        nombre:'La Victoria, Inclusión Social y deportiva',
        contacto: '(011) 4686-0029, 15-6896-4087, 15-6182-4321, Info@lavictoria.org.ar',
        sitio: 'http://www.lavictoria.org.ar',
        direccion: 'Montiel 2450, 1440, CABA, Ciudad de Buenos Aires',
        recibe: '',
    },
    /*
    {
        nombre:'',
        contacto: '',
        sitio: '',
        direccion: '',
        recibe: '',
    },*/
];

const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    resultado.innerHTML = '';
    const org = formulario.value.toLowerCase();
    const sitioweb = formulario.value.toLowerCase();
    const zona = formulario.value.toLowerCase();
    const donacion = formulario.value.toLowerCase();
    

    for(let organizacion of organizaciones) {
        let nombre = organizacion.nombre.toLowerCase();
        let contacto = organizacion.contacto.toLowerCase();
        let sitio = organizacion.sitio.toLowerCase();
        let direccion = organizacion.direccion.toLowerCase();
        let recibe = organizacion.recibe.toLowerCase();

            if (nombre.indexOf(org) !== -1 ||
                direccion.indexOf(zona) !== -1 ||
                recibe.indexOf(donacion) !== -1 
            ){
                resultado.innerHTML += `
                <li> ${organizacion.nombre} 
                    <br> <span style="color: black">Contacto:</span> ${organizacion.contacto} <a href="${organizacion.sitio}">${organizacion.sitio}</a>
                    <br> <span style="color: black">Dirección:</span> ${organizacion.direccion}
                    <br> <span style="color: black">También recibe:</span> ${organizacion.recibe}

                `
            }

    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
        <li>Lo sentimos! no encontramos nada para tu busqueda.
        `
    }

}
formulario.addEventListener('keyup', filtrar);

    filtrar();