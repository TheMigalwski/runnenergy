"use client";
import React from "react";
import style from "./page.module.css";
import profissionais from "../../data/profissionais.json";

export default function ProfissionalProfile({ params }) {
  const { id } = React.use(params);
  const profissional = profissionais.find((p) => p.id === Number(id));

  return (
    <div className={style.nome}>
      <h1>{profissional ? profissional.nome : "Profissional não encontrado"}</h1>
    </div>
  );
}
