import React from 'react'
import styles from './about.module.css'

function About() {
    return (
        <>
        <div className={styles.container}>
                <div><h1 className={styles.title}>Sobre</h1></div>
            <div className={styles.contentAbout}>
                <p className={styles.paragrafo}>
                A DiamondBigger é uma empresa dedicada a levar a revolução 4.0 aos quatro cantos do país
                , especializada em tecnologia, indústria 4.0, logística, controle de estoque, 
                previsão de demanda e outros serviços relacionados. Com sede em Vitória, Espírito Santo,
                 a empresa atua no setor de transporte, armazenagem e correio, e foi fundada em 2020. 
                </p>

                {/* <div className={styles.lists}>

                    <div className={styles.list1}>
                        <div className={styles.titlelists}>
                        <h3>Minha experiência em desenvolvimento de front-end inclui:</h3>
                        </div>
                        <ul>
                            <li>Desenvolver websites responsivos.</li>
                            <li>Criar aplicativos móveis usando React Native e o framework Expo.</li>
                            <li>Construir aplicações web com JavaScript, HTML 5 e CSS 3</li>
                            <li>Utilizar bibliotecas como Bootstrap ou Tailwind.</li>
                            <li>Trabalhar com APIs RESTful.</li>
                            <li>Gerenciar projetos utilizando Git e Github.</li>
                            <li>Implementação de teste unitário.</li>
                            <li>Design UI/UX.</li>

                        </ul>
                    </div>

                    <div className={styles.list2}>
                        <div className={styles.titlelists}>
                        <h3>Tenho conhecimentos em:</h3>
                        </div>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>ReactJS</li>
                            <li>React Native</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>Consumo de API</li>
                            <li>Git e GitHub</li>
                            <li>UX Design</li>
                        </ul>
                    </div>
                </div> */}

            </div>
        </div>
        </>
    )
}

export default About