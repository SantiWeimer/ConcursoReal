import { getPhrase } from "../services/translations";

const preguntas = {
    '1': {
        pregunta: getPhrase("¿En qué año comienza y termina la edad media?"),
        opciones: {
            "1": {
                texto: getPhrase("500 dc a 1500 dc"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("1 dc a 1500 dc"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("1000 dc a 1500 dc"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("500 ac a 500 dc"),
                esCorrecta: false,
            }
        }
        
    },

    '2': {
        pregunta: getPhrase("¿Qué tipo de armadura usaban los soldados?"),
        opciones: {
            "1": {
                texto: getPhrase("Armadura de cuero"),
                esCorrecta: false,
            },
            "2": {
                texto: getPhrase("Cota de malla"),
                esCorrecta: true,
            },
            "3": {
                texto: getPhrase("No tenían protección"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Armadura de metal"),
                esCorrecta: false,
            }
        }
        
    },

    '3': {
        pregunta: getPhrase("¿Cuál de estas personas no pertenece a la edad media?"),
        opciones: {
            "1": {
                texto: getPhrase("Ana Bolena"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Juana de Arco"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("María Antonieta"),
                esCorrecta: false,
            },
            "4": {
                texto: "Dante Alighieri",
                esCorrecta: false,
            }
        }
        
    },

    '4': {
        pregunta: getPhrase("¿Qué acontecimiento marcó el inicio de la edad media?"),
        opciones: {
            "1": {
                texto: getPhrase("Ataque de los vikingos"),
                esCorrecta: false,
            },
            "2": {
                texto: getPhrase("Caída del imperio Romano"),
                esCorrecta: true,
            },
            "3": {
                texto: getPhrase("Caída de Constantinopla"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Caída del imperio Bizantino"),
                esCorrecta: false,
            }
        }
        
    },

    '5': {
        pregunta: getPhrase("¿Qué religión predominaba en el periodo medieval?"),
        opciones: {
            "1": {
                texto: getPhrase("Islamismo"),
                esCorrecta: false,
            },
            "2": {
                texto: getPhrase("Protestantismo"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Catolicismo"),
                esCorrecta: true,
            },
            "4": {
                texto: getPhrase("Judaísmo"),
                esCorrecta: false,
            }
        }
        
    },

    '6': {
        pregunta: getPhrase("¿Qué clase social debía tener de nacimiento un caballero?"),
        opciones: {
            "1": {
                texto: getPhrase("Artesanos"),
                esCorrecta: false,
            },
            "2": {
                texto: getPhrase("Campesinos"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Hijos de nobles"),
                esCorrecta: true,
            },
            "4": {
                texto: getPhrase("Burgueses"),
                esCorrecta: false,
            }
        }
        
    },

    '7': {
        pregunta: getPhrase("¿Qué nombre recibe la organización social y económica desarrollada durante la Edad Media?"),
        opciones: {
            "1": {
                texto: getPhrase("Feudalismo"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Vasallaje"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Cruzada"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Todas las anteriores"),
                esCorrecta: false,
            }
        }
        
    },

    '8': {
        pregunta: getPhrase("¿Mediante qué ceremonia el vasallo juraba fidelidad al señor?"),
        opciones: {
            "1": {
                texto: getPhrase("Investidura"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Homenaje"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Feudalismo"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Vigilia"),
                esCorrecta: false,
            }
        }
        
    },

    '9': {
        pregunta: getPhrase("¿De donde era originaria la peste negra?"),
        opciones: {
            "1": {
                texto: getPhrase("De Asia"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("De América"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("De África"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("De Europa"),
                esCorrecta: false,
            }
        }
        
    },

    '10': {
        pregunta: getPhrase("¿Cómo murió Juana de Arco?"),
        opciones: {
            "1": {
                texto: getPhrase("Quemada en la hoguera"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("En una guerra"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Por la peste negra"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Por la edad"),
                esCorrecta: false,
            }
        }
        
    },

    '11': {
        pregunta: getPhrase("¿Dónde surgió la religión islámica?"),
        opciones: {
            "1": {
                texto: getPhrase("En la Península de Arabia"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("En Al-Andalus"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("En Palestina"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("En Iraq"),
                esCorrecta: false,
            }
        }
        
    },

    '12': {
        pregunta: getPhrase("¿Qué caracterizó al siglo XIV en Europa?"),
        opciones: {
            "1": {
                texto: getPhrase("Todas son correctas"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Retroceso económico"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Periodo de crisis"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Retroceso demográfico"),
                esCorrecta: false,
            }
        }
        
    },

    '13': {
        pregunta: getPhrase("¿Cuál es una característica de la Edad Media?"),
        opciones: {
            "1": {
                texto: getPhrase("Economía de auto-subsistencia"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Teocentrismo"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Desarrollo cultural y artístico"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Movilidad social"),
                esCorrecta: false,
            }
        }
        
    },

    '14': {
        pregunta: getPhrase("En el periodo medieval, el estamento más alto después del rey no pagaba impuestos. ¿A qué grupo social corresponde?"),
        opciones: {
            "1": {
                texto: getPhrase("La nobleza"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Los vasallos"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("El clero"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Los campesinos"),
                esCorrecta: false,
            }
        }
        
    },

    '15': {
        pregunta: getPhrase("¿Quiénes habitaban en pequeñas aldeas en las afueras del castillo y se preocupaban de trabajar las tierras del señor feudal?"),
        opciones: {
            "1": {
                texto: getPhrase("Los campesinos"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("El clero"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("La nobleza"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Los señores feudales"),
                esCorrecta: false,
            }
        }
        
    },

    '16': {
        pregunta: getPhrase("¿Para qué servían los castillos?"),
        opciones: {
            "1": {
                texto: getPhrase("Como defensa"),
                esCorrecta: false,
            },
            "2": {
                texto: getPhrase("Resguardarse por los ataques"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Vivienda de la nobleza"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Todas las anteriores"),
                esCorrecta: true,
            }
        }
        
    },

    '17': {
        pregunta: getPhrase("¿Cuántos siglos duro la Edad Media?"),
        opciones: {
            "1": {
                texto: getPhrase("10 siglos"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("8 siglos"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("9 siglos"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("7 siglos"),
                esCorrecta: false,
            }
        }
        
    },

    '18': {
        pregunta: getPhrase("¿Con qué le pagaban los siervos por el uso de las tierras a los señores?"),
        opciones: {
            "1": {
                texto: getPhrase("Un tributo en dinero"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Con parte de lo producido"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Un tributo en trabajo"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("No les pagaban"),
                esCorrecta: false,
            }
        }
        
    },

    '19': {
        pregunta: getPhrase("¿Cuál no es característica de la Edad Media?"),
        opciones: {
            "1": {
                texto: getPhrase("Aparición de los Parlamentos"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Prevalencia del Feudo"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Desarrollo Mercantil"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Aumento del Poder real"),
                esCorrecta: false,
            }
        }
        
    },

    '20': {
        pregunta: getPhrase("¿En que se dividía la sociedad feudal?"),
        opciones: {
            "1": {
                texto: getPhrase("En estamentos"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("En clases"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("En tribus"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("En castas"),
                esCorrecta: false,
            }
        }
        
    },

    '21': {
        pregunta: getPhrase("¿Qué capital tuvo el imperio Romano de oriente?"),
        opciones: {
            "1": {
                texto: getPhrase("Constantinopla"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Bizancio"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Roma"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Francia"),
                esCorrecta: false,
            }
        }
        
    },

    '22': {
        pregunta: getPhrase("¿Cómo se conocía al antiguo Imperio Romano de Oriente durante la Edad Media?"),
        opciones: {
            "1": {
                texto: getPhrase("Imperio Bizantino"),
                esCorrecta: true,
            },
            "2": {
                texto: getPhrase("Imperio Turco-Otomano"),
                esCorrecta: false,
            },
            "3": {
                texto: getPhrase("Imperio Islámico"),
                esCorrecta: false,
            },
            "4": {
                texto: getPhrase("Imperio Normando"),
                esCorrecta: false,
            }
        }
        
    }
}

var preguntasArray = [];

for (const key in preguntas) {
    preguntasArray.push(preguntas[key])  
}



preguntasArray.sort(() => Math.random() - 0.5)

export default preguntasArray