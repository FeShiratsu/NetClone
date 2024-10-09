`use client`
import like from '@/assets/icons/like.png';
import play from '@/assets/icons/play.png';
import plus from '@/assets/icons/plus.png';
import back from '@/assets/icons/back.png';
import backSec from '@/assets/icons/backSec.png';
import nextSec from '@/assets/icons/nextSec.png';
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

    function nextPage(direction) {
        const posters = document.getElementById("posters");
        console.log(posters.clientWidth)
        let number = (direction=="forward")?200:-200;
        if(checkLimits(parseInt(posters.style.right),Math.sign(number))){
            return;
        }
        console.log("going: "+number)
        setPercentage(percentage + number);
        posters.style.right = percentage+"px";
    }

    function checkLimits(number,direction){
        console.log((number>=1300 && direction==1) || (number<=0 && direction==-1));
        return (number>=1605 && direction==1) || (number<=0 && direction==-1)
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
            <div className={styles.arrows}>
                    <img src = {backSec.src} onClick={() =>{nextPage("back")}}></img>
                    <img src = {nextSec.src} onClick={() =>{nextPage("forward")}}></img>
                </div>
            <ul className={styles.posters} ref={postersRef} id="posters">
                
                {movies.map((movie, key) => {
                    return <div key={key} className={styles.poster} onMouseLeave={(e) => { setInfo(e, false) }} onMouseEnter={(e) => { setInfo(e, true) }}>
                        <img className={styles.movieImg} src={movie}></img>
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