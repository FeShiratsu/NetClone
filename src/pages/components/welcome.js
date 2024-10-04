import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import img from '@/assets/house.jpg';
export default function Welcome() {
    return (
        <div className={styles.showOff}>
            <video className={styles.showImg} autoPlay muted loop >
                <source src="https://ik.imagekit.io/ikmedia/example_video.mp4" />
                Your browser does not support the video tag...
            </video>
            <div className={styles.showInfo}>
                <img className={styles.showSeries} src="https://occ-0-3980-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbuDz9AfE0FYyvojxgPH9svtAZrnZOkE9JwlazQt_EjoY4UKure3ZWqFryGbJ87pKVLS9Yts5bHQWENjQ3XwoREOIS-5oYUVoHz0Rh-jy3hc.webp?r=341"></img>
                <p>Hugh Laurie interpreta Dr. Gregory House, um médico mal-
                    humorado que detesta lidar com pacientes, mas é um gênio no
                    tratamento de doenças misteriosas.
                </p>
                <div >
                    <button className={styles.watch}>Assistir</button>
                    <button className={styles.moreInfo}>Mais Informações</button>
                </div>
            </div>
        </div>
    )
}