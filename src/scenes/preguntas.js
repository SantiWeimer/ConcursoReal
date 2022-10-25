const preguntas = {
    "1": {
        pregunta: "¿En qué año comienza y \ntermina la edad media?",
        opciones: {
            "1": {
                texto: "500 dc a 1500 dc",
                esCorrecta: true,
            },
            "2": {
                texto: "1 dc a 1500 dc",
                esCorrecta: false,
            },
            "3": {
                texto: "1000 dc a 1500 dc",
                esCorrecta: false,
            },
            "4": {
                texto: "500 ac a 500 dc",
                esCorrecta: false,
            }
        }
        
    },

    "2": {
        pregunta: "¿Qué tipo de armaduras \nusaban los soldados?",
        opciones: {
            "1": {
                texto: "Armadura de cuero",
                esCorrecta: false,
            },
            "2": {
                texto: "Cota de malla",
                esCorrecta: true,
            },
            "3": {
                texto: "No tenian protección",
                esCorrecta: false,
            },
            "4": {
                texto: "Armadura de metal",
                esCorrecta: false,
            }
        }
        
    },

    "3": {
        pregunta: "¿Cuál de estas personas no \npertenece a la edad media?",
        opciones: {
            "1": {
                texto: "Ana Bolena",
                esCorrecta: true,
            },
            "2": {
                texto: "Juana de Arco",
                esCorrecta: false,
            },
            "3": {
                texto: "María Antonieta",
                esCorrecta: false,
            },
            "4": {
                texto: "Dante Alighieri",
                esCorrecta: false,
            }
        }
        
    },

    "4": {
        pregunta: "¿Qué acontecimiento marcó el \ninicio de la edad media?",
        opciones: {
            "1": {
                texto: "Ataque de los vikingos",
                esCorrecta: false,
            },
            "2": {
                texto: "Caída del imperio Romano",
                esCorrecta: true,
            },
            "3": {
                texto: "Caída de Constantinopla",
                esCorrecta: false,
            },
            "4": {
                texto: "Caída del imperio Bizantino",
                esCorrecta: false,
            }
        }
        
    },

    "5": {
        pregunta: "¿Qué religión predominaba en \nel periodo medieval?",
        opciones: {
            "1": {
                texto: "Islamismo",
                esCorrecta: false,
            },
            "2": {
                texto: "Protestantismo",
                esCorrecta: false,
            },
            "3": {
                texto: "Catolicismo",
                esCorrecta: true,
            },
            "4": {
                texto: "Judaísmo",
                esCorrecta: false,
            }
        }
        
    },

    "6": {
        pregunta: "¿Qué clase social debía tener \nde nacimiento un caballero?",
        opciones: {
            "1": {
                texto: "Artesanos",
                esCorrecta: false,
            },
            "2": {
                texto: "Campesinos",
                esCorrecta: false,
            },
            "3": {
                texto: "Hijos de nobles",
                esCorrecta: true,
            },
            "4": {
                texto: "Burgueses",
                esCorrecta: false,
            }
        }
        
    }
}

var preguntasArray = [];
preguntasArray.push(preguntas["1"]);
preguntasArray.push(preguntas["2"]);
preguntasArray.push(preguntas["3"]);
preguntasArray.push(preguntas["4"]);
preguntasArray.push(preguntas["5"]);
preguntasArray.push(preguntas["6"]);

preguntasArray.sort(() => Math.random() - 0.5)

export default preguntasArray