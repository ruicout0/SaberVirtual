/**
 * SaberVirtual - Internationalization (i18n) Module
 * Supports: Portuguese (pt), English (en), Spanish (es), French (fr)
 */

const translations = {
    pt: {
        nav: {
            home: "Início",
            about: "Sobre nós",
            services: "Oferta",
            contact: "Contactos"
        },
        hero: {
            title1: "Preparamos o",
            title2: "teu futuro",
            title3: "Dotando-te de técnicas de",
            title4: "estudo e trabalho.",
            subtitle: "Trabalhamos continuamente para te dar as ferramentas necessárias para o mundo académico e profissional.",
            feature1: "+14 anos de experiência",
            feature2: "Professores qualificados",
            feature3: "Aulas online e presenciais",
            slide2: {
                title1: "Mais que um espaço de estudo",
                title2: "Ofertas",
                offer1: "Explicações individuais e em grupo (1º ciclo até Ensino Superior)",
                offer2: "Sala de estudo",
                offer3: "Psicologia",
                offer4: "Transporte contratualizado"
            },
            slide3: {
                title1: "+14 anos",
                title2: "de experiência",
                subtitle: "Uma referência no apoio escolar em Santa Maria da Feira, com milhares de alunos que alcançaram o sucesso."
            },
            slide4: {
                title1: "No coração de",
                title2: "Santa Maria da Feira",
                subtitle: "Junto à Escola Secundária e nas proximidades das principais áreas escolares.",
                cta: "Ver localização"
            }
        },
        services: {
            title: "Oferta",
            learnMore: "Saber mais",
            areasTitle: "Áreas de apoio",
            contactUs: "Contacte-nos",
            cycle1: {
                title: "Primeiro ciclo (1º - 4º ano)",
                desc: "Para os mais pequenos, a iniciar o percurso escolar, é importante criar as bases e hábitos de estudo.",
                modalTitle: "1º Ciclo",
                modalSubtitle: "1º - 4º anos",
                modalIntro: "Na entrada para a escola, a orientação é o mais importante. Nesta fase, é fundamental orientar o aluno e reforçar os conteúdos escolares. Trata-se de um ciclo preponderante para o sucesso do aluno, porque a base é tudo.",
                modalQuote: "\"Sem alicerces, não se constroem casas.\"",
                disciplines: [
                    "Português - Leitura, escrita e interpretação",
                    "Matemática - Cálculo e raciocínio lógico",
                    "Estudo do Meio - Ciências e sociedade",
                    "Inglês - Primeiros passos na língua",
                    "Apoio aos trabalhos de casa",
                    "Métodos e hábitos de estudo"
                ]
            },
            cycle2: {
                title: "Segundo ciclo (5º e 6º anos)",
                desc: "Nova fase, novos desafios: a dificuldade acresce e manter o ritmo é essencial.",
                modalTitle: "2º Ciclo",
                modalSubtitle: "5º e 6º anos",
                modalIntro: "Nova fase, novos desafios: a dificuldade acresce e manter o ritmo é essencial. É um período de transição importante onde o aluno precisa de consolidar conhecimentos e desenvolver autonomia no estudo.",
                modalQuote: "\"A persistência é o caminho do êxito.\"",
                disciplines: [
                    "Português - Gramática e interpretação",
                    "Matemática - Álgebra e geometria",
                    "Inglês - Consolidação da língua",
                    "Ciências Naturais",
                    "História e Geografia de Portugal",
                    "Técnicas de estudo e organização"
                ]
            },
            cycle3: {
                title: "Terceiro Ciclo (7º ao 9º ano)",
                desc: "Um dos ciclos mais exigentes: primeiro exames, primeiras escolhas e desenvolvimento da personalidade. Vamos dar resposta!",
                modalTitle: "3º Ciclo",
                modalSubtitle: "7º ao 9º ano",
                modalIntro: "Um dos ciclos mais exigentes: primeiros exames, primeiras escolhas e desenvolvimento da personalidade. É o momento de preparar o futuro e fazer escolhas importantes para o percurso académico.",
                modalQuote: "\"Vamos dar resposta aos desafios!\"",
                disciplines: [
                    "Português - Preparação para exame",
                    "Matemática - Preparação para exame",
                    "Inglês e outras línguas estrangeiras",
                    "Físico-Química",
                    "Ciências Naturais / Biologia",
                    "História e Geografia"
                ]
            },
            secondary: {
                title: "Ensino Secundário (10º ao 12º ano)",
                desc: "Mais decisões e mais exigência. O futuro começa a ganhar forma.",
                modalTitle: "Ensino Secundário",
                modalSubtitle: "10º - 12º anos",
                modalIntro: "A fase mais determinante do percurso escolar. Logo no 10.º ano, importa consciencializar o aluno para a importância de cada nota. A exigência é enorme e está em jogo a preparação do Futuro.",
                modalQuote: "As explicações são fundamentais para a obtenção dos resultados desejados. O Futuro começa aqui!",
                disciplines: [
                    "Português - Exame Nacional",
                    "Matemática A - Exame Nacional",
                    "Física e Química A",
                    "Biologia e Geologia",
                    "Economia e Contabilidade",
                    "História A e Geografia A"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            higher: {
                title: "Ensino Superior",
                desc: "Um mundo diferente; com desafios diferentes. Mas nós adoramos um bom desafio.",
                modalTitle: "Ensino Superior",
                modalSubtitle: "Apoio específico",
                modalIntro: "Na última fase de formação, continuamos ao lado dos alunos para, mais uma vez, acompanhar e apoiar naquilo que precisarem.",
                modalQuote: "Nunca é tarde para aprender.",
                disciplines: [
                    "Cálculo e Análise Matemática",
                    "Álgebra Linear",
                    "Estatística e Probabilidades",
                    "Física Universitária",
                    "Química Geral e Orgânica",
                    "Programação e Informática"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            psychology: {
                title: "Gabinete Psicologia",
                desc: "Mente sã, corpo são! Apoio psicológico para o bem-estar e sucesso académico.",
                modalTitle: "Gabinete de Psicologia",
                modalSubtitle: "Saúde mental: essencial para alcançar objetivos",
                modalIntro: "Desde problemas de concentração ao auxílio na escolha vocacional!",
                modalQuote: "Cuidar da mente é cuidar do futuro.",
                servicesTitle: "Serviços",
                servicesIntro: "Dispomos dos seguintes serviços de psicologia:",
                disciplines: [
                    "Psicologia clínica",
                    "Orientação vocacional",
                    "Área psicopedagógica",
                    "Aconselhamento aos pais/encarregados de educação"
                ]
            }
        },
        whyUs: {
            title: "Porque é o nosso centro a escolha certa para si?",
            subtitle: "Com mais de 10 anos de história, a SaberVirtual sempre foi uma referência para os nossos alunos.",
            item1: "Profissionais com experiência pedagógica",
            item2: "Espaço dinâmico, aberto e bem localizado",
            item3: "Atividades extra curriculares"
        },
        about: {
            title: "Sobre nós",
            p1: "O SaberVirtual é um centro de explicações com mais de 10 anos de tradição em Santa Maria da Feira. Esta empresa atua no ramo da educação e do apoio ao estudo, prestando funções sempre com profissionais de qualidade, formados na área de ensino que lecionam.",
            p2: "Sediado no centro de Santa Maria da Feira, junto da Escola Secundária de Santa Maria da Feira e nas proximidades das áreas escolares.",
            p3: "Este centro de explicações assenta em valores fundamentais: rigor, profissionalismo, competência, responsabilidade, clareza, confiança e empenho, condições essenciais para a preparação dos alunos desde o primeiro ciclo do ensino básico até à conclusão do ensino secundário.",
            p4: "A empresa conta com uma equipa jovem, dinâmica, especializada e proativa que se empenha e se dedica à formação dos alunos. Esta formação ocorre em explicações individuais ou em pequenos grupos, na gestão e apoio psicopedagógico e na orientação curricular dos alunos."
        },
        vision: {
            title: "Visão e Missão",
            mission: "Missão",
            mission1: "Oferecer condições para que os pais e os alunos atinjam os seus objetivos e o sucesso.",
            mission2: "Oferecer serviços de confiança e de excelência.",
            mission3: "Oferecer Explicações em todas as áreas do saber escolar.",
            mission4: "Manter a excelência na preparação escolar dos alunos.",
            objectives: "Objetivos",
            obj1: "Proporcionar um ambiente de estudo adequado e motivador.",
            obj2: "Desenvolver métodos de estudo eficazes e personalizados.",
            obj3: "Preparar os alunos para os desafios académicos e profissionais."
        },
        values: {
            success: "Sucesso",
            successDesc: "Ajudar os nossos explicandos a atingir e manter o sucesso escolar.",
            trust: "Confiança e excelência",
            trustDesc: "Atuamos há 14 anos! Ao longo da nossa história contamos com inúmeros casos de sucesso.",
            team: "Equipa",
            teamDesc: "Professores licenciados e experientes, colocados em escolas do Ensino Público - atualizados nos conteúdos, metodologias e metas curriculares.",
            method: "Método e rigor",
            methodDesc: "Trabalho rigoroso, contínuo e metódico que valoriza a apreensão, a interiorização e o completo entendimento dos conteúdos em vez da simples memorização.",
            exams: "Provas e exames nacionais",
            examsDesc: "Preocupação em proporcionar conhecimentos e aprendizagens para dar resposta a estes instrumentos de avaliação."
        },
        tutoring: {
            title: "Explicações",
            desc: "Serviço primordial e prioritário. Acreditamos nesta metodologia, porque é a mais eficaz. Permite um acompanhamento mais eficiente e uma perceção das reais necessidades dos alunos. As explicações podem ser individuais ou em pequenos grupos e são ministradas por professores experientes e licenciados.",
            online: "Online",
            onlineDesc: "Num momento de inovação tecnológica e no período que atravessamos, nesta Era Digital, estamos presente no espaço Virtual e disponibilizamos os nossos serviços online."
        },
        areas: {
            title: "Áreas de apoio",
            languages: "Línguas",
            languagesDesc: "Português, Inglês, Francês e Espanhol para todos os níveis de ensino.",
            math: "Matemática",
            mathDesc: "Apoio em matemática desde o primeiro ciclo até ao ensino secundário.",
            sciences: "Ciências",
            sciencesDesc: "Física, Química, Biologia e Geologia com acompanhamento especializado.",
            humanities: "Humanidades",
            humanitiesDesc: "História, Geografia, Filosofia e outras disciplinas da área humanística.",
            economics: "Economia",
            economicsDesc: "Economia, Contabilidade e Gestão para o ensino secundário e superior.",
            technology: "Tecnologia",
            technologyDesc: "Programação, Informática e competências digitais para todos os níveis."
        },
        recruitment: {
            title: "Recrutamento",
            q1: "És calmo interessado, exigente, dedicado?",
            q2: "Boa apresentação e consciência ética e deontológica?",
            q3: "Gostas de partilhar conhecimento e consegues fazê-lo de forma eficaz?",
            q4: "Tens vocação para o ensino?",
            q5: "Preocupas-te com a aprendizagem, evolução e autonomia dos teus alunos?",
            cta: "Envia um e-mail com o teu currículo para geral@sabervirtual.pt! Inclui a tua morada, data de nascimento e contato!"
        },
        contact: {
            title: "Contacte-nos",
            subtitle: "Venha descobrir o nosso centro de estudos."
        },
        testimonials: {
            title: "O que dizem os nossos alunos",
            t1: {
                text: "Graças ao SaberVirtual consegui melhorar significativamente as minhas notas. Os professores são muito dedicados e explicam de forma clara.",
                name: "Maria S.",
                role: "Aluna do 12º ano"
            },
            t2: {
                text: "O meu filho tinha dificuldades em matemática e agora está muito mais confiante. Recomendo a todos os pais!",
                name: "Ana P.",
                role: "Mãe de aluno"
            },
            t3: {
                text: "Ambiente fantástico e professores sempre disponíveis. Consegui entrar na universidade que queria!",
                name: "João R.",
                role: "Ex-aluno"
            }
        },
        footer: {
            rights: "Todos os direitos reservados."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact"
        },
        hero: {
            title1: "We prepare",
            title2: "your future",
            title3: "Providing you with",
            title4: "study and work techniques.",
            subtitle: "We work continuously to give you the necessary tools for the academic and professional world.",
            feature1: "+14 years of experience",
            feature2: "Qualified teachers",
            feature3: "Online and in-person classes",
            slide2: {
                title1: "More than a study space",
                title2: "Services",
                offer1: "Individual and group tutoring (1st cycle to Higher Education)",
                offer2: "Study room",
                offer3: "Psychology",
                offer4: "Contracted transportation"
            },
            slide3: {
                title1: "+14 years",
                title2: "of experience",
                subtitle: "A reference in school support in Santa Maria da Feira, with thousands of students who achieved success."
            },
            slide4: {
                title1: "In the heart of",
                title2: "Santa Maria da Feira",
                subtitle: "Next to the Secondary School and close to the main school areas.",
                cta: "View location"
            }
        },
        services: {
            title: "Services",
            learnMore: "Learn more",
            areasTitle: "Support areas",
            contactUs: "Contact us",
            cycle1: {
                title: "First cycle (1st - 4th grade)",
                desc: "For the youngest ones starting their school journey, it's important to build the foundations and study habits.",
                modalTitle: "1st Cycle",
                modalSubtitle: "1st - 4th grade",
                modalIntro: "When entering school, guidance is the most important thing. At this stage, it is essential to guide the student and reinforce school content. This is a crucial cycle for the student's success, because the foundation is everything.",
                modalQuote: "\"Without foundations, houses cannot be built.\"",
                disciplines: [
                    "Portuguese - Reading, writing and comprehension",
                    "Mathematics - Calculation and logical reasoning",
                    "Environmental Studies - Science and society",
                    "English - First steps in the language",
                    "Homework support",
                    "Study methods and habits"
                ]
            },
            cycle2: {
                title: "Second cycle (5th - 6th grade)",
                desc: "New phase, new challenges: difficulty increases and maintaining the rhythm is essential.",
                modalTitle: "2nd Cycle",
                modalSubtitle: "5th - 6th grade",
                modalIntro: "New phase, new challenges: difficulty increases and maintaining the rhythm is essential. It is an important transition period where the student needs to consolidate knowledge and develop study autonomy.",
                modalQuote: "\"Persistence is the path to success.\"",
                disciplines: [
                    "Portuguese - Grammar and comprehension",
                    "Mathematics - Algebra and geometry",
                    "English - Language consolidation",
                    "Natural Sciences",
                    "History and Geography of Portugal",
                    "Study techniques and organization"
                ]
            },
            cycle3: {
                title: "Third cycle (7th - 9th grade)",
                desc: "One of the most demanding cycles: first exams, first choices and personality development. We will respond!",
                modalTitle: "3rd Cycle",
                modalSubtitle: "7th - 9th grade",
                modalIntro: "One of the most demanding cycles: first exams, first choices and personality development. It's time to prepare for the future and make important choices for the academic path.",
                modalQuote: "\"We will respond to challenges!\"",
                disciplines: [
                    "Portuguese - Exam preparation",
                    "Mathematics - Exam preparation",
                    "English and other foreign languages",
                    "Physics-Chemistry",
                    "Natural Sciences / Biology",
                    "History and Geography"
                ]
            },
            secondary: {
                title: "Secondary (10th - 12th grade)",
                desc: "More decisions and more demands. The future begins to take shape.",
                modalTitle: "Secondary Education",
                modalSubtitle: "10th - 12th grade",
                modalIntro: "The most decisive phase of the school journey. Right from the 10th grade, it's important to make the student aware of the importance of each grade. The demands are enormous and the preparation for the Future is at stake.",
                modalQuote: "Tutoring is essential to achieve the desired results. The Future starts here!",
                disciplines: [
                    "Portuguese - National Exam",
                    "Mathematics A - National Exam",
                    "Physics and Chemistry A",
                    "Biology and Geology",
                    "Economics and Accounting",
                    "History A and Geography A"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            higher: {
                title: "Higher Education",
                desc: "A different world; with different challenges. But we love a good challenge.",
                modalTitle: "Higher Education",
                modalSubtitle: "Specific support",
                modalIntro: "In the final phase of education, we continue to stand by students to, once again, accompany and support them in whatever they need.",
                modalQuote: "It's never too late to learn.",
                disciplines: [
                    "Calculus and Mathematical Analysis",
                    "Linear Algebra",
                    "Statistics and Probability",
                    "University Physics",
                    "General and Organic Chemistry",
                    "Programming and Computer Science"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            psychology: {
                title: "Psychology Office",
                desc: "Healthy mind, healthy body! Psychological support for well-being and academic success.",
                modalTitle: "Psychology Office",
                modalSubtitle: "Mental health: essential to achieve goals",
                modalIntro: "From concentration problems to assistance in vocational choices!",
                modalQuote: "Taking care of the mind is taking care of the future.",
                servicesTitle: "Services",
                servicesIntro: "We offer the following psychology services:",
                disciplines: [
                    "Clinical psychology",
                    "Vocational guidance",
                    "Psychopedagogical area",
                    "Counseling for parents/guardians"
                ]
            }
        },
        whyUs: {
            title: "Why is our center the right choice for you?",
            subtitle: "With over 10 years of history, SaberVirtual has always been a reference for our students.",
            item1: "Professionals with pedagogical experience",
            item2: "Dynamic, open and well-located space",
            item3: "Extracurricular activities"
        },
        about: {
            title: "About Us",
            p1: "SaberVirtual is a tutoring center with over 10 years of tradition in Santa Maria da Feira. This company operates in the education and study support sector, always providing services with quality professionals, trained in the teaching area they lecture.",
            p2: "Located in the center of Santa Maria da Feira, next to Santa Maria da Feira Secondary School and near school areas.",
            p3: "This tutoring center is based on fundamental values: rigor, professionalism, competence, responsibility, clarity, trust and commitment, essential conditions for preparing students from the first cycle of basic education until the completion of secondary education.",
            p4: "The company has a young, dynamic, specialized and proactive team that strives and dedicates itself to student education. This training takes place in individual tutoring or small groups, in management and psychopedagogical support and curricular guidance for students."
        },
        vision: {
            title: "Vision and Mission",
            mission: "Mission",
            mission1: "Provide conditions for parents and students to achieve their goals and success.",
            mission2: "Offer trustworthy and excellent services.",
            mission3: "Offer tutoring in all areas of school knowledge.",
            mission4: "Maintain excellence in students' school preparation.",
            objectives: "Objectives",
            obj1: "Provide an adequate and motivating study environment.",
            obj2: "Develop effective and personalized study methods.",
            obj3: "Prepare students for academic and professional challenges."
        },
        values: {
            success: "Success",
            successDesc: "Help our students achieve and maintain school success.",
            trust: "Trust and excellence",
            trustDesc: "We've been operating for 14 years! Throughout our history, we have countless success stories.",
            team: "Team",
            teamDesc: "Licensed and experienced teachers, placed in Public Education schools - updated on content, methodologies and curricular goals.",
            method: "Method and rigor",
            methodDesc: "Rigorous, continuous and methodical work that values apprehension, internalization and complete understanding of content instead of simple memorization.",
            exams: "Tests and national exams",
            examsDesc: "Concern in providing knowledge and learning to respond to these assessment instruments."
        },
        tutoring: {
            title: "Tutoring",
            desc: "Primary and priority service. We believe in this methodology because it's the most effective. It allows for more efficient monitoring and perception of students' real needs. Tutoring can be individual or in small groups and is taught by experienced and licensed teachers.",
            online: "Online",
            onlineDesc: "In a moment of technological innovation and the period we are going through, in this Digital Era, we are present in the Virtual space and make our services available online."
        },
        areas: {
            title: "Support Areas",
            languages: "Languages",
            languagesDesc: "Portuguese, English, French and Spanish for all education levels.",
            math: "Mathematics",
            mathDesc: "Math support from first cycle to secondary education.",
            sciences: "Sciences",
            sciencesDesc: "Physics, Chemistry, Biology and Geology with specialized support.",
            humanities: "Humanities",
            humanitiesDesc: "History, Geography, Philosophy and other humanities subjects.",
            economics: "Economics",
            economicsDesc: "Economics, Accounting and Management for secondary and higher education.",
            technology: "Technology",
            technologyDesc: "Programming, Computer Science and digital skills for all levels."
        },
        recruitment: {
            title: "Recruitment",
            q1: "Are you calm, interested, demanding, dedicated?",
            q2: "Good presentation and ethical and deontological awareness?",
            q3: "Do you like sharing knowledge and can you do it effectively?",
            q4: "Do you have a vocation for teaching?",
            q5: "Do you care about your students' learning, evolution and autonomy?",
            cta: "Send an email with your resume to geral@sabervirtual.pt! Include your address, date of birth and contact!"
        },
        contact: {
            title: "Contact Us",
            subtitle: "Come discover our study center."
        },
        testimonials: {
            title: "What our students say",
            t1: {
                text: "Thanks to SaberVirtual I was able to significantly improve my grades. The teachers are very dedicated and explain clearly.",
                name: "Maria S.",
                role: "12th grade student"
            },
            t2: {
                text: "My son had difficulties in math and now he's much more confident. I recommend it to all parents!",
                name: "Ana P.",
                role: "Student's mother"
            },
            t3: {
                text: "Fantastic environment and teachers always available. I got into the university I wanted!",
                name: "João R.",
                role: "Former student"
            }
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre nosotros",
            services: "Servicios",
            contact: "Contacto"
        },
        hero: {
            title1: "Preparamos",
            title2: "tu futuro",
            title3: "Dotándote de técnicas de",
            title4: "estudio y trabajo.",
            subtitle: "Trabajamos continuamente para darte las herramientas necesarias para el mundo académico y profesional.",
            feature1: "+14 años de experiencia",
            feature2: "Profesores cualificados",
            feature3: "Clases online y presenciales",
            slide2: {
                title1: "Más que un espacio de estudio",
                title2: "Ofertas",
                offer1: "Clases individuales y en grupo (1º ciclo hasta Enseñanza Superior)",
                offer2: "Sala de estudio",
                offer3: "Psicología",
                offer4: "Transporte contratado"
            },
            slide3: {
                title1: "+14 años",
                title2: "de experiencia",
                subtitle: "Una referencia en el apoyo escolar en Santa Maria da Feira, con miles de alumnos que alcanzaron el éxito."
            },
            slide4: {
                title1: "En el corazón de",
                title2: "Santa Maria da Feira",
                subtitle: "Junto a la Escuela Secundaria y cerca de las principales áreas escolares.",
                cta: "Ver ubicación"
            }
        },
        services: {
            title: "Servicios",
            learnMore: "Saber más",
            areasTitle: "Áreas de apoyo",
            contactUs: "Contáctenos",
            cycle1: {
                title: "Primer ciclo (1º - 4º año)",
                desc: "Para los más pequeños que inician su recorrido escolar, es importante crear las bases y hábitos de estudio.",
                modalTitle: "1º Ciclo",
                modalSubtitle: "1º - 4º año",
                modalIntro: "En la entrada a la escuela, la orientación es lo más importante. En esta fase, es fundamental orientar al alumno y reforzar los contenidos escolares. Se trata de un ciclo preponderante para el éxito del alumno, porque la base es todo.",
                modalQuote: "\"Sin cimientos, no se construyen casas.\"",
                disciplines: [
                    "Portugués - Lectura, escritura e interpretación",
                    "Matemáticas - Cálculo y razonamiento lógico",
                    "Estudio del Medio - Ciencias y sociedad",
                    "Inglés - Primeros pasos en el idioma",
                    "Apoyo a los deberes",
                    "Métodos y hábitos de estudio"
                ]
            },
            cycle2: {
                title: "Segundo ciclo (5º - 6º año)",
                desc: "Nueva fase, nuevos desafíos: la dificultad aumenta y mantener el ritmo es esencial.",
                modalTitle: "2º Ciclo",
                modalSubtitle: "5º y 6º año",
                modalIntro: "Nueva fase, nuevos desafíos: la dificultad aumenta y mantener el ritmo es esencial. Es un período de transición importante donde el alumno necesita consolidar conocimientos y desarrollar autonomía en el estudio.",
                modalQuote: "\"La persistencia es el camino del éxito.\"",
                disciplines: [
                    "Portugués - Gramática e interpretación",
                    "Matemáticas - Álgebra y geometría",
                    "Inglés - Consolidación del idioma",
                    "Ciencias Naturales",
                    "Historia y Geografía de Portugal",
                    "Técnicas de estudio y organización"
                ]
            },
            cycle3: {
                title: "Tercer ciclo (7º - 9º año)",
                desc: "Uno de los ciclos más exigentes: primeros exámenes, primeras elecciones y desarrollo de la personalidad. ¡Vamos a responder!",
                modalTitle: "3º Ciclo",
                modalSubtitle: "7º al 9º año",
                modalIntro: "Uno de los ciclos más exigentes: primeros exámenes, primeras elecciones y desarrollo de la personalidad. Es el momento de preparar el futuro y hacer elecciones importantes para el recorrido académico.",
                modalQuote: "\"¡Vamos a responder a los desafíos!\"",
                disciplines: [
                    "Portugués - Preparación para examen",
                    "Matemáticas - Preparación para examen",
                    "Inglés y otros idiomas extranjeros",
                    "Física-Química",
                    "Ciencias Naturales / Biología",
                    "Historia y Geografía"
                ]
            },
            secondary: {
                title: "Secundaria (10º - 12º año)",
                desc: "Más decisiones y más exigencia. El futuro comienza a tomar forma.",
                modalTitle: "Educación Secundaria",
                modalSubtitle: "10º - 12º años",
                modalIntro: "La fase más determinante del recorrido escolar. Ya en el 10º año, es importante concienciar al alumno sobre la importancia de cada nota. La exigencia es enorme y está en juego la preparación del Futuro.",
                modalQuote: "Las clases particulares son fundamentales para obtener los resultados deseados. ¡El Futuro comienza aquí!",
                disciplines: [
                    "Portugués - Examen Nacional",
                    "Matemáticas A - Examen Nacional",
                    "Física y Química A",
                    "Biología y Geología",
                    "Economía y Contabilidad",
                    "Historia A y Geografía A"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            higher: {
                title: "Educación Superior",
                desc: "Un mundo diferente; con desafíos diferentes. Pero nos encanta un buen desafío.",
                modalTitle: "Educación Superior",
                modalSubtitle: "Apoyo específico",
                modalIntro: "En la última fase de formación, continuamos al lado de los alumnos para, una vez más, acompañar y apoyar en lo que necesiten.",
                modalQuote: "Nunca es tarde para aprender.",
                disciplines: [
                    "Cálculo y Análisis Matemático",
                    "Álgebra Lineal",
                    "Estadística y Probabilidades",
                    "Física Universitaria",
                    "Química General y Orgánica",
                    "Programación e Informática"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            psychology: {
                title: "Gabinete de Psicología",
                desc: "¡Mente sana, cuerpo sano! Apoyo psicológico para el bienestar y éxito académico.",
                modalTitle: "Gabinete de Psicología",
                modalSubtitle: "Salud mental: esencial para alcanzar objetivos",
                modalIntro: "¡Desde problemas de concentración hasta ayuda en la elección vocacional!",
                modalQuote: "Cuidar la mente es cuidar el futuro.",
                servicesTitle: "Servicios",
                servicesIntro: "Disponemos de los siguientes servicios de psicología:",
                disciplines: [
                    "Psicología clínica",
                    "Orientación vocacional",
                    "Área psicopedagógica",
                    "Asesoramiento a padres/tutores"
                ]
            }
        },
        whyUs: {
            title: "¿Por qué nuestro centro es la elección correcta para usted?",
            subtitle: "Con más de 10 años de historia, SaberVirtual siempre ha sido una referencia para nuestros alumnos.",
            item1: "Profesionales con experiencia pedagógica",
            item2: "Espacio dinámico, abierto y bien ubicado",
            item3: "Actividades extracurriculares"
        },
        about: {
            title: "Sobre nosotros",
            p1: "SaberVirtual es un centro de clases particulares con más de 10 años de tradición en Santa Maria da Feira. Esta empresa actúa en el sector de la educación y apoyo al estudio, prestando servicios siempre con profesionales de calidad, formados en el área de enseñanza que imparten.",
            p2: "Ubicado en el centro de Santa Maria da Feira, junto a la Escuela Secundaria de Santa Maria da Feira y cerca de las áreas escolares.",
            p3: "Este centro de clases particulares se basa en valores fundamentales: rigor, profesionalismo, competencia, responsabilidad, claridad, confianza y compromiso, condiciones esenciales para la preparación de los alumnos desde el primer ciclo de educación básica hasta la conclusión de la educación secundaria.",
            p4: "La empresa cuenta con un equipo joven, dinámico, especializado y proactivo que se esfuerza y se dedica a la formación de los alumnos. Esta formación se realiza en clases individuales o en pequeños grupos, en la gestión y apoyo psicopedagógico y en la orientación curricular de los alumnos."
        },
        vision: {
            title: "Visión y Misión",
            mission: "Misión",
            mission1: "Ofrecer condiciones para que los padres y los alumnos alcancen sus objetivos y el éxito.",
            mission2: "Ofrecer servicios de confianza y excelencia.",
            mission3: "Ofrecer clases particulares en todas las áreas del saber escolar.",
            mission4: "Mantener la excelencia en la preparación escolar de los alumnos.",
            objectives: "Objetivos",
            obj1: "Proporcionar un ambiente de estudio adecuado y motivador.",
            obj2: "Desarrollar métodos de estudio eficaces y personalizados.",
            obj3: "Preparar a los alumnos para los desafíos académicos y profesionales."
        },
        values: {
            success: "Éxito",
            successDesc: "Ayudar a nuestros alumnos a alcanzar y mantener el éxito escolar.",
            trust: "Confianza y excelencia",
            trustDesc: "¡Llevamos 14 años! A lo largo de nuestra historia contamos con innumerables casos de éxito.",
            team: "Equipo",
            teamDesc: "Profesores licenciados y experimentados, colocados en escuelas de Enseñanza Pública - actualizados en contenidos, metodologías y metas curriculares.",
            method: "Método y rigor",
            methodDesc: "Trabajo riguroso, continuo y metódico que valora la aprehensión, la interiorización y la comprensión completa de los contenidos en lugar de la simple memorización.",
            exams: "Pruebas y exámenes nacionales",
            examsDesc: "Preocupación por proporcionar conocimientos y aprendizajes para dar respuesta a estos instrumentos de evaluación."
        },
        tutoring: {
            title: "Clases particulares",
            desc: "Servicio primordial y prioritario. Creemos en esta metodología porque es la más eficaz. Permite un acompañamiento más eficiente y una percepción de las necesidades reales de los alumnos. Las clases pueden ser individuales o en pequeños grupos y son impartidas por profesores experimentados y licenciados.",
            online: "Online",
            onlineDesc: "En un momento de innovación tecnológica y en el período que atravesamos, en esta Era Digital, estamos presentes en el espacio Virtual y ponemos a disposición nuestros servicios online."
        },
        areas: {
            title: "Áreas de apoyo",
            languages: "Idiomas",
            languagesDesc: "Portugués, Inglés, Francés y Español para todos los niveles de enseñanza.",
            math: "Matemáticas",
            mathDesc: "Apoyo en matemáticas desde el primer ciclo hasta la educación secundaria.",
            sciences: "Ciencias",
            sciencesDesc: "Física, Química, Biología y Geología con acompañamiento especializado.",
            humanities: "Humanidades",
            humanitiesDesc: "Historia, Geografía, Filosofía y otras asignaturas del área humanística.",
            economics: "Economía",
            economicsDesc: "Economía, Contabilidad y Gestión para educación secundaria y superior.",
            technology: "Tecnología",
            technologyDesc: "Programación, Informática y competencias digitales para todos los niveles."
        },
        recruitment: {
            title: "Reclutamiento",
            q1: "¿Eres tranquilo, interesado, exigente, dedicado?",
            q2: "¿Buena presentación y conciencia ética y deontológica?",
            q3: "¿Te gusta compartir conocimiento y puedes hacerlo de forma eficaz?",
            q4: "¿Tienes vocación para la enseñanza?",
            q5: "¿Te preocupas por el aprendizaje, evolución y autonomía de tus alumnos?",
            cta: "¡Envía un e-mail con tu currículum a geral@sabervirtual.pt! ¡Incluye tu dirección, fecha de nacimiento y contacto!"
        },
        contact: {
            title: "Contáctenos",
            subtitle: "Venga a descubrir nuestro centro de estudios."
        },
        testimonials: {
            title: "Lo que dicen nuestros alumnos",
            t1: {
                text: "Gracias a SaberVirtual logré mejorar significativamente mis notas. Los profesores son muy dedicados y explican de forma clara.",
                name: "Maria S.",
                role: "Alumna de 12º año"
            },
            t2: {
                text: "Mi hijo tenía dificultades en matemáticas y ahora está mucho más seguro. ¡Lo recomiendo a todos los padres!",
                name: "Ana P.",
                role: "Madre de alumno"
            },
            t3: {
                text: "Ambiente fantástico y profesores siempre disponibles. ¡Conseguí entrar en la universidad que quería!",
                name: "João R.",
                role: "Ex-alumno"
            }
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            contact: "Contact"
        },
        hero: {
            title1: "Nous préparons",
            title2: "votre avenir",
            title3: "En vous dotant de techniques",
            title4: "d'étude et de travail.",
            subtitle: "Nous travaillons continuellement pour vous donner les outils nécessaires pour le monde académique et professionnel.",
            feature1: "+14 ans d'expérience",
            feature2: "Enseignants qualifiés",
            feature3: "Cours en ligne et en présentiel",
            slide2: {
                title1: "Plus qu'un espace d'étude",
                title2: "Services",
                offer1: "Cours particuliers et en groupe (1er cycle jusqu'à l'Enseignement Supérieur)",
                offer2: "Salle d'étude",
                offer3: "Psychologie",
                offer4: "Transport contractualisé"
            },
            slide3: {
                title1: "+14 ans",
                title2: "d'expérience",
                subtitle: "Une référence dans le soutien scolaire à Santa Maria da Feira, avec des milliers d'élèves qui ont réussi."
            },
            slide4: {
                title1: "Au cœur de",
                title2: "Santa Maria da Feira",
                subtitle: "À côté du Lycée et à proximité des principales zones scolaires.",
                cta: "Voir l'emplacement"
            }
        },
        services: {
            title: "Services",
            learnMore: "En savoir plus",
            areasTitle: "Domaines de soutien",
            contactUs: "Contactez-nous",
            cycle1: {
                title: "Premier cycle (1ère - 4ème année)",
                desc: "Pour les plus jeunes qui commencent leur parcours scolaire, il est important de créer les bases et les habitudes d'étude.",
                modalTitle: "1er Cycle",
                modalSubtitle: "1ère - 4ème année",
                modalIntro: "À l'entrée à l'école, l'orientation est le plus important. À ce stade, il est essentiel de guider l'élève et de renforcer les contenus scolaires. C'est un cycle prépondérant pour le succès de l'élève, car la base est tout.",
                modalQuote: "\"Sans fondations, on ne construit pas de maisons.\"",
                disciplines: [
                    "Portugais - Lecture, écriture et compréhension",
                    "Mathématiques - Calcul et raisonnement logique",
                    "Étude du Milieu - Sciences et société",
                    "Anglais - Premiers pas dans la langue",
                    "Aide aux devoirs",
                    "Méthodes et habitudes d'étude"
                ]
            },
            cycle2: {
                title: "Deuxième cycle (5ème - 6ème année)",
                desc: "Nouvelle phase, nouveaux défis : la difficulté augmente et maintenir le rythme est essentiel.",
                modalTitle: "2ème Cycle",
                modalSubtitle: "5ème et 6ème année",
                modalIntro: "Nouvelle phase, nouveaux défis : la difficulté augmente et maintenir le rythme est essentiel. C'est une période de transition importante où l'élève doit consolider ses connaissances et développer son autonomie dans l'étude.",
                modalQuote: "\"La persévérance est le chemin du succès.\"",
                disciplines: [
                    "Portugais - Grammaire et compréhension",
                    "Mathématiques - Algèbre et géométrie",
                    "Anglais - Consolidation de la langue",
                    "Sciences Naturelles",
                    "Histoire et Géographie du Portugal",
                    "Techniques d'étude et organisation"
                ]
            },
            cycle3: {
                title: "Troisième cycle (7ème - 9ème année)",
                desc: "Un des cycles les plus exigeants : premiers examens, premiers choix et développement de la personnalité. Nous allons répondre !",
                modalTitle: "3ème Cycle",
                modalSubtitle: "7ème - 9ème année",
                modalIntro: "Un des cycles les plus exigeants : premiers examens, premiers choix et développement de la personnalité. C'est le moment de préparer l'avenir et de faire des choix importants pour le parcours académique.",
                modalQuote: "\"Nous allons répondre aux défis !\"",
                disciplines: [
                    "Portugais - Préparation à l'examen",
                    "Mathématiques - Préparation à l'examen",
                    "Anglais et autres langues étrangères",
                    "Physique-Chimie",
                    "Sciences Naturelles / Biologie",
                    "Histoire et Géographie"
                ]
            },
            secondary: {
                title: "Secondaire (10ème - 12ème année)",
                desc: "Plus de décisions et plus d'exigence. L'avenir commence à prendre forme.",
                modalTitle: "Enseignement Secondaire",
                modalSubtitle: "10ème - 12ème année",
                modalIntro: "La phase la plus déterminante du parcours scolaire. Dès la 10ème année, il est important de sensibiliser l'élève à l'importance de chaque note. L'exigence est énorme et la préparation de l'Avenir est en jeu.",
                modalQuote: "Les cours particuliers sont essentiels pour obtenir les résultats souhaités. L'Avenir commence ici !",
                disciplines: [
                    "Portugais - Examen National",
                    "Mathématiques A - Examen National",
                    "Physique et Chimie A",
                    "Biologie et Géologie",
                    "Économie et Comptabilité",
                    "Histoire A et Géographie A"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            higher: {
                title: "Enseignement Supérieur",
                desc: "Un monde différent ; avec des défis différents. Mais nous adorons un bon défi.",
                modalTitle: "Enseignement Supérieur",
                modalSubtitle: "Soutien spécifique",
                modalIntro: "Dans la dernière phase de formation, nous continuons aux côtés des étudiants pour, une fois de plus, accompagner et soutenir ce dont ils ont besoin.",
                modalQuote: "Il n'est jamais trop tard pour apprendre.",
                disciplines: [
                    "Calcul et Analyse Mathématique",
                    "Algèbre Linéaire",
                    "Statistiques et Probabilités",
                    "Physique Universitaire",
                    "Chimie Générale et Organique",
                    "Programmation et Informatique"
                ],
                framework: {
                    title: "Curriculum Framework",
                    items: [
                        "Children's developmental needs",
                        "Physical, affective, social and aesthetic aspects for children's holistic development",
                        "Relate to children's experiences and interests",
                        "Foster children's knowledge, skills and attitudes",
                        "Pre-Primary level is customised to meet the requirements of young students",
                        "Cater to the cognitive, language"
                    ]
                }
            },
            psychology: {
                title: "Cabinet de Psychologie",
                desc: "Esprit sain, corps sain ! Soutien psychologique pour le bien-être et la réussite académique.",
                modalTitle: "Cabinet de Psychologie",
                modalSubtitle: "Santé mentale : essentielle pour atteindre les objectifs",
                modalIntro: "Des problèmes de concentration à l'aide au choix vocationnel !",
                modalQuote: "Prendre soin de l'esprit, c'est prendre soin de l'avenir.",
                servicesTitle: "Services",
                servicesIntro: "Nous proposons les services de psychologie suivants :",
                disciplines: [
                    "Psychologie clinique",
                    "Orientation professionnelle",
                    "Domaine psychopédagogique",
                    "Conseil aux parents/tuteurs"
                ]
            }
        },
        whyUs: {
            title: "Pourquoi notre centre est-il le bon choix pour vous ?",
            subtitle: "Avec plus de 10 ans d'histoire, SaberVirtual a toujours été une référence pour nos élèves.",
            item1: "Professionnels avec expérience pédagogique",
            item2: "Espace dynamique, ouvert et bien situé",
            item3: "Activités extrascolaires"
        },
        about: {
            title: "À propos de nous",
            p1: "SaberVirtual est un centre de cours particuliers avec plus de 10 ans de tradition à Santa Maria da Feira. Cette entreprise opère dans le secteur de l'éducation et du soutien scolaire, offrant toujours des services avec des professionnels de qualité, formés dans le domaine d'enseignement qu'ils dispensent.",
            p2: "Situé au centre de Santa Maria da Feira, à côté de l'École Secondaire de Santa Maria da Feira et à proximité des zones scolaires.",
            p3: "Ce centre de cours particuliers repose sur des valeurs fondamentales : rigueur, professionnalisme, compétence, responsabilité, clarté, confiance et engagement, conditions essentielles pour la préparation des élèves du premier cycle de l'enseignement de base jusqu'à la fin de l'enseignement secondaire.",
            p4: "L'entreprise dispose d'une équipe jeune, dynamique, spécialisée et proactive qui s'engage et se consacre à la formation des élèves. Cette formation se déroule en cours individuels ou en petits groupes, dans la gestion et le soutien psychopédagogique et l'orientation curriculaire des élèves."
        },
        vision: {
            title: "Vision et Mission",
            mission: "Mission",
            mission1: "Offrir les conditions pour que les parents et les élèves atteignent leurs objectifs et le succès.",
            mission2: "Offrir des services de confiance et d'excellence.",
            mission3: "Offrir des cours particuliers dans tous les domaines du savoir scolaire.",
            mission4: "Maintenir l'excellence dans la préparation scolaire des élèves.",
            objectives: "Objectifs",
            obj1: "Fournir un environnement d'étude adéquat et motivant.",
            obj2: "Développer des méthodes d'étude efficaces et personnalisées.",
            obj3: "Préparer les élèves aux défis académiques et professionnels."
        },
        values: {
            success: "Succès",
            successDesc: "Aider nos élèves à atteindre et maintenir le succès scolaire.",
            trust: "Confiance et excellence",
            trustDesc: "Nous sommes actifs depuis 14 ans ! Tout au long de notre histoire, nous avons d'innombrables cas de succès.",
            team: "Équipe",
            teamDesc: "Enseignants diplômés et expérimentés, placés dans des écoles d'Enseignement Public - mis à jour sur les contenus, méthodologies et objectifs curriculaires.",
            method: "Méthode et rigueur",
            methodDesc: "Travail rigoureux, continu et méthodique qui valorise l'appréhension, l'intériorisation et la compréhension complète des contenus au lieu de la simple mémorisation.",
            exams: "Épreuves et examens nationaux",
            examsDesc: "Souci de fournir des connaissances et des apprentissages pour répondre à ces instruments d'évaluation."
        },
        tutoring: {
            title: "Cours particuliers",
            desc: "Service primordial et prioritaire. Nous croyons en cette méthodologie car c'est la plus efficace. Elle permet un suivi plus efficace et une perception des besoins réels des élèves. Les cours peuvent être individuels ou en petits groupes et sont dispensés par des enseignants expérimentés et diplômés.",
            online: "En ligne",
            onlineDesc: "Dans un moment d'innovation technologique et dans la période que nous traversons, dans cette Ère Numérique, nous sommes présents dans l'espace Virtuel et mettons nos services à disposition en ligne."
        },
        areas: {
            title: "Domaines de soutien",
            languages: "Langues",
            languagesDesc: "Portugais, Anglais, Français et Espagnol pour tous les niveaux d'enseignement.",
            math: "Mathématiques",
            mathDesc: "Soutien en mathématiques du premier cycle à l'enseignement secondaire.",
            sciences: "Sciences",
            sciencesDesc: "Physique, Chimie, Biologie et Géologie avec un accompagnement spécialisé.",
            humanities: "Humanités",
            humanitiesDesc: "Histoire, Géographie, Philosophie et autres matières du domaine humaniste.",
            economics: "Économie",
            economicsDesc: "Économie, Comptabilité et Gestion pour l'enseignement secondaire et supérieur.",
            technology: "Technologie",
            technologyDesc: "Programmation, Informatique et compétences numériques pour tous les niveaux."
        },
        recruitment: {
            title: "Recrutement",
            q1: "Êtes-vous calme, intéressé, exigeant, dévoué ?",
            q2: "Bonne présentation et conscience éthique et déontologique ?",
            q3: "Aimez-vous partager les connaissances et pouvez-vous le faire efficacement ?",
            q4: "Avez-vous une vocation pour l'enseignement ?",
            q5: "Vous souciez-vous de l'apprentissage, de l'évolution et de l'autonomie de vos élèves ?",
            cta: "Envoyez un e-mail avec votre CV à geral@sabervirtual.pt ! Incluez votre adresse, date de naissance et contact !"
        },
        contact: {
            title: "Contactez-nous",
            subtitle: "Venez découvrir notre centre d'études."
        },
        testimonials: {
            title: "Ce que disent nos élèves",
            t1: {
                text: "Grâce à SaberVirtual, j'ai pu améliorer significativement mes notes. Les professeurs sont très dévoués et expliquent clairement.",
                name: "Maria S.",
                role: "Élève de terminale"
            },
            t2: {
                text: "Mon fils avait des difficultés en mathématiques et maintenant il est beaucoup plus confiant. Je le recommande à tous les parents !",
                name: "Ana P.",
                role: "Mère d'élève"
            },
            t3: {
                text: "Environnement fantastique et professeurs toujours disponibles. J'ai réussi à entrer dans l'université de mon choix !",
                name: "João R.",
                role: "Ancien élève"
            }
        },
        footer: {
            rights: "Tous droits réservés."
        }
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über uns",
            services: "Angebote",
            contact: "Kontakt"
        },
        hero: {
            title1: "Wir bereiten",
            title2: "deine Zukunft vor",
            title3: "Wir vermitteln dir",
            title4: "Lern- und Arbeitstechniken.",
            subtitle: "Wir arbeiten kontinuierlich daran, dir die notwendigen Werkzeuge für die akademische und berufliche Welt zu geben.",
            feature1: "+14 Jahre Erfahrung",
            feature2: "Qualifizierte Lehrer",
            feature3: "Online- und Präsenzunterricht",
            slide2: {
                title1: "Mehr als ein Lernraum",
                title2: "Angebote",
                offer1: "Einzel- und Gruppenunterricht (1. Zyklus bis Hochschulbildung)",
                offer2: "Lernraum",
                offer3: "Psychologie",
                offer4: "Vertraglich vereinbarter Transport"
            },
            slide3: {
                title1: "+14 Jahre",
                title2: "Erfahrung",
                subtitle: "Eine Referenz in der schulischen Unterstützung in Santa Maria da Feira, mit Tausenden von Schülern, die Erfolg hatten."
            },
            slide4: {
                title1: "Im Herzen von",
                title2: "Santa Maria da Feira",
                subtitle: "Neben der Sekundarschule und in der Nähe der wichtigsten Schulgebiete.",
                cta: "Standort anzeigen"
            }
        },
        services: {
            title: "Angebote",
            learnMore: "Mehr erfahren",
            areasTitle: "Unterstützungsbereiche",
            contactUs: "Kontaktieren Sie uns",
            cycle1: {
                title: "Erste Stufe (1. - 4. Klasse)",
                desc: "Für die Jüngsten, die ihre Schullaufbahn beginnen, ist es wichtig, die Grundlagen und Lerngewohnheiten zu schaffen.",
                modalTitle: "1. Zyklus",
                modalSubtitle: "1. - 4. Klasse",
                modalIntro: "Beim Schuleintritt ist die Orientierung am wichtigsten. In dieser Phase ist es wesentlich, den Schüler zu führen und die Schulinhalte zu verstärken. Dies ist ein entscheidender Zyklus für den Erfolg des Schülers, denn die Grundlage ist alles.",
                modalQuote: "Ohne Fundament kann man keine Häuser bauen.",
                disciplines: [
                    "Portugiesisch - Lesen, Schreiben und Verstehen",
                    "Mathematik - Rechnen und logisches Denken",
                    "Sachkunde - Wissenschaft und Gesellschaft",
                    "Englisch - Erste Schritte in der Sprache",
                    "Hausaufgabenhilfe",
                    "Lernmethoden und -gewohnheiten"
                ]
            },
            cycle2: {
                title: "Zweite Stufe (5. - 6. Klasse)",
                desc: "Neue Phase, neue Herausforderungen: Die Schwierigkeit steigt und das Tempo zu halten ist wesentlich.",
                modalTitle: "2. Zyklus",
                modalSubtitle: "5. und 6. Klasse",
                modalIntro: "Neue Phase, neue Herausforderungen: Die Schwierigkeit steigt und das Tempo zu halten ist wesentlich. Es ist eine wichtige Übergangszeit, in der der Schüler Wissen festigen und Lernautonomie entwickeln muss.",
                modalQuote: "Ausdauer ist der Weg zum Erfolg.",
                disciplines: [
                    "Portugiesisch - Grammatik und Textverständnis",
                    "Mathematik - Algebra und Geometrie",
                    "Englisch - Sprachfestigung",
                    "Naturwissenschaften",
                    "Geschichte und Geographie Portugals",
                    "Lerntechniken und Organisation"
                ]
            },
            cycle3: {
                title: "Dritte Stufe (7. - 9. Klasse)",
                desc: "Einer der anspruchsvollsten Zyklen: erste Prüfungen, erste Entscheidungen und Persönlichkeitsentwicklung. Wir werden antworten!",
                modalTitle: "3. Zyklus",
                modalSubtitle: "7. - 9. Klasse",
                modalIntro: "Einer der anspruchsvollsten Zyklen: erste Prüfungen, erste Entscheidungen und Persönlichkeitsentwicklung. Es ist Zeit, die Zukunft vorzubereiten und wichtige Entscheidungen für den akademischen Weg zu treffen.",
                modalQuote: "Wir werden den Herausforderungen begegnen!",
                disciplines: [
                    "Portugiesisch - Prüfungsvorbereitung",
                    "Mathematik - Prüfungsvorbereitung",
                    "Englisch und andere Fremdsprachen",
                    "Physik-Chemie",
                    "Naturwissenschaften / Biologie",
                    "Geschichte und Geographie"
                ]
            },
            secondary: {
                title: "Sekundarstufe (10. - 12. Klasse)",
                desc: "Mehr Entscheidungen und mehr Anforderungen. Die Zukunft beginnt Gestalt anzunehmen.",
                modalTitle: "Sekundarstufe",
                modalSubtitle: "10. - 12. Klasse",
                modalIntro: "Die entscheidendste Phase des Schulwegs. Schon ab der 10. Klasse ist es wichtig, den Schüler für die Bedeutung jeder Note zu sensibilisieren. Die Anforderungen sind enorm und die Vorbereitung auf die Zukunft steht auf dem Spiel.",
                modalQuote: "Nachhilfe ist grundlegend für das Erreichen der gewünschten Ergebnisse. Die Zukunft beginnt hier!",
                disciplines: [
                    "Portugiesisch - Nationale Prüfung",
                    "Mathematik A - Nationale Prüfung",
                    "Physik und Chemie A",
                    "Biologie und Geologie",
                    "Wirtschaft und Buchhaltung",
                    "Geschichte A und Geographie A"
                ]
            },
            higher: {
                title: "Hochschulbildung",
                desc: "Eine andere Welt; mit anderen Herausforderungen. Aber wir lieben eine gute Herausforderung.",
                modalTitle: "Hochschulbildung",
                modalSubtitle: "Spezifische Unterstützung",
                modalIntro: "In der letzten Ausbildungsphase stehen wir weiterhin an der Seite der Studenten, um sie erneut zu begleiten und bei allem zu unterstützen, was sie brauchen.",
                modalQuote: "Es ist nie zu spät zum Lernen.",
                disciplines: [
                    "Analysis und Mathematische Analyse",
                    "Lineare Algebra",
                    "Statistik und Wahrscheinlichkeit",
                    "Universitätsphysik",
                    "Allgemeine und Organische Chemie",
                    "Programmierung und Informatik"
                ]
            },
            psychology: {
                title: "Psychologiepraxis",
                desc: "Gesunder Geist, gesunder Körper! Psychologische Unterstützung für Wohlbefinden und akademischen Erfolg.",
                modalTitle: "Psychologiepraxis",
                modalSubtitle: "Psychische Gesundheit: wesentlich für das Erreichen von Zielen",
                modalIntro: "Von Konzentrationsproblemen bis zur Hilfe bei der Berufswahl!",
                modalQuote: "Für den Geist zu sorgen bedeutet, für die Zukunft zu sorgen.",
                servicesTitle: "Dienstleistungen",
                servicesIntro: "Wir bieten folgende Psychologie-Dienstleistungen an:",
                disciplines: [
                    "Klinische Psychologie",
                    "Berufsberatung",
                    "Psychopädagogischer Bereich",
                    "Beratung für Eltern/Erziehungsberechtigte"
                ]
            }
        },
        whyUs: {
            title: "Warum ist unser Zentrum die richtige Wahl für Sie?",
            subtitle: "Mit über 10 Jahren Geschichte war SaberVirtual immer eine Referenz für unsere Schüler.",
            item1: "Fachkräfte mit pädagogischer Erfahrung",
            item2: "Dynamischer, offener und gut gelegener Raum",
            item3: "Außerschulische Aktivitäten"
        },
        about: {
            title: "Über uns",
            p1: "SaberVirtual ist ein Nachhilfezentrum mit über 10 Jahren Tradition in Santa Maria da Feira. Dieses Unternehmen ist im Bereich Bildung und Lernunterstützung tätig und bietet stets Dienstleistungen mit qualifizierten Fachkräften an, die in ihrem Unterrichtsfach ausgebildet sind.",
            p2: "Im Zentrum von Santa Maria da Feira gelegen, neben der Sekundarschule Santa Maria da Feira und in der Nähe von Schulgebieten.",
            p3: "Dieses Nachhilfezentrum basiert auf grundlegenden Werten: Strenge, Professionalität, Kompetenz, Verantwortung, Klarheit, Vertrauen und Engagement - wesentliche Voraussetzungen für die Vorbereitung der Schüler von der Grundschule bis zum Abschluss der Sekundarstufe.",
            p4: "Das Unternehmen verfügt über ein junges, dynamisches, spezialisiertes und proaktives Team, das sich der Ausbildung der Schüler widmet. Diese Ausbildung erfolgt in Einzelunterricht oder Kleingruppen, in der Verwaltung und psychopädagogischen Unterstützung sowie in der Lehrplanberatung der Schüler."
        },
        vision: {
            title: "Vision und Mission",
            mission: "Mission",
            mission1: "Bedingungen bieten, damit Eltern und Schüler ihre Ziele und Erfolg erreichen.",
            mission2: "Vertrauenswürdige und exzellente Dienstleistungen anbieten.",
            mission3: "Nachhilfe in allen Bereichen des schulischen Wissens anbieten.",
            mission4: "Exzellenz in der schulischen Vorbereitung der Schüler aufrechterhalten.",
            objectives: "Ziele",
            obj1: "Eine angemessene und motivierende Lernumgebung bieten.",
            obj2: "Effektive und personalisierte Lernmethoden entwickeln.",
            obj3: "Schüler auf akademische und berufliche Herausforderungen vorbereiten."
        },
        values: {
            success: "Erfolg",
            successDesc: "Unseren Schülern helfen, schulischen Erfolg zu erreichen und zu erhalten.",
            trust: "Vertrauen und Exzellenz",
            trustDesc: "Wir sind seit 14 Jahren tätig! Im Laufe unserer Geschichte haben wir unzählige Erfolgsgeschichten.",
            team: "Team",
            teamDesc: "Lizenzierte und erfahrene Lehrer, die an öffentlichen Schulen tätig sind - aktuell in Inhalten, Methoden und Lehrplanzielen.",
            method: "Methode und Strenge",
            methodDesc: "Strenge, kontinuierliche und methodische Arbeit, die das Erfassen, Verinnerlichen und vollständige Verstehen der Inhalte statt einfachem Auswendiglernen wertschätzt.",
            exams: "Tests und nationale Prüfungen",
            examsDesc: "Bemüht, Wissen und Lernen bereitzustellen, um auf diese Bewertungsinstrumente zu reagieren."
        },
        tutoring: {
            title: "Nachhilfe",
            desc: "Primärer und vorrangiger Service. Wir glauben an diese Methodik, weil sie am effektivsten ist. Sie ermöglicht eine effizientere Betreuung und Wahrnehmung der tatsächlichen Bedürfnisse der Schüler. Der Unterricht kann einzeln oder in kleinen Gruppen erfolgen und wird von erfahrenen und lizenzierten Lehrern erteilt.",
            online: "Online",
            onlineDesc: "In einer Zeit technologischer Innovation und in der Periode, die wir durchleben, in diesem digitalen Zeitalter, sind wir im virtuellen Raum präsent und bieten unsere Dienste online an."
        },
        areas: {
            title: "Unterstützungsbereiche",
            languages: "Sprachen",
            languagesDesc: "Portugiesisch, Englisch, Französisch und Spanisch für alle Bildungsstufen.",
            math: "Mathematik",
            mathDesc: "Mathe-Unterstützung von der Grundschule bis zur Sekundarstufe.",
            sciences: "Naturwissenschaften",
            sciencesDesc: "Physik, Chemie, Biologie und Geologie mit spezialisierter Betreuung.",
            humanities: "Geisteswissenschaften",
            humanitiesDesc: "Geschichte, Geographie, Philosophie und andere geisteswissenschaftliche Fächer.",
            economics: "Wirtschaft",
            economicsDesc: "Wirtschaft, Buchhaltung und Management für Sekundarstufe und Hochschulbildung.",
            technology: "Technologie",
            technologyDesc: "Programmierung, Informatik und digitale Kompetenzen für alle Stufen."
        },
        recruitment: {
            title: "Rekrutierung",
            q1: "Bist du ruhig, interessiert, anspruchsvoll, engagiert?",
            q2: "Gute Präsentation und ethisches sowie deontologisches Bewusstsein?",
            q3: "Teilst du gerne Wissen und kannst du es effektiv vermitteln?",
            q4: "Hast du eine Berufung zum Unterrichten?",
            q5: "Kümmerst du dich um das Lernen, die Entwicklung und die Autonomie deiner Schüler?",
            cta: "Sende eine E-Mail mit deinem Lebenslauf an geral@sabervirtual.pt! Füge deine Adresse, Geburtsdatum und Kontakt hinzu!"
        },
        contact: {
            title: "Kontaktieren Sie uns",
            subtitle: "Kommen Sie und entdecken Sie unser Studienzentrum."
        },
        testimonials: {
            title: "Was unsere Schüler sagen",
            t1: {
                text: "Dank SaberVirtual konnte ich meine Noten deutlich verbessern. Die Lehrer sind sehr engagiert und erklären klar.",
                name: "Maria S.",
                role: "Schülerin der 12. Klasse"
            },
            t2: {
                text: "Mein Sohn hatte Schwierigkeiten in Mathematik und ist jetzt viel selbstbewusster. Ich empfehle es allen Eltern!",
                name: "Ana P.",
                role: "Mutter eines Schülers"
            },
            t3: {
                text: "Fantastische Atmosphäre und Lehrer immer verfügbar. Ich habe es auf die Universität meiner Wahl geschafft!",
                name: "João R.",
                role: "Ehemaliger Schüler"
            }
        },
        footer: {
            rights: "Alle Rechte vorbehalten."
        }
    }
};

// i18n Class
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage() || 'pt';
        this.translations = translations;
    }

    detectBrowserLanguage() {
        // Get browser's preferred language
        const browserLang = navigator.language || navigator.userLanguage;
        
        // Extract the primary language code (e.g., 'en-US' -> 'en')
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Check if we support this language
        const supportedLangs = ['pt', 'en', 'es', 'fr', 'de'];
        if (supportedLangs.includes(langCode)) {
            return langCode;
        }
        
        // Default to Portuguese
        return 'pt';
    }

    getStoredLanguage() {
        return localStorage.getItem('sabervirtual-lang');
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('sabervirtual-lang', lang);
            this.updatePageContent();
            this.updateLangButton();
            document.documentElement.lang = lang;
        }
    }

    getText(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        
        return value;
    }

    updatePageContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getText(key);
            
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    updateLangButton() {
        const langBtn = document.querySelector('.current-lang');
        if (langBtn) {
            langBtn.textContent = this.currentLang.toUpperCase();
        }
    }

    init() {
        this.updatePageContent();
        this.updateLangButton();
        document.documentElement.lang = this.currentLang;
    }
}

// Create global i18n instance
const i18n = new I18n();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
