`use client`
import like from '@/assets/icons/like.png';
import play from '@/assets/icons/play.png';
import plus from '@/assets/icons/plus.png';
import back from '@/assets/icons/back.png';
import { useRef, useState } from "react";
import styles from "@/styles/section.module.css"

export default function Section({ theme, movies }) {
    let postersRef = useRef();
    const [percentage, setPercentage] = useState(0);
    function setInfo(e, option) {
        const backArrow = document.getElementById("BArrow");
        const backText = document.getElementById("BText");
        backArrow.style.display = (option)?"inline":"none";
        backText.style.display = (option)?"inline":"none";
        const infoPoster = e.currentTarget.lastChild.classList;
        const invisiClass = styles.invisible;
        (option) ? infoPoster.remove(invisiClass) : infoPoster.add(invisiClass)
    }

    function nextPage() {
        const posters = document.getElementById("posters");
        setPercentage(posters.style.right + 10)
        posters.style.right =  + percentage;
        
        console.log(postersRef.current.style.right)
    }

    function showAllInfo(){
        
    }

    function see(request){
        if(request == "back"){

        }else if("all"){

        }
    }


    return (
        <main className={styles.section}>
            <div className={styles.sectionTitle}>
                <h1>{theme}</h1>
                <div className={styles.seeAll}>
                <p id="BText">See all</p>
                <img id="BArrow" src={back.src}></img>
                </div>
            </div>
            <ul className={styles.posters} ref={postersRef} id="posters">
                {movies.map((movie, key) => {
                    return <div key={key} className={styles.poster} onMouseLeave={(e) => { setInfo(e, false) }} onMouseEnter={(e) => { setInfo(e, true) }}>
                        <img className={styles.movieImg} src={movie} onClick={nextPage}></img>
                        <div className={`${styles.invisible} ${styles.infoPoster}`}>
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