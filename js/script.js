'use strict';

const formatoPrecio = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const grupos = [['comida', 'Para comer'], ['bebidas', 'Para beber']];
const formulario = document.querySelector('.busqueda');
const buscador = document.querySelector('#buscar');
const limpiarBusqueda = document.querySelector('.limpiar');
const enlacesCategorias = document.querySelector('#categorias');
const selectorCategorias = document.querySelector('#elegir-categoria');
const productos = document.querySelector('#productos');
const resultado = document.querySelector('#resultado');
const sinResultados = document.querySelector('#sin-resultados');

function elemento(etiqueta, texto, clase) {
  const nodo = document.createElement(etiqueta);
  if (texto) nodo.textContent = texto;
  if (clase) nodo.className = clase;
  return nodo;
}

function normalizar(texto) {
  return texto.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim();
}

function mostrarEstablecimiento() {
  document.title = `${establecimiento.nombre} · Carta digital`;
  document.querySelectorAll('[data-nombre]').forEach((nodo) => {
    nodo.textContent = establecimiento.nombre;
  });
  document.querySelector('.marca').setAttribute('aria-label', `${establecimiento.nombre}, inicio`);
  document.querySelector('[data-lema]').textContent = establecimiento.lema;
  document.querySelector('[data-descripcion]').textContent = establecimiento.descripcion;
  document.querySelector('#texto-pie').textContent = establecimiento.textoPie;
  document.querySelector('#aviso-demo').hidden = !establecimiento.demostracion;

  const { direccion, telefono, horarios, redes } = establecimiento.contacto;
  const contacto = document.querySelector('#contacto');
  if (direccion) contacto.append(elemento('address', direccion));
  if (telefono) {
    const enlace = elemento('a', telefono);
    enlace.href = `tel:${telefono.replace(/[^+\d]/g, '')}`;
    const linea = elemento('p');
    linea.append(enlace);
    contacto.append(linea);
  }
  for (const horario of horarios) contacto.append(elemento('p', horario));
  for (const red of redes) {
    const enlace = elemento('a', red.nombre);
    enlace.href = red.url;
    const linea = elemento('p');
    linea.append(enlace);
    contacto.append(linea);
  }
  contacto.hidden = contacto.childElementCount === 0;
}

function crearProducto(producto) {
  const fila = elemento('li', '', 'producto');
  const detalles = elemento('div');
  detalles.append(elemento('h4', producto.nombre), elemento('p', producto.descripcion));
  if (producto.alergenos?.length) {
    detalles.append(elemento('p', `Alérgenos: ${producto.alergenos.join(', ')}`, 'alergenos'));
  }
  fila.append(detalles, elemento('span', formatoPrecio.format(producto.precio), 'precio'));
  return { fila, nombre: normalizar(producto.nombre) };
}

function crearCarta() {
  const opcionInicial = elemento('option', 'Selecciona una categoría');
  opcionInicial.value = '';
  selectorCategorias.append(opcionInicial);

  return grupos.flatMap(([grupo, titulo]) => {
    const categorias = carta.filter((categoria) => categoria.grupo === grupo);
    if (categorias.length === 0) return [];

    const navegacion = elemento('div', '', 'categoria-grupo');
    const listaEnlaces = elemento('ul');
    navegacion.append(elemento('p', titulo, 'rotulo'), listaEnlaces);
    enlacesCategorias.append(navegacion);

    const opciones = elemento('optgroup');
    opciones.label = titulo;
    selectorCategorias.append(opciones);

    return categorias.map((categoria) => {
      const enlace = elemento('a', categoria.nombre);
      enlace.href = `#${categoria.id}`;
      const item = elemento('li');
      item.append(enlace);
      listaEnlaces.append(item);
      const opcion = elemento('option', categoria.nombre);
      opcion.value = categoria.id;
      opciones.append(opcion);

      const seccion = elemento('section', '', 'categoria');
      const encabezado = elemento('h3', categoria.nombre);
      encabezado.id = categoria.id;
      encabezado.tabIndex = -1;
      seccion.setAttribute('aria-labelledby', categoria.id);
      const lista = elemento('ul', '', 'productos');
      const fichas = categoria.productos.map(crearProducto);
      lista.append(...fichas.map(({ fila }) => fila));
      seccion.append(encabezado, lista);
      productos.append(seccion);
      return { categoria, seccion, enlace, item, opcion, fichas };
    });
  });
}

mostrarEstablecimiento();
const categorias = crearCarta();
const navCategorias = document.querySelector('.categorias');
const gruposEnlaces = enlacesCategorias.querySelectorAll('.categoria-grupo');
const gruposOpciones = selectorCategorias.querySelectorAll('optgroup');

function marcarCategoria() {
  const id = location.hash.slice(1);
  let seleccion = '';
  for (const { categoria, enlace, seccion } of categorias) {
    if (categoria.id === id && !seccion.hidden) {
      enlace.setAttribute('aria-current', 'location');
      seleccion = id;
    } else {
      enlace.removeAttribute('aria-current');
    }
  }
  selectorCategorias.value = seleccion;
}

function filtrarProductos() {
  const consulta = normalizar(buscador.value);
  const palabras = consulta.split(/\s+/).filter(Boolean);
  let total = 0;
  for (const { seccion, item, opcion, fichas } of categorias) {
    let coincidencias = 0;
    for (const { fila, nombre } of fichas) {
      fila.hidden = !palabras.every((palabra) => nombre.includes(palabra));
      if (!fila.hidden) coincidencias += 1;
    }
    total += coincidencias;
    seccion.hidden = item.hidden = opcion.hidden = coincidencias === 0;
    opcion.disabled = opcion.hidden;
  }
  gruposOpciones.forEach((opciones, indice) => {
    const grupoVacio = !opciones.querySelector('option:not([disabled])');
    gruposEnlaces[indice].hidden = opciones.hidden = opciones.disabled = grupoVacio;
  });
  sinResultados.hidden = total > 0;
  navCategorias.hidden = total === 0;
  limpiarBusqueda.hidden = buscador.value.length === 0;
  resultado.textContent = `${total} ${consulta ? (total === 1 ? 'resultado' : 'resultados') : (total === 1 ? 'producto' : 'productos')}`;
  marcarCategoria();
}

function borrarBusqueda(enfocar = true) {
  buscador.value = '';
  filtrarProductos();
  if (enfocar) buscador.focus();
}

formulario.hidden = false;
formulario.addEventListener('submit', (evento) => evento.preventDefault());
formulario.addEventListener('reset', (evento) => {
  evento.preventDefault();
  borrarBusqueda();
});
buscador.addEventListener('input', filtrarProductos);
document.querySelector('#ver-todos').addEventListener('click', () => borrarBusqueda());
selectorCategorias.addEventListener('change', () => {
  const id = selectorCategorias.value;
  if (!id) return;
  const destino = document.getElementById(id);
  location.hash = id;
  destino.focus({ preventScroll: true });
  destino.scrollIntoView();
});
window.addEventListener('hashchange', marcarCategoria);

const primeraBebida = categorias.find(({ categoria }) => categoria.grupo === 'bebidas');
document.querySelectorAll('[data-menu]').forEach((enlace) => {
  if (enlace.dataset.menu === 'bebidas') {
    enlace.hidden = !primeraBebida;
    if (primeraBebida) enlace.hash = primeraBebida.categoria.id;
  }
  enlace.addEventListener('click', () => {
    if (buscador.value) borrarBusqueda(false);
  });
});

filtrarProductos();
const destinoInicial = document.getElementById(location.hash.slice(1));
if (destinoInicial?.matches('.categoria h3')) destinoInicial.scrollIntoView({ behavior: 'instant' });
