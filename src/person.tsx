import React from "react";

export const Person = ({ resource }: any) => {
  const person = resource.read();

  console.log(person.name.first);

  return <div>{person.name.first}</div>;
};
