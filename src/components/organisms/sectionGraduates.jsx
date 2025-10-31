import styles from "./sectionGraduates.module.css"
function Graduates() {
  return (
    <section className={styles.graduates}>
      <div className={styles.infograd}>
        <h2 className={styles.titlegrad}> Estas son las <span className={styles.habilidades}>Habilidades</span> que obtiene un egresado de la carrera de <span className={styles.habilidades}>Computación e Informática</span></h2>
        <p className={styles.parafgrad}>Nuestros egresados se distinguen por sus sólidas competencias técnicas y su capacidad para planificar y ejecutar proyectos con calidad e innovación. Poseen habilidades blandas como liderazgo, trabajo en equipo y comunicación efectiva, junto con una ética profesional y un compromiso constante con la mejora continua, lo que les permite aportar soluciones creativas y contribuir al desarrollo de su entorno.</p>
        <div className={styles.targetgrad}>

          <div className={styles.cardgrad}>
            <h2>Competencias y avilidades</h2>
          </div>

          <div className={styles.cardgrad}>
            <h2>Capacidades tecnicas </h2>
          </div>

          <div className={styles.cardgrad}>
            <h2>Valores y vición</h2>
          </div>

        </div>
      </div>
      <div >
        <img src="/EGRESADO.png"alt="img" className={styles.imggradu} />
      </div>
    </section>
  );
}

export { Graduates };
