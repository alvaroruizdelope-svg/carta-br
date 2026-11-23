'use strict';

const establecimiento = {
  nombre: 'CARTA-B/R',
  lema: 'Tu carta, siempre a mano',
  descripcion: 'Descubre nuestra selección de platos, tapas, bebidas y especialidades. Todo organizado para que encuentres fácilmente lo que más te apetece.',
  textoPie: 'Demostración de carta digital para bares y restaurantes',
  demostracion: true,
  contacto: {
    direccion: '',
    telefono: '',
    horarios: [],
    redes: [],
  },
};

// Los precios se expresan en euros. Añade `alergenos` solo con información verificada.
const carta = [
  {
    id: 'desayunos-y-tostadas', nombre: 'Desayunos y tostadas', grupo: 'comida',
    productos: [
      { nombre: 'Tostada con tomate', descripcion: 'Pan tostado con tomate rallado y aceite de oliva.', precio: 2.50 },
      { nombre: 'Tostada con jamón', descripcion: 'Pan tostado con tomate y lonchas de jamón serrano.', precio: 3.80 },
      { nombre: 'Tostada con mantequilla y mermelada', descripcion: 'Pan tostado con mantequilla y mermelada de fresa.', precio: 2.80 },
      { nombre: 'Croissant', descripcion: 'Croissant de mantequilla, dorado y hojaldrado.', precio: 2.40 },
      { nombre: 'Bollería', descripcion: 'Pieza de bollería del día.', precio: 2.60 },
      { nombre: 'Desayuno completo', descripcion: 'Tostada con tomate, café con leche y zumo de naranja.', precio: 6.90 },
    ],
  },
  {
    id: 'entrantes', nombre: 'Entrantes', grupo: 'comida',
    productos: [
      { nombre: 'Patatas bravas', descripcion: 'Patatas doradas con salsa brava.', precio: 5.50 },
      { nombre: 'Croquetas caseras', descripcion: 'Croquetas de jamón, cremosas por dentro y crujientes por fuera.', precio: 8.50 },
      { nombre: 'Ensaladilla rusa', descripcion: 'Patata, zanahoria, atún y mayonesa.', precio: 6.80 },
      { nombre: 'Calamares a la romana', descripcion: 'Anillas de calamar rebozadas con limón.', precio: 10.50 },
      { nombre: 'Gambas al ajillo', descripcion: 'Gambas salteadas en aceite de oliva con ajo y guindilla.', precio: 11.90 },
      { nombre: 'Nachos con queso', descripcion: 'Totopos de maíz con queso fundido, pico de gallo y jalapeños.', precio: 8.90 },
    ],
  },
  {
    id: 'tapas-y-raciones', nombre: 'Tapas y raciones', grupo: 'comida',
    productos: [
      { nombre: 'Jamón serrano', descripcion: 'Jamón serrano en lonchas finas, acompañado de pan.', precio: 12.50 },
      { nombre: 'Tabla de quesos', descripcion: 'Selección de quesos con picos y membrillo.', precio: 13.50 },
      { nombre: 'Alitas de pollo', descripcion: 'Alitas doradas con salsa barbacoa.', precio: 8.50 },
      { nombre: 'Huevos rotos con jamón', descripcion: 'Huevos fritos sobre patatas con virutas de jamón serrano.', precio: 10.90 },
      { nombre: 'Chorizo a la sidra', descripcion: 'Rodajas de chorizo cocinadas lentamente en sidra.', precio: 7.50 },
      { nombre: 'Torreznos', descripcion: 'Tiras de panceta doradas con corteza crujiente.', precio: 8.20 },
    ],
  },
  {
    id: 'ensaladas', nombre: 'Ensaladas', grupo: 'comida',
    productos: [
      { nombre: 'Ensalada mixta', descripcion: 'Lechuga, tomate, cebolla, atún y aceitunas.', precio: 7.90 },
      { nombre: 'Ensalada César', descripcion: 'Lechuga romana, pollo, picatostes, parmesano y salsa César.', precio: 9.80 },
      { nombre: 'Ensalada de tomate', descripcion: 'Tomate aliñado con cebolla, aceite de oliva y orégano.', precio: 7.50 },
      { nombre: 'Ensalada de queso de cabra', descripcion: 'Hojas tiernas, queso de cabra, nueces y vinagreta de miel.', precio: 10.50 },
    ],
  },
  {
    id: 'bocadillos-y-sandwiches', nombre: 'Bocadillos y sándwiches', grupo: 'comida',
    productos: [
      { nombre: 'Bocadillo de tortilla', descripcion: 'Pan crujiente con tortilla de patatas.', precio: 5.50 },
      { nombre: 'Bocadillo de lomo con queso', descripcion: 'Lomo a la plancha y queso fundido en pan crujiente.', precio: 6.40 },
      { nombre: 'Bocadillo de bacon', descripcion: 'Bacon a la plancha con tomate en pan crujiente.', precio: 6.20 },
      { nombre: 'Bocadillo de calamares', descripcion: 'Calamares fritos en barra de pan.', precio: 7.50 },
      { nombre: 'Sándwich mixto', descripcion: 'Jamón cocido y queso fundido en pan de molde tostado.', precio: 4.80 },
      { nombre: 'Sándwich vegetal', descripcion: 'Lechuga, tomate, huevo cocido y mayonesa en pan tostado.', precio: 5.80 },
    ],
  },
  {
    id: 'hamburguesas', nombre: 'Hamburguesas', grupo: 'comida',
    productos: [
      { nombre: 'Hamburguesa clásica', descripcion: 'Ternera a la plancha, lechuga, tomate y cebolla.', precio: 9.50 },
      { nombre: 'Hamburguesa con queso', descripcion: 'Ternera, cheddar fundido, pepinillos y salsa de la casa.', precio: 10.50 },
      { nombre: 'Hamburguesa de pollo', descripcion: 'Pollo crujiente con lechuga y mayonesa.', precio: 9.90 },
      { nombre: 'Hamburguesa doble', descripcion: 'Dos piezas de ternera con cheddar y cebolla a la plancha.', precio: 13.50 },
      { nombre: 'Hamburguesa especial de la casa', descripcion: 'Ternera, bacon, queso y cebolla caramelizada.', precio: 12.90 },
    ],
  },
  {
    id: 'pizzas', nombre: 'Pizzas', grupo: 'comida',
    productos: [
      { nombre: 'Margarita', descripcion: 'Salsa de tomate, mozzarella y albahaca.', precio: 9.90 },
      { nombre: 'Cuatro quesos', descripcion: 'Mozzarella, gorgonzola, provolone y parmesano.', precio: 11.90 },
      { nombre: 'Barbacoa', descripcion: 'Mozzarella, pollo, cebolla y salsa barbacoa.', precio: 12.50 },
      { nombre: 'Pepperoni', descripcion: 'Salsa de tomate, mozzarella y rodajas de pepperoni.', precio: 11.90 },
      { nombre: 'Vegetal', descripcion: 'Mozzarella, calabacín, pimiento, champiñones y cebolla.', precio: 11.50 },
    ],
  },
  {
    id: 'carnes', nombre: 'Carnes', grupo: 'comida',
    productos: [
      { nombre: 'Entrecot de ternera', descripcion: 'Entrecot a la plancha con patatas y pimientos asados.', precio: 19.90 },
      { nombre: 'Solomillo', descripcion: 'Medallones de solomillo de cerdo con salsa de pimienta.', precio: 15.50 },
      { nombre: 'Secreto ibérico', descripcion: 'Secreto ibérico a la plancha con patatas panadera.', precio: 17.90 },
      { nombre: 'Pechuga de pollo a la plancha', descripcion: 'Pechuga marcada a la plancha con ensalada y patatas.', precio: 11.50 },
      { nombre: 'Costillas a la barbacoa', descripcion: 'Costillas de cerdo asadas y glaseadas con salsa barbacoa.', precio: 16.90 },
    ],
  },
  {
    id: 'pescados', nombre: 'Pescados', grupo: 'comida',
    productos: [
      { nombre: 'Merluza a la plancha', descripcion: 'Lomo de merluza con patata cocida y perejil.', precio: 14.50 },
      { nombre: 'Bacalao', descripcion: 'Lomo de bacalao sobre pisto de verduras.', precio: 15.90 },
      { nombre: 'Salmón a la plancha', descripcion: 'Salmón dorado con verduras salteadas y limón.', precio: 16.50 },
      { nombre: 'Sepia a la plancha', descripcion: 'Sepia troceada con ajo, perejil y limón.', precio: 14.90 },
      { nombre: 'Fritura de pescado', descripcion: 'Surtido de pescado frito con un gajo de limón.', precio: 15.50 },
    ],
  },
  {
    id: 'postres', nombre: 'Postres', grupo: 'comida',
    productos: [
      { nombre: 'Tarta de queso', descripcion: 'Porción de tarta de queso al horno.', precio: 5.90 },
      { nombre: 'Brownie de chocolate', descripcion: 'Brownie templado con una bola de helado de vainilla.', precio: 5.80 },
      { nombre: 'Flan casero', descripcion: 'Flan de huevo con caramelo.', precio: 4.20 },
      { nombre: 'Arroz con leche', descripcion: 'Arroz cremoso aromatizado con canela y limón.', precio: 4.50 },
      { nombre: 'Helados variados', descripcion: 'Dos bolas de los sabores disponibles.', precio: 4.40 },
      { nombre: 'Tarta de chocolate', descripcion: 'Bizcocho de cacao con cobertura de chocolate.', precio: 5.50 },
    ],
  },
  {
    id: 'refrescos-y-aguas', nombre: 'Refrescos y aguas', grupo: 'bebidas',
    productos: [
      { nombre: 'Agua mineral', descripcion: 'Botella de agua mineral natural de 500 ml.', precio: 1.80 },
      { nombre: 'Agua con gas', descripcion: 'Botella de agua con gas de 330 ml.', precio: 2.20 },
      { nombre: 'Coca-Cola', descripcion: 'Refresco de cola clásico, servido frío.', precio: 2.60 },
      { nombre: 'Coca-Cola Zero', descripcion: 'Refresco de cola Zero, servido frío.', precio: 2.60 },
      { nombre: 'Fanta', descripcion: 'Refresco de naranja o limón.', precio: 2.60 },
      { nombre: 'Aquarius', descripcion: 'Bebida de limón o naranja, servida fría.', precio: 2.70 },
      { nombre: 'Nestea', descripcion: 'Té frío con sabor a limón.', precio: 2.70 },
      { nombre: 'Zumos', descripcion: 'Zumo de naranja, piña o melocotón.', precio: 2.70 },
    ],
  },
  {
    id: 'cervezas', nombre: 'Cervezas', grupo: 'bebidas',
    productos: [
      { nombre: 'Caña', descripcion: 'Vaso pequeño de cerveza de grifo.', precio: 2.20 },
      { nombre: 'Doble', descripcion: 'Vaso grande de cerveza de grifo.', precio: 3.40 },
      { nombre: 'Tercio', descripcion: 'Botella de cerveza lager de 330 ml.', precio: 3.10 },
      { nombre: 'Cerveza sin alcohol', descripcion: 'Botella de cerveza 0,0 de 330 ml.', precio: 3.10 },
      { nombre: 'Cerveza especial', descripcion: 'Botella de cerveza tostada de 330 ml.', precio: 3.80 },
    ],
  },
  {
    id: 'vinos', nombre: 'Vinos', grupo: 'bebidas',
    productos: [
      { nombre: 'Vino tinto', descripcion: 'Copa de tempranillo con notas de fruta roja.', precio: 3.70 },
      { nombre: 'Vino blanco', descripcion: 'Copa de verdejo fresco con notas cítricas.', precio: 3.60 },
      { nombre: 'Vino rosado', descripcion: 'Copa de rosado de garnacha, servido frío.', precio: 3.60 },
      { nombre: 'Copa de vino de la casa', descripcion: 'Una copa del tinto o blanco seleccionado para la carta.', precio: 3.00 },
      { nombre: 'Botella de vino de la casa', descripcion: 'Botella de 750 ml del tinto o blanco de la casa.', precio: 12.90 },
    ],
  },
  {
    id: 'cafes-e-infusiones', nombre: 'Cafés e infusiones', grupo: 'bebidas',
    productos: [
      { nombre: 'Café solo', descripcion: 'Espresso de sabor intenso.', precio: 1.60 },
      { nombre: 'Café cortado', descripcion: 'Espresso con un toque de leche.', precio: 1.70 },
      { nombre: 'Café con leche', descripcion: 'Espresso con leche caliente.', precio: 1.90 },
      { nombre: 'Café descafeinado', descripcion: 'Espresso preparado con café descafeinado.', precio: 1.80 },
      { nombre: 'Capuchino', descripcion: 'Espresso con leche vaporizada y espuma.', precio: 2.60 },
      { nombre: 'Té', descripcion: 'Té negro o verde servido caliente.', precio: 2.00 },
      { nombre: 'Manzanilla', descripcion: 'Infusión caliente de flores de manzanilla.', precio: 2.00 },
      { nombre: 'Infusiones variadas', descripcion: 'Selección de rooibos, menta poleo o tila.', precio: 2.20 },
    ],
  },
];
