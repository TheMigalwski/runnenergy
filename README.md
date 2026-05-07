Esse é o Runnenergy! O sistema para encontrar os profissionais certos para sua necessidade.

## Começando

Instalar os pacotes:

```bash
npm install
```

Rodar o sistema localmente:

```bash
npm run dev
```

O sistema usa o `src` como o `@` para facilitar a chegada aos diretórios.

Abrir [http://localhost:3000](http://localhost:3000) no navegador

Em `src/app/page.jsx` temos a página principal do sistema, mostrando algumns profissionais e provas.

Para alterar o **Menu** superior, ir para `@/app/components/Menu/index.jsx`

# Components

- **Cards** <br>
  Responsável pela criação do card para _Profissionais_ e _Provas_

```js
import Link from "next/link";
import style from "./style.module.css";

export default function Card({ id, nome, profissao, phone, email }) {
  return (
    <Link href={`/profissionais/${id}`} className={style.link}>
      <div className={style.card}>
        <h2>{profissao}</h2>
        <div>
          <img
            src="/images/prof.jpg"
            alt="foto profissional"
            className={style.image}
          />

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
```
