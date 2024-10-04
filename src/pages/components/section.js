`use client`
import like from '@/assets/icons/like.png'
import play from '@/assets/icons/play.png'
import plus from '@/assets/icons/plus.png'
import {useRef,useState} from "react";
import styles from "@/styles/section.module.css"

export default function Section({ theme, movies }) {
    let postersRef = useRef();
    const [percentage,setPercentage] = useState(0);
    function setInfo(e, option) {
        const infoPoster = e.currentTarget.lastChild.classList;
        const invisiClass = styles.invisible;
        (infoPoster.contains(invisiClass)) ? infoPoster.remove(invisiClass) : infoPoster.add(invisiClass)
    }

    function nextPage() {
        setPercentage(percentage-10)
        postersRef.current.style.right= percentage;
        console.log(percentage)
    }


    return (
        <main className={styles.section}>
            <h1>{theme}</h1>
            <ul className={styles.posters} ref={postersRef}>
                {movies.map((movie,key) => {
                    return <div key={key} className={styles.poster}  onMouseLeave={(e) => { setInfo(e, true) }} onMouseEnter={(e) => { setInfo(e, true) }}>
                        <img src={movie} onClick={nextPage}></img>
                        <div className={`${styles.invisible} ${styles.infoPoster}`}>
                            <h2>Movie Name</h2>
                            <div className={styles.posterBtns}>
                                <img src={play.src}></img>
                                <img src={plus.src} ></img>
                                <img src={like.src}></img>
                            </div>
                        </div>
                    </div>
                })}
            </ul>
        </main>
    )
}