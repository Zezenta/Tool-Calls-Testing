// Lista de productos
const productos = [
  // --- GYM ---
  {
    nombre: "Muñequeras / Wrist Straps para Gimnasio",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "2_b5b088c4-8139-4b51-b29c-1b15842079a9.webp",
    subcategorias: ["accesorios_gimnasio"],
  },
  {
    nombre: "Soporte magnético para teléfono / Gym Buddy (Especial Gym)",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: null,
    subcategorias: ["accesorios_gimnasio"],
  },
  {
    nombre: "Protector de Barra / Barbell pad para Gimnasio",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "3.2png.webp",
    subcategorias: ["accesorios_gimnasio"],
  },
  {
    nombre: "Correas de tobillos / Ankle Straps para Gimnasio",
    precioNormal: 40,
    precioDescuento: 20,
    descuento: 50,
    imagen: "1_c7909a89-8de7-4db6-a460-baea88d2cebc.webp",
    subcategorias: ["accesorios_gimnasio"],
  },

  // --- ACERO INOXIDABLE ---
  {
    nombre: "Cadena Dije Octágono Negra",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "1_a106c184-9562-4229-bd26-1b15a5404098.webp",
    subcategorias: ["cadenas_acero", "cadenas_dije"],
  },
  {
    nombre: "Cadena Dije Octágono Plateada y Negro",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "30_955ec9f6-2686-411e-9941-7e5caba17d3a.webp",
    subcategorias: ["cadenas_acero", "cadenas_dije"],
  },
  {
    nombre: "Cadena Placa Dorada Cruz Grabada",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "9_62fdc313-baf3-452f-95fc-569dcccf16d0.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_religiosas",
      "cadenas_placa",
    ],
  },
  {
    nombre: "Cadena Placa Plateada Cruz Grabada",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "10.1.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_religiosas",
      "cadenas_placa",
    ],
  },
  {
    nombre: "Cadena Cruz Plateada y Negro",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADJUL242.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_religiosas",
      "cadenas_cruz",
    ],
  },
  {
    nombre: "Cadena Cruz Negra con la Oración al Padre Nuestro Sobre Relieve",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_religiosas",
      "cadenas_cruz",
    ],
  },
  {
    nombre: "Cadena Cruz Dorada con la Oración al Padre Nuestro Sobre Relieve",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS2.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_religiosas",
      "cadenas_cruz",
    ],
  },
  {
    nombre: "Cadena Cruz Plateada y Negra",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS8.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_religiosas",
      "cadenas_cruz",
    ],
  },
  {
    nombre: "Cadena Cruz Plateada y Negra con Cristales de Microcircón",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS10.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_religiosas",
      "cadenas_cruz",
    ],
  },
  {
    nombre: "Cadena Placa Dorada, Detalles Plateado, Cristal de Microcircón",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS16.webp",
    subcategorias: ["cadenas_acero", "cadenas_dije", "cadenas_placa"],
  },
  {
    nombre: "Cadena Jerarquía Plateada-Negro",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS3.webp",
    subcategorias: ["cadenas_acero", "cadenas_dije"],
  },
  {
    nombre: "Cadena Disco Gym Negro",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS5.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_deportivas",
      "cadenas_gym",
    ],
  },
  {
    nombre: "Cadena Disco Gym Dorado",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS6.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_deportivas",
      "cadenas_gym",
    ],
  },
  {
    nombre: "Cadena Mancuerna Cuadrada Plateada",
    precioNormal: 20,
    precioDescuento: 10,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS25.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_deportivas",
      "cadenas_gym",
    ],
  },
  {
    nombre: "Cadena Mancuerna Redonda Plateada",
    precioNormal: 20,
    precioDescuento: 10,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS26.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_deportivas",
      "cadenas_gym",
    ],
  },
  {
    nombre: "Cadena Mancuerna Redonda Go Fit Plateada",
    precioNormal: 20,
    precioDescuento: 10,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS27.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_deportivas",
      "cadenas_gym",
    ],
  },
  {
    nombre: "Cadena Barra Negra - Numeros Romanos",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS13.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_deportivas",
      "cadenas_gym",
    ],
  },
  {
    nombre: "Cadena Barra Tono Vintage - Numeros Romanos",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS15.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_deportivas",
      "cadenas_gym",
    ],
  },
  {
    nombre: "Cadena Placa B.S.C. Negra",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS23.webp",
    subcategorias: ["cadenas_acero", "cadenas_dije", "cadenas_placa"],
  },
  {
    nombre: "Cadena Placa Emelec Negra",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS20.webp",
    subcategorias: ["cadenas_acero", "cadenas_dije", "cadenas_placa"],
  },
  {
    nombre: "Cadena Placa Fé Negra",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS19.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_placa",
      "cadenas_religiosas",
    ],
  },
  {
    nombre: "Cadena Placa Oración al Padre Nuestro Negra",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS22.webp",
    subcategorias: [
      "cadenas_acero",
      "cadenas_dije",
      "cadenas_placa",
      "cadenas_religiosas",
    ],
  },
  {
    nombre: "Cadena Placa Liga de Quito Negra",
    precioNormal: 25,
    precioDescuento: 12.5,
    descuento: 50,
    imagen: "CADENAS-MEDIDAS21.webp",
    subcategorias: ["cadenas_acero", "cadenas_dije", "cadenas_placa"],
  },

  // --- BRAZALETES DE CUERO ---
{
  nombre: "Brazalete de Cuero y Trenzados Múltiples",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "G7.webp",
  subcategorias: ["brazaletes_cuero", "brazaletes_trenzados"],
},
{
  nombre: "Brazalete de Cuero Trenzado de Acero Inoxidable Plateado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "D1.webp",
  subcategorias: [
    "brazaletes_cuero",
    "brazaletes_trenzados",
    "brazaletes_acero",
  ],
},
{
  nombre: "Brazalete de Cuero Trenzado de Acero Inoxidable Dorado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "F1.webp",
  subcategorias: [
    "brazaletes_cuero",
    "brazaletes_trenzados",
    "brazaletes_acero",
  ],
},
{
  nombre: "Brazalete de Cuero Negro y Café Trenzados Múltiples",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "I3.webp",
  subcategorias: ["brazaletes_cuero", "brazaletes_trenzados"],
},
{
  nombre: "Brazalete de Acero Rojo, Blanco y Azul",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "CUERO2.2_ac0917b0-32c5-46cf-9146-03f371612dc8.webp",
  subcategorias: ["brazaletes_acero"],
},
{
  nombre: "Brazalete Eclipse Titanio",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "1_03264f17-5905-4838-ae46-3120959160cd.webp",
  subcategorias: ["brazaletes_acero"],
},
//COLECCION DAMA
{
  nombre: "Cadena y Dije para Damas de Acero Inoxidable Plateada (Dos Piezas)",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "1.png",
  subcategorias: [
    "cadenas_dama",
    "cadenas_acero",
    "cadenas_dije",
    "accesorios_dama"
  ],
},
{
  nombre: "Cadena y Dije de Placa para Damas de Acero Inoxidable Plateado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "placa-plateada.webp",
  subcategorias: [
    "cadenas_dama",
    "cadenas_acero",
    "cadenas_dije",
    "cadenas_placa",
    "accesorios_dama"
  ],
},
{
  nombre: "Cadena y Dije de Placa para Damas de Acero Inoxidable Dorado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "placa-dorada.webp",
  subcategorias: [
    "cadenas_dama",
    "cadenas_acero",
    "cadenas_dije",
    "cadenas_placa",
    "accesorios_dama"
  ],
},
{
  nombre: "Cadenas Corazón Partido (Especiales Parejas-Disponibles para Grabados Personalizados)",
  precioNormal: 20,
  precioDescuento: 10,
  descuento: 50,
  imagen: "165.webp",
  subcategorias: [
    "cadenas_dama",
    "accesorios_dama",
    "cadenas_dije"
  ],
},
{
  nombre: "Cadenas Especiales de Pareja",
  precioNormal: 20,
  precioDescuento: 10,
  descuento: 50,
  imagen: "CADENA-PAREJA.webp",
  subcategorias: [
    "cadenas_dama",
    "accesorios_dama",
    "cadenas_dije"
  ],
},
{
  nombre: "Combo Damas Cuero Redondo Blanco + Pulsera Tejida",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "62.webp",
  subcategorias: [
    "combos_dama",
    "combos_cuero",
    "accesorios_dama"
  ],
},
{
  nombre: "Combo Damas Cuero Redondo Negro + Pulsera Tejida",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "76_99fb76cc-38c7-4fc8-ba4f-0bd37d42ff57.webp",
  subcategorias: [
    "combos_dama",
    "combos_cuero",
    "accesorios_dama"
  ],
},
{
  nombre: "Combo Damas Acero Redondo + Pulsera Tejida",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "59.webp",
  subcategorias: [
    "combos_dama",
    "accesorios_dama"
  ],
},
{
  nombre: "Combo Damas Cuero Redondo Rojo + Pulsera Tejida",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "64.webp",
  subcategorias: [
    "combos_dama",
    "combos_cuero",
    "accesorios_dama"
  ],
},
{
  nombre: "Combo Damas Acero Redondo Rojo y negro + Pulsera Tejida",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "69_52fc44bd-6c55-4ab1-9208-87b9ae70ef49.webp",
  subcategorias: [
    "combos_dama",
    "accesorios_dama"
  ],
},
{
  nombre: "Combo Damas Cuero Redondo Negro + Pulsera Tejida",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "75_51d94fde-87c0-4b91-972b-c8aade5e2293.webp",
  subcategorias: [
    "combos_dama",
    "combos_cuero",
    "accesorios_dama"
  ],
},
//COLECCIÓN ESSENCE
{
  nombre: "Pulseras Alma de Tigre",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "OJOTIG1.webp",
  subcategorias: ["pulseras_piedra"]
},
{
  nombre: "Pulseras Equilibrio",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "BFBLA1.webp",
  subcategorias: ["pulseras_piedra"]
},
{
  nombre: "Pulseras Fe de Acero Negras",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "CRNEGRA1.webp",
  subcategorias: ["pulseras_personalizadas", "brazaletes_acero"]
},
{
  nombre: "Pulseras Fe de Acero Doradas",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "CRUZDOR1.webp",
  subcategorias: ["pulseras_personalizadas", "brazaletes_acero"]
},
{
  nombre: "Pulseras Majestad Doradas",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "CORDOR1.webp",
  subcategorias: ["pulseras_personalizadas"]
},
{
  nombre: "Pulseras Dominio Real",
  precioNormal: 30,
  precioDescuento: 15,
  descuento: 50,
  imagen: "BFDOR1.webp",
  subcategorias: ["pulseras_personalizadas"]
},
{
  nombre: "Collar Alma de Tigre",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "ojotigre1.webp",
  subcategorias: ["collares_piedra"]
},
{
  nombre: "Collar Zenith",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "HERRCENT1.webp",
  subcategorias: ["collares_piedra"]
},
{
  nombre: "Collar noche Estelar",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "GRIS1.webp",
  subcategorias: ["collares_piedra"]
},
{
  nombre: "Pulsera Orión Dorada",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "11_d38339c0-e4d2-4e72-b783-339f2d05b4b9.webp",
  subcategorias: ["pulseras_piedra"]
},
{
  nombre: "Pulsera Orión Plateada",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "13_4d0fccc8-0618-4603-b1b3-c8392e9376de.webp",
  subcategorias: ["pulseras_piedra"]
},
{
  nombre: "Brazalete Horizone Negro y Plateado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "18_8bdc6277-17c2-4c60-9fce-e8c33811b720.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Brazalete Enlace Negro y Dorado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "24_8ecd6c23-3360-4090-a17b-3f6a0497052a.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Brazalete Resiliencia Dorado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "25_4e9fb9e8-d5d5-43e0-b43c-fee8c642ae48.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Brazalete Resiliencia Negro",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "26_5f7407f3-2dff-4d9b-a9c1-6a6be4a1acd4.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Brazalete Resiliencia Plateado",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "27_36f66d03-3165-4a70-8e82-2be62144e33a.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Pulsera Fusión de Acero y Piedra Ojo de Tigre",
  precioNormal: 20,
  precioDescuento: 7.5,
  descuento: 63,
  imagen: "1_01916032-5b0c-4a06-9fbd-ad433e97465a.webp",
  subcategorias: ["pulseras_piedra", "brazaletes_acero"]
},
{
  nombre: "Pulsera Fusión de Acero y Piedra Picasso Gris",
  precioNormal: 20,
  precioDescuento: 7.5,
  descuento: 63,
  imagen: "2_e86401b9-9670-44b0-8921-7d7acae931fa.webp",
  subcategorias: ["pulseras_piedra", "brazaletes_acero"]
},
{
  nombre: "Pulsera Fusión de Acero y Piedra Volcánica Acerina",
  precioNormal: 20,
  precioDescuento: 7.5,
  descuento: 63,
  imagen: "3_0eae0adb-acce-46a0-ba21-43c3ebb84993.webp",
  subcategorias: ["pulseras_piedra", "brazaletes_acero"]
},
{
  nombre: "Pulsera Titanio Negra",
  precioNormal: 20,
  precioDescuento: 7.5,
  descuento: 63,
  imagen: "21_60ed5df0-b367-4c31-847a-e37e46c2c3e5.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Pulsera Titanio Negra y Plateado",
  precioNormal: 20,
  precioDescuento: 7.5,
  descuento: 63,
  imagen: "16_a1538349-b031-433f-b195-6e794b4b1600.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Pulsera Titanio Negra y Dorado",
  precioNormal: 20,
  precioDescuento: 7.5,
  descuento: 63,
  imagen: "12_14453737-760b-4969-8d68-0daec22ac7bb.webp",
  subcategorias: ["brazaletes_acero"]
},
{
  nombre: "Trilogía Metalica",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "IMG_7084.webp",
  subcategorias: ["trilogias_pulseras"]
},
{
  nombre: "Trilogía Aurum & Acero",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "IMG_7242_3_11zon.webp",
  subcategorias: ["trilogias_pulseras"]
},
{
  nombre: "Trilogía Eclipse Urbano",
  precioNormal: 25,
  precioDescuento: 12.5,
  descuento: 50,
  imagen: "IMG_7246_5_11zon.webp",
  subcategorias: ["trilogias_pulseras"]
},
//COMBOS NEOPRENO
  {
    nombre: "Combo Pulsera de Neopreno y Pulsera Tejida",
    precioNormal: 20,
    precioDescuento: 10,
    descuento: 50,
    imagen: "7_9554beb1-9b51-488a-b254-f1e82421ee6f.webp",
    subcategorias: [
        "pulseras_personalizadas",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "15_8705fa57-5a36-403a-8a9e-ffdc1043bdfa.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Rojo + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "21_370532d8-2255-4840-b736-d2f17089eec9.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro y Azul + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "17_fbd4d2e3-f49e-4761-acb0-53c59f2b02c5.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro Múltiple + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "24_a3afe7f2-749b-4cdf-8658-115d6f2b5280.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Café + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "33_731ba2c7-9da6-411b-926b-26b99368908e.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro Herrajes Negros + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "26_5d9c1fc0-d614-4054-8aed-f7e05606fadf.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro Herrajes Plateados + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "30_f9cc3e89-44de-4137-a049-74f77868c744.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro Herrajes Dorados + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "28_431bc634-c63b-4c83-ba60-bc748c12539e.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro y Rojo + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "12_1b8b8610-cf7b-4781-a909-09ef82476941.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro y Amarillo + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "6_6c6b2f5f-3b81-4397-9b06-99ebe6365a2f.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro y Plateado + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "1_8d8f59bc-3c42-4787-b1db-e080db4d50f5.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro y Verde + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "7_7fedc30c-b8b8-468d-a8a4-6f460bbabe6e.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro y Azul + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "9_61246798-ebeb-4177-85fc-f6f2be3b9e3b.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
  {
    nombre: "Combo Cuero Negro y Plateado + Dos (02) Pulseras Tejidas",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "3_24495960-fb00-4a12-9757-488028e6f1a5.webp",
    subcategorias: [
      "combos_cuero",
      "pulseras_tejidas"
    ],
  },
//FOTOGRABAOS
  {
    nombre: "Cadena placa plateada con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "7_6e6ad01b-c3fd-4b20-b086-e4486894a966.webp",
    subcategorias: [
      "cadenas_fotograbado"
    ],
  },
  {
    nombre: "Cadena placa dorada con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "8_8811e474-7baa-4ec9-881f-dca5b38e7927.webp",
    subcategorias: [
      "cadenas_fotograbado"
    ],
  },
  {
    nombre: "Cadena placa negra con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "6_f92f5072-3734-4ce7-a004-5339568283c1.webp",
    subcategorias: [
      "cadenas_fotograbado"
    ],
  },
  {
    nombre: "Cadena para damas, dije de corazón plateada con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "4_e6ed0b5c-c3d6-4c26-a494-9d7814ef2798.webp",
    subcategorias: [
      "cadenas_fotograbado",
      "cadenas_dama",
      "accesorios_dama"
    ],
  },
  {
    nombre: "Cadena para damas, dije de corazón dorada con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "2_7d58ebc2-3fdc-4d41-9a78-c22390e02c58.webp",
    subcategorias: [
      "cadenas_fotograbado",
      "cadenas_dama",
      "accesorios_dama"
    ],
  },
  {
    nombre: "Llavero placa plateado con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "4_da5bc98f-7335-43c7-8a01-7d220b7c0b10.webp",
    subcategorias: [
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
  {
    nombre: "Llavero placa dorado con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "2_6f3ee756-ae11-41e8-88f6-bcbe9af4593d.webp",
    subcategorias: [
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
  {
    nombre: "Llavero placa negro con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "6_fd1019c0-455f-4a49-818d-8414e5acf528.webp",
    subcategorias: [
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
  {
    nombre: "Placa mascotas negra, con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "1_c2eac94a-c322-4b52-8e7e-b099a0a67fc6.webp",
    subcategorias: [
      "placas_mascotas"
    ],
  },
  {
    nombre: "Placa mascotas dorada, con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "5_de6dd8d6-24d9-42da-81e7-3409222cbca4.webp",
    subcategorias: [
      "placas_mascotas"
    ],
  },
  {
    nombre: "Placa mascotas plateada, con grabado personalizado",
    precioNormal: 30,
    precioDescuento: 15,
    descuento: 50,
    imagen: "3_d325a0c6-f33a-43d5-9786-040587c3ad87.webp",
    subcategorias: [
      "placas_mascotas"
    ],
  },
  //GRABADOS PERSONALIZADOS
    {
    nombre: "Brazalete Familia Unida Anillos Negros (Incluye Grabados Personalizados)",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "brazalete-3.webp",
    subcategorias: [
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Brazalete Familia Unida Anillos Plateados (Incluye Grabados Personalizados)",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "brazalete-2.webp",
    subcategorias: [
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Brazalete Familia Unida Anillos Dorados (Incluye Grabados Personalizados)",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "brazalete-1.webp",
    subcategorias: [
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Brazalete de Cuero Combinación Amarillo Personalizado",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "BARCELONA.webp",
    subcategorias: [
      "brazaletes_cuero",
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Brazalete de Cuero Combinación Azul Personalizado",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "EMELEC.webp",
    subcategorias: [
      "brazaletes_cuero",
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Brazalete de Cuero Combinación Rojo Personalizado",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "LIGA.webp",
    subcategorias: [
      "brazaletes_cuero",
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Brazalete de Cuero Real Madrid Personalizado",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "REALMADRID.webp",
    subcategorias: [
      "brazaletes_cuero",
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Brazalete de Cuero Barcelona de España Personalizado",
    precioNormal: 35,
    precioDescuento: 20,
    descuento: 43,
    imagen: "BARCELONAESPANA.webp",
    subcategorias: [
      "brazaletes_cuero",
      "brazaletes_personalizados"
    ],
  },
  {
    nombre: "Pulsera Plateado y Negro con Grabado Spotify, Ajustable y Unisex",
    precioNormal: 25,
    precioDescuento: 12.50,
    descuento: 50,
    imagen: "4_b2ba5ea1-09c3-441e-abd8-a9f8c7eaef1e.webp",
    subcategorias: [
      "pulseras_personalizadas"
    ],
  },
  {
    nombre: "Pulsera Grabado Spotify, Ajustable y Unisex",
    precioNormal: 25,
    precioDescuento: 12.50,
    descuento: 50,
    imagen: "2_3910b538-c09c-4c9f-8063-2ca1471582f9.webp",
    subcategorias: [
      "pulseras_personalizadas"
    ],
  },
  {
    nombre: "Pulsera Lionel Messi",
    precioNormal: 25,
    precioDescuento: 12.50,
    descuento: 50,
    imagen: "MESSI.webp",
    subcategorias: ["pulseras_personalizadas", "pulseras_deportivas"], // No explicit keywords for existing subcategories like "personalizado" or material.
  },
  {
    nombre: "Pulsera Cristiano Ronaldo CR7",
    precioNormal: 25,
    precioDescuento: 12.50,
    descuento: 50,
    imagen: "CR7.webp",
    subcategorias: ["pulseras_personalizadas", "pulseras_deportivas"], // No explicit keywords for existing subcategories like "personalizado" or material.
  },
  {
    nombre: "LLavero de Piel Negro y Acero Inoxidable (Incluye Grabado Personalizado)",
    precioNormal: 25,
    precioDescuento: 12.50,
    descuento: 50,
    imagen: "7.webp",
    subcategorias: [
      "llaveros_cuero",
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
  {
    nombre: "LLavero de Piel Café y Acero Inoxidable (Incluye Grabado Personalizado)",
    precioNormal: 25,
    precioDescuento: 12.50,
    descuento: 50,
    imagen: "8.webp",
    subcategorias: [
      "llaveros_cuero",
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
  {
    nombre: "LLavero Placa Cuadrada - Negro (Incluye Grabado Personalizado)",
    precioNormal: 20,
    precioDescuento: 7.50,
    descuento: 63,
    imagen: "2.webp",
    subcategorias: [
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
  {
    nombre: "LLavero Placa Cuadrada - Azul (Incluye Grabado Personalizado)",
    precioNormal: 20,
    precioDescuento: 7.50,
    descuento: 63,
    imagen: "1.webp",
    subcategorias: [
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
  {
    nombre: "LLavero Placa Cuadrada - Rojo (Incluye Grabado Personalizado)",
    precioNormal: 20,
    precioDescuento: 7.50,
    descuento: 63,
    imagen: "3.webp",
    subcategorias: [
      "llaveros_fotograbado",
      "llaveros_personalizados"
    ],
  },
//PRODUCTOS VARIOS
  {
    "nombre": "Estuche Organizador para Relojes / Pulseras 3 Slot (Espacios)",
    "precioNormal": 20,
    "precioDescuento": 10,
    "descuento": 50,
    "imagen": "3-SLOT2.webp",
    "subcategorias": ["estuches"]
  },
  {
    "nombre": "Protector de Escritorio / Mouse Pad",
    "precioNormal": 25,
    "precioDescuento": 12.50,
    "descuento": 50,
    "imagen": "Copiade3.webp",
    "subcategorias": ["mousepads"]
  },
  {
    "nombre": "LLavero de Cuero café y Acero Inoxidable",
    "precioNormal": 20,
    "precioDescuento": 5,
    "descuento": 75,
    "imagen": "ACCE9.webp",
    "subcategorias": ["llaveros_cuero"]
  },
  {
    "nombre": "LLavero de Cuero azul y Acero Inoxidable",
    "precioNormal": 20,
    "precioDescuento": 5,
    "descuento": 75,
    "imagen": "ACCE10.webp",
    "subcategorias": ["llaveros_cuero"]
  }
]


/**
 * Devuelve todos los productos que coincidan con al menos una de las subcategorías dadas.
 * No repite productos y no incluye la propiedad subcategorias en el resultado.
 * La propiedad imagen incluye el link hardcoded al inicio.
 *
 * @param {string[]} categorias
 * @returns {Array<Object>}
 */
function getProductsBySubcategories(categorias) {
  const set = new Set();
  const result = [];

  productos.forEach((p) => {
    if (
      Array.isArray(p.subcategorias) &&
      p.subcategorias.some((cat) => categorias.includes(cat))
    ) {
      // Usamos el nombre como identificador único
      if (!set.has(p.nombre)) {
        set.add(p.nombre);
        // Creamos una copia del objeto sin la propiedad subcategorias
        const { subcategorias, imagen, ...rest } = p;
        result.push({
          ...rest,
          imagen: imagen ? `https://example.com/${imagen}` : null,
        });
      }
    }
  });

  return result;
}

// Ejemplo de uso:
console.log(
  getProductsBySubcategories(["brazaletes_acero", "pulseras_deportivas", "combos_cuero"])
);



function getAllSubcategoriesWithCount(productos) {
  const counts = {};

  productos.forEach((producto) => {
    if (Array.isArray(producto.subcategorias)) {
      producto.subcategorias.forEach((subcat) => {
        counts[subcat] = (counts[subcat] || 0) + 1;
      });
    }
  });

  // Si quieres un array de objetos con nombre y cantidad:
  const result = Object.entries(counts).map(([nombre, cantidad]) => ({
    nombre,
    cantidad,
  }));

  return result;
}

function getAllSubcategories() {
  const all = productos.flatMap((p) =>
    Array.isArray(p.subcategorias) ? p.subcategorias : []
  );
  return Array.from(new Set(all));
}
console.log(getAllSubcategoriesWithCount(productos));

// Ejemplo:
//console.log(getAllSubcategories());

const fetch = require('node-fetch'); // npm install node-fetch@2
require("dotenv").config();

// Suponemos que ya tienes en el archivo:
// const productos = [ ... ];
// function getProductsBySubcategories(categorias) { ... }

// Configuración
const accessToken = process.env.OPENAI_API_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';

// Definición de la tool para OpenAI
const tools = [
  {
    type: "function",
    function: {
      name: "getProductsBySubcategories",
      description: "Devuelve todos los productos que coincidan con al menos una de las subcategorías dadas. No repite productos y no incluye la propiedad subcategorias en el resultado. La propiedad imagen incluye el link hardcoded al inicio. Subcategorías válidas: combos, combos_cuero, pulseras_deportivas, llaveros_placa, brazaletes_cuero, etc.",
      parameters: {
        type: "object",
        properties: {
          categorias: {
            type: "array",
            items: { type: "string" },
            description: `Lista de subcategorías a buscar. Subcategorías válidas: ["accesorios_gimnasio","cadenas_acero","cadenas_dije","cadenas_religiosas","cadenas_placa","cadenas_cruz","cadenas_deportivas","cadenas_gym","brazaletes_cuero","brazaletes_trenzados","brazaletes_acero","cadenas_dama","accesorios_dama","combos_dama","combos_cuero","pulseras_piedra","pulseras_personalizadas","collares_piedra","trilogias_pulseras","pulseras_tejidas","cadenas_fotograbado","llaveros_fotograbado","llaveros_personalizados","placas_mascotas","brazaletes_personalizados","pulseras_deportivas","llaveros_cuero","estuches","mousepads"]`
          }
        },
        required: ["categorias"]
      }
    }
  }
];

// Mensajes de prueba (mock)
const messages = [
  {
    role: "system",
    content: `
        [FORMATO DE SALIDA]
        Responde SIEMPRE SOLO con un JSON puro que cumpla exactamente este esquema:
        {
        "type": "text" | "textimage",
        "text": "[mensaje] (máx. 4 líneas)",
        "imgUrl": "https://clubentrepanas.com/cdn/shop/files/[NOMBRE_IMAGEN].jpg"  // Solo si type="textimage"
        }
        No añadas texto introductorio, explicaciones, comillas invertidas ni ningún otro carácter antes o después del JSON.

        Cuando recibas productos de la función getProductsBySubcategories, responde SOLO con el JSON en el formato indicado, usando la información del producto principal o el más relevante. Si no hay productos, responde con el mensaje de error en JSON como se indica abajo.

        [ROL]
        Eres un asistente de ventas especializado en pulseras, collares y fotograbados. Tu estilo es entusiasta y profesional, con lenguaje coloquial pero respetuoso. Nunca inventes productos o precios, solo responde sobre productos reales de la tienda. Estás atendiendo a clientes por medio de chats de Instagram, Facebook, y WhatsApp.
        Usa lenguaje neutro pero latinoamericano.

        [INFORMACIÓN DE LA TIENDA]
        Nombre: Club Entre Panas
        Propietario: Carlos González
        Ubicación: Detras del C.C, Mall del Sol, Bonanza Plaza Comercial, Guayaquil 090513
        Sitio web: https://clubentrepanas.com
        Whatsapp: 0993845394
        Horarios de atención: Lunes a Sábado de 10:00 a 20:00, Domingo cerrado.

        [FLUJO E INSTRUCCIONES]
        - Si el usuario pide información de productos o de un producto en específico, usa la función getProductsBySubcategories.
        - Responde brevemente, solo con información del producto por el cual el usuario preguntó.
        - Si el usuario pregunta por productos parecidos o alternativas, responde con productos parecidos.
        - No uses lenguaje markdown, solo texto natural en el campo "text".
        - Ten en cuenta que tienes la libertad de responderle al usuario de manera que suene como un ser humano natural.
        - Tienes que seguir el formato JSON especificado para poder manejar bien los mensajes.
        - Por sobre todas las cosas, tienes que brindar información útil para el comprador, y no tienes que inventar información.

        [MANEJO DE ERRORES]
        Si no hay productos, responde:
        {
        "type": "text",
        "text": "Aquel producto no lo tenemos disponible, hay algún otro producto que le pueda interesar?"
        }

        Si la pregunta es off-topic, responde:
        {
        "type": "text",
        "text": "¿Te ayudo con algo de nuestra colección?"
        }

        [EJEMPLOS DE RESPUESTA VÁLIDA]
        "Cuánto cuesta la pulsera de fuerza en titanio?":
        {
        "type": "textImage",
        "text": "La Pulsera 'Fuerza' en titanio cuesta $24.99",
        "imgUrl": "https://clubentrepanas.com/cdn/shop/files/pulsera-fuerza.jpg"
        }
        "Tienen pulseras de cuero?":
        {
        "type": "text",
        "text": "Claro, tenemos varias pulseras de cuero. Le gustaría ver alguna en particular?"
        }
        "De pulseras qué tienen?":
        {
        "type": "text",
        "text": "Tenemos una amplia variedad de pulseras, incluyendo de cuero, acero, piedra y personalizadas. Busca alguna en específico?"
        }
        "Dónde están ubicados?":
        {
        "type": "text",
        "text": "Estamos ubicados detrás del C.C, Mall del Sol, en Bonanza Plaza Comercial, Guayaquil 090513."
        }
    `
  },
  {
    role: "user",
    content: "Cuál es el número de whatsapp?"
  }
];

// Función principal de test
async function testFunctionCalling() {
  // 1. Primer request: IA puede decidir llamar a la función
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: messages,
      tools: tools,
      response_format: { type: "json_object" }
    })
  });

  const data = await response.json();
  console.log(data);
  const choice = data.choices[0].message;

  // 2. Si hay tool_call, ejecuta la función y responde a la IA
  if (choice.tool_calls) {
    for (const toolCall of choice.tool_calls) {
        console.log(toolCall)
      if (toolCall.function.name === "getProductsBySubcategories") {
        const args = JSON.parse(toolCall.function.arguments);
        const productosEncontrados = getProductsBySubcategories(args.categorias);
        console.log("Productos pedidos por la IA:");
        console.log(args.categorias);

        // 3. Crea el mensaje de tool
        const toolMessage = {
          tool_call_id: toolCall.id,
          role: "tool",
          name: "getProductsBySubcategories",
          content: JSON.stringify(productosEncontrados)
        };

        // 4. Prepara el nuevo historial de mensajes
        const newMessages = [
          ...messages,
          {
            role: "assistant",
            content: null,
            tool_calls: [toolCall]
          },
          toolMessage
        ];

        // 5. Llama de nuevo a la API para que la IA genere la respuesta final
        const finalResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'gpt-4o',
            messages: newMessages
          })
        });

        const finalData = await finalResponse.json();
        const finalText = finalData.choices[0].message.content;

        // 6. Muestra la respuesta final
        console.log("Respuesta final de la IA:");
        console.log(finalText);
        return;
      }
    }
  } else {
    // No hubo tool_call, respuesta normal
    console.log("Respuesta directa de la IA:");
    console.log(choice.content);
  }
}

// Ejecuta el test
testFunctionCalling();
