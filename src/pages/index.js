
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Section from "./components/section";
import { getMovies, getNomes } from "./Functions/movieList";


export default function Home() {
  const movies = getMovies();
  return (
    <main className={styles.home}>
      <Header></Header>
      <Welcome></Welcome>
      <Section theme={"Launched recently"} movies={movies}></Section>
      <Section theme={"Launched recently"} movies={movies}></Section>
      <Section theme={"Launched recently"} movies={movies}></Section>
      <Section theme={"Launched recently"} movies={movies}></Section>
      <Section theme={"Launched recently"} movies={movies}></Section>
      
    </main>
  );
}
