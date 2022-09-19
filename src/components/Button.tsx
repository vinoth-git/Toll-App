import style from '../styles/home.module.css'

interface Props {
  label: string;
  onClick: () => void;
}

function Button(props: Props) {
  const { label, onClick } = props;
  return <input className={style.button} value={label} type={"button"} onClick={onClick} />;
}

export default Button;
