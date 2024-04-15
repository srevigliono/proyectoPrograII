const data = {
    usuario:{
        email:"legalega@gmail.com",
        usuario: "Santiago",
        contrasenia: "2444",
        bday: "2004-09-28",
        dni: 46028252,
        foto: "",
    },
    productos: [
        {
            imagen: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-06/230605-apple-vision-pro-mn-1510-f23ca3.jpg",
            nombre: "Apple Vision Pro",
            descripcion: "Con Apple Vision Pro, tienes un lienzo infinito que transforma la forma en que usas las aplicaciones que amas. Organice aplicaciones en cualquier lugar y escalelas al tamaño perfecto, haciendo realidad el espacio de trabajo de sus sueños, todo mientras permanece presente en el mundo que lo rodea. Navega por la web en Safari, crea una lista de tareas pendientes en Notas, chatea en Mensajes y muévete sin problemas entre ellas con un vistazo. Incluso puedes llevar tus flujos de trabajo de Mac a Apple Vision Pro de forma inalámbrica con Mac Virtual Display.",
            comentarios: 
            [
            {
                usuario: "JulianAlvarez19",
                coment: "¿Incluye cargador?",
                fotoPerfil: ""
            },
            {
                usuario: "CarlaPerez",
                coment: "¿Son los originales de apple?",
                fotoPerfil: ""
            },
            {
                usuario: "MartínPalermo123",
                coment: "¿Tienen precio mayorists?",
                fotoPerfil: ""
            }
        ]
    },
    {
        imagen: "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7390261/vpavic_161031_1256_0264.0.jpg",
        nombre: "MacBook Pro",
        descripcion: "MacBook Pro de 14” y 16”. Chip M3, M3 Pro o M3 Max. La laptop Mac más avanzada, para flujos de trabajo muy exigentes. Modelos mostrados. Chip M3, M3 Pro o M3 Max de Apple.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorista?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://www.readinbrief.com/wp-content/uploads/2020/05/guide-on-ipad-pro-2020-readinbrief.jpg",
        nombre: "iPad Pro",
        descripcion: "Rendimiento sorprendente. Pantallas increíblemente avanzadas. Conectividad inalámbrica ultrarrápida. Capacidades del Apple Pencil de siguiente nivel. Nuevas y potentes funciones en iPadOS. La mejor experiencia iPad.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://i.gadgets360cdn.com/large/iphone_14_pro_max_apple_1666942701797.jpg?downsize=950:*",
        nombre: "iPhone 15 Pro",
        descripcion: "Pantalla Super Retina XDR. Pantalla OLED de 6,1 pulgadas (15,54 cm) en diagonal. Resolución de 2.556 por 1.179 píxeles a 460 p/p. La pantalla del iPhone 15 Pro tiene esquinas redondeadas que rematan el diseño curvo del dispositivo, y esas esquinas se encuentran dentro de un rectángulo estándar. Si se mide el rectángulo estándar en diagonal, la pantalla tiene 6,12 pulgadas. La superficie real de visión es inferior.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://cdn.mos.cms.futurecdn.net/2rX963iFwAYBjyT4mzphJf.jpg",
        nombre: "AppleWatch Ultra 2",
        descripcion: "El Apple Watch más resistente y capaz vuelve a superar los límites. Presentando el nuevo S9 SiP. Una nueva y mágica forma de usar tu reloj sin tocar la pantalla. La pantalla Apple más brillante jamás creada. Y ahora puedes elegir una combinación de caja y correa que sea neutra en carbono.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://www.apple.com/v/airpods-pro/g/images/meta/og__eui2mpgzwyaa_overview.png?202210240743",
        nombre: "AirPods Pro 2da Generación",
        descripcion: "Hasta 2 veces más cancelación activa de ruido. Modo transparencia para escuchar el mundo que te rodea. El nuevo Audio Adaptativo adapta inteligentemente el control de ruido a su entorno. Spatial Audio lleva la inmersión a un nivel notablemente personal. Y una sola carga ofrece 6 horas de duración de la batería.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://cdn.cultofmac.com/wp-content/uploads/2018/02/HomePod-Siri-1.jpg",
        nombre: "HomePod",
        descripcion: "Audio inmersivo y de alta fidelidad. Un asistente inteligente. Funciona perfectamente con tus dispositivos Apple. Una forma poderosa de controlar su hogar inteligente. Privado y seguro.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://images.idgesg.net/images/article/2021/05/appletv4k2021hero-100890176-large.jpg",
        nombre: "Apple TV 4K",
        descripcion: " Apple TV 4K. La mejor experiencia televisiva está llamando. Apple TV 4K une tus servicios Apple favoritos con todas tus aplicaciones de streaming con nuestra mejor calidad de imagen y sonido, gracias al ultrarrápido chip A15 Bionic. Disfruta de una nueva experiencia FaceTime en TV 1 que lleva a tus amigos y familiares a tu sala de estar y a la pantalla más grande de tu hogar. Y con una interacción fluida con todos tus dispositivos y accesorios para el hogar inteligente, 2 tienes todo lo que amas de Apple, en su máxima expresión cinematográfica.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://images.idgesg.net/images/article/2019/06/mac-pro-2019-and-pro-display-xdr-100798228-orig.jpg",
        nombre: "Mac Pro",
        descripcion: "El rendimiento alucinante ahora viene de serie. El nuevo Mac Pro es una combinación innovadora de rendimiento de silicio de Apple y expansión PCIe para flujos de trabajo especializados. Y cada configuración viene con el nuevo e increíble M2 Ultra, nuestro chip más potente y capaz hasta la fecha.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    },
    {
        imagen: "https://i.inews.co.uk/content/uploads/2020/05/IMG_4472-scaled.jpg",
        nombre: "Teclado Apple para iPad",
        descripcion: "Los teclados para iPad brindan una excelente experiencia de escritura y una protección liviana y duradera para su iPad. Y se conectan magnéticamente al iPad, sin necesidad de interruptores, enchufes ni emparejamientos.",
        comentarios: 
      [
        {
            usuario: "JulianAlvarez19",
            coment: "¿Incluye cargador?",
            fotoPerfil: ""
        },
        {
            usuario: "CarlaPerez",
            coment: "¿Son los originales de apple?",
            fotoPerfil: ""
        },
        {
            usuario: "MartínPalermo123",
            coment: "¿Tienen precio mayorists?",
            fotoPerfil: ""
        }
      ]
    }
 ]
}

module.exports = data;