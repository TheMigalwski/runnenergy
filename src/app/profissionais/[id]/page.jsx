"use client";
import React from "react";

export default function ProfissionalProfile({ params }) {
  const { id } = React.use(params);

  return <h1>{id}</h1>;
}
