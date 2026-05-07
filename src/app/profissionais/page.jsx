import CardList from "../components/CardList";
import style from "./page.module.css";

export default function Profissionais({ params }) {
  return (
    <div className={style.list}>
      <CardList />
    </div>
  );
}
