import Card from "../Card";

export default function CardList() {
  return (
    <>
      <Card
        id={1}
        nome="Leonardo C. Magalhães"
        profissao="Professor de Corrida"
        phone="(12) 93456-7891"
        email="professor@teste.com.br"
      />
      <Card
        id={2}
        nome="Camila Faleiros A. Pereira"
        profissao="Nutricionista"
        phone="(12) 93456-7892"
        email="nutri@teste.com.br"
      />
    </>
  );
}
