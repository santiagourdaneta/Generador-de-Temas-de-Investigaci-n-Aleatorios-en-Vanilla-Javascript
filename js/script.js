document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-button');
    const topicOutput = document.getElementById('topic-output');
    const topicAreaSelect = document.getElementById('topic-area');

    // Listas de temas de investigación por área
    const researchTopics = {
        informatica: [
            "El impacto de la inteligencia artificial en la ciberseguridad.",
            "Desarrollo de interfaces de usuario adaptativas para personas con discapacidad.",
            "Análisis comparativo de algoritmos de aprendizaje profundo para el procesamiento de imágenes.",
            "Aplicaciones de la cadena de bloques (blockchain) más allá de las criptomonedas.",
            "La evolución de la computación cuántica y sus posibles aplicaciones.",
            "Seguridad en sistemas operativos móviles: desafíos y soluciones.",
            "Desarrollo de aplicaciones web progresivas (PWAs) para entornos offline.",
            "Análisis de rendimiento de diferentes arquitecturas de microservicios.",
            "Implementación de realidad aumentada (RA) en la educación.",
            "La ética en el diseño de algoritmos de recomendación.",
            "Uso de IoT (Internet de las Cosas) en la agricultura inteligente.",
            "Visualización de grandes conjuntos de datos para la toma de decisiones.",
            "Desarrollo de chatbots conversacionales con procesamiento de lenguaje natural avanzado.",
            "Exploración de nuevas técnicas de compresión de datos.",
            "Análisis de vulnerabilidades en sistemas de inteligencia artificial."
        ],
        biologia: [
            "El papel del microbioma intestinal en la salud humana.",
            "Investigación sobre nuevas terapias génicas para enfermedades hereditarias.",
            "Análisis de la biodiversidad en ecosistemas marinos profundos.",
            "Estudio de los mecanismos de resistencia a los antibióticos en bacterias.",
            "La influencia del cambio climático en la migración de especies.",
            "Genómica comparativa de especies en peligro de extinción.",
            "Desarrollo de biofertilizantes para la agricultura sostenible.",
            "Investigación sobre la neurobiología del comportamiento animal.",
            "Análisis de la estructura y función de proteínas específicas.",
            "El impacto de la contaminación plástica en la vida marina.",
            "Estudio de los procesos de regeneración en organismos vivos.",
            "Aplicaciones de la biotecnología en la producción de biocombustibles.",
            "Investigación sobre la inmunoterapia contra el cáncer.",
            "Análisis de la evolución de los virus y su impacto en la salud pública.",
            "Estudio de los ritmos circadianos y su influencia en la fisiología."
        ],
        historia: [
            "El impacto de la Revolución Industrial en la estructura social europea.",
            "Análisis de las causas y consecuencias de la Guerra Fría.",
            "Estudio de las civilizaciones precolombinas en América.",
            "La influencia de la propaganda en los conflictos bélicos del siglo XX.",
            "Nuevas perspectivas sobre el Imperio Romano.",
            "La historia de la esclavitud en el mundo atlántico.",
            "Análisis de los movimientos sociales del siglo XXI.",
            "El papel de la mujer en la ciencia a lo largo de la historia.",
            "Estudio de las migraciones humanas y su impacto cultural.",
            "La influencia de la religión en la política a través de los siglos.",
            "Análisis de las revoluciones tecnológicas y sus consecuencias sociales.",
            "Estudio de la historia del arte y su relación con el contexto social.",
            "La historia de la medicina y la evolución de los tratamientos.",
            "Análisis de los procesos de descolonización en África y Asia.",
            "Estudio de la historia del pensamiento político."
        ],
        economia: [
            "El impacto de la globalización en las economías emergentes.",
            "Análisis de las políticas monetarias de los bancos centrales.",
            "Estudio de la economía del comportamiento y la toma de decisiones.",
            "La influencia de la tecnología en el mercado laboral.",
            "Análisis de la sostenibilidad de los sistemas de seguridad social.",
            "El impacto de la inteligencia artificial en el crecimiento económico.",
            "Estudio de las burbujas financieras y las crisis económicas.",
            "Análisis de las políticas fiscales y su efecto en la distribución de la riqueza.",
            "La economía de las plataformas digitales y los modelos de negocio disruptivos.",
            "Estudio del impacto del cambio climático en la economía global.",
            "Análisis de las teorías del desarrollo económico.",
            "La economía de la salud y el acceso a los servicios médicos.",
            "Estudio de los mercados financieros y la gestión de riesgos.",
            "Análisis de la economía política de la integración regional.",
            "El papel del emprendimiento en la innovación y el crecimiento económico."
        ],
        psicologia: [
            "El impacto del estrés en la salud mental y física.",
            "Análisis de los procesos cognitivos en la toma de decisiones.",
            "Estudio del desarrollo infantil y la influencia del entorno.",
            "La psicología de las redes sociales y su impacto en la autoestima.",
            "Análisis de las diferentes teorías de la personalidad.",
            "Investigación sobre los trastornos del espectro autista.",
            "Estudio de la efectividad de diferentes enfoques psicoterapéuticos.",
            "La psicología del liderazgo y la motivación en el trabajo.",
            "Análisis de los procesos de memoria y aprendizaje.",
            "El impacto del trauma psicológico y las estrategias de afrontamiento.",
            "Estudio de la psicología del envejecimiento.",
            "Análisis de la influencia de la cultura en el comportamiento humano.",
            "Investigación sobre la psicología de la persuasión y la influencia social.",
            "Estudio de los procesos de atención y concentración.",
            "La psicología positiva y el bienestar subjetivo."
        ],
        ciencias_ambientales: [
            "El impacto del cambio climático en los ecosistemas terrestres.",
            "Análisis de la contaminación del agua por microplásticos.",
            "Estudio de la deforestación y sus consecuencias ambientales y sociales.",
            "Desarrollo de energías renovables y su viabilidad a gran escala.",
            "Análisis de la pérdida de biodiversidad y sus causas.",
            "La gestión sostenible de los recursos hídricos.",
            "Estudio de la acidificación de los océanos y sus efectos en la vida marina.",
            "Análisis de las políticas ambientales y su efectividad.",
            "El impacto de la agricultura industrial en el medio ambiente.",
            "Desarrollo de tecnologías para la captura y almacenamiento de carbono.",
            "Estudio de la relación entre la urbanización y la degradación ambiental.",
            "Análisis de la gestión de residuos sólidos urbanos.",
            "La influencia de los incendios forestales en los ecosistemas.",
            "Estudio de la conservación de especies en peligro crítico.",
            "Análisis de la economía circular como modelo de sostenibilidad."
        ]
    };

    function getRandomTopic(selectedArea) {
        if (selectedArea === 'all') {
            const areas = Object.keys(researchTopics);
            const randomArea = areas[Math.floor(Math.random() * areas.length)];
            const topics = researchTopics[randomArea];
            const randomIndex = Math.floor(Math.random() * topics.length);
            return topics[randomIndex];
        } else {
            const topics = researchTopics[selectedArea];
            if (topics && topics.length > 0) {
                const randomIndex = Math.floor(Math.random() * topics.length);
                return topics[randomIndex];
            } else {
                return "No hay temas disponibles para esta área.";
            }
        }
    }

    generateButton.addEventListener('click', function() {
        const selectedArea = topicAreaSelect.value;
        const randomTopic = getRandomTopic(selectedArea);
        topicOutput.textContent = randomTopic;
    });
});