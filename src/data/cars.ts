import type { Car } from "../types/Car";

const cars: Car[] = [
    {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 20000,
        photo:
            "https://cdn.motor1.com/images/mgl/qjlny/s3/novo-toyota-corolla-sedan-2020.jpg",
    },
    {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2021,
        price: 22000,
        photo:
            "https://s2-autoesporte.glbimg.com/4OCiB3-h3N2BiciQGKt2KZs6-hE=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/n/d/Z7boDBRpS5AJMSlvXB9g/2019-08-13-civic.jpg",
    },
    {
        id: 3,
        make: "Ford",
        model: "Mustang",
        year: 2019,
        price: 35000,
        photo: "https://image1.mobiauto.com.br/images/api/images/v1.0/12433679/transform/fl_progressive,f_webp,q_80",
    },
    {
        id: 4,
        make: "Chevrolet",
        model: "Camaro",
        year: 2022,
        price: 40000,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91XrWfDjo848O-a_1WBJM_zSfmvlzqGDL_g&s",
    },
    {
        id: 5,
        make: "Tesla",
        model: "Model S",
        year: 2023,
        price: 80000,
        photo: "https://www.agoramotors.com.br/wp-content/uploads/2022/09/tesla-model-s-2023-vermelho.jpg",
    },
];


export { cars };