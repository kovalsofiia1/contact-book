import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className="prompt">
        Welcome to your personal Contact Book!
      </h1>
    </div>
  )
}
