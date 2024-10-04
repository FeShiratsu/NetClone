`use client`
import logo from '@/assets/netflix-94.png';
import * as React from "react";
import styles from '@/styles/header.module.css';
import search from '@/assets/icons/search.png';
import notify from '@/assets/icons/notify.png';
import profile from '@/assets/icons/profile.png';
export default function Header() {
    React.useEffect(() => {
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            const scrollPosition = window.scrollY;
            
            // Add or remove the 'scrolled' class based on scroll position
            if (scrollPosition > 300) {  // Change 50 to any value based on when you want the header to change
              header.style.backgroundColor= "#141414"
            } else {
              header.style.backgroundColor= "transparent"
            }
          });
      }, []);
    

    return (
        <header className={styles.header} id='header'>
            <div className={styles.header1}>
                <h1>Netflix</h1>
                <nav>
                    <p><a>Início</a></p>
                    <p><a>Séries</a></p>
                    <p><a>Filmes</a></p>
                    <p><a>Bombando</a></p>
                    <p><a>Minha lista</a></p>
                    <p><a>Navegar por idiomas</a></p>
                </nav>
            </div>
            <div className={styles.header2}>
                <div className={styles.icon}>
                    <img  src={search.src}></img>
                    <input placeholder='Search Series or Movies'></input>
                </div>
                <div className={styles.icon}>
                    <img  src={notify.src}></img>
                </div>
                <div className={styles.icon}>
                    <img  src={profile.src}></img>
                </div>
            </div>

        </header>
    )
}


