import { RotatingLines } from "react-loader-spinner";
import css from './Loader.module.css';

export default function Loader() {
    return (
      <div className={css.container}>
        <RotatingLines
            visible={true}
            height="96"
            width="96"
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            
        />
      </div>
  )
}



