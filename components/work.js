import Link from 'next/link'
import styles from './work.module.css'
import { IoConstructOutline } from 'react-icons/io5';
import Image from 'next/image'
import Tagfy from '@/public/images/tagfy.png'

// import TodoImage from '@/public/images/listaTarefa.jpeg'
import BuildImage from '@/public/images/build.jpeg'
import AguardeImage from '@/public/images/aguarde.jpeg'



// const Poke = '../../public/images/pokemon.jpeg'

function Work() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>PROJETOS</h1>
        </div>
        <div className={styles.containersection}>

          <div className={styles.section}>
            <h3>Tagfy</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={Tagfy}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack} >
                <Link className={styles.link} href='/pokedex'>
                  <p>
                   Informações sobre aplicação
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Projeto</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                {/* <Image
                  src={RickMortyImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                /> */}
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/rickMorty'>
                  <p> Informações sobre aplicação</p>
                </Link>
              </div>
            </div>
          </div>


          <div className={styles.section}>
            <h3>Projeto</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                {/* <Image
                  src={TodoImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                /> */}
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/todo'>
                  <p>
                  Informações sobre aplicação. 
                    </p>
                    <br/>
                    <span>Em andamento <IoConstructOutline size={15} /></span>
                    <progress value='65' max='100'></progress>100%
                </Link>
              </div>
            </div>
          </div>
          
          <div className={styles.section}>
          <h3>Novo Projeto</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={BuildImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Ainda em construção <IoConstructOutline size={40} /></p>
                <br/>
                    <span>Em andamento <IoConstructOutline size={15} /></span>
                    <progress value='5' max='100'></progress>100%
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
          <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section}>
          <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section}>
           <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section}>
          <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Work