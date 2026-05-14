import Link from "next/link";
import style from "./style.module.css";

export default function Card({ id, nome, profissao, phone, email, image }) {
  return (
    <Link href={`/profissionais/${id}`} className={style.link}>
      <div className={style.card}>
        <h2>{profissao}</h2>
        <div>
          <img src={image} alt="foto profissional" className={style.image} />

          <h3>{nome}</h3>
          <p>
            Telefone: {phone} <br />
            Email: {email}
          </p>
        </div>
      </div>
    </Link>
  );
}
