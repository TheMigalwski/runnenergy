import Card from "../Card";
import profissionais from "../../data/profissionais.json";

export default function CardList() {
  return (
    <>
      {profissionais.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          nome={p.nome}
          profissao={p.profissao}
          phone={p.phone}
          email={p.email}
          image={p.image}
        />
      ))}
    </>
  );
}
