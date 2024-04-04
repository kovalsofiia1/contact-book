import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.prompt}>
        Welcome to your personal <br /> Contact Book!
      </h1>
    </div>
  )
}
