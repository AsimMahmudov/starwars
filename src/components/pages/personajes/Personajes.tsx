"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import scss from "./Personajes.module.scss";

interface IUperson {
  id: string;
  be: string;
  title: string;
  description: string;
  url: string;
  weapon: string;
  race: string;
  faction: string;
  cap1: string;
  cap2: string;
  cap3: string;
}

const urlPerson = process.env.NEXT_PUBLIC_START_WARS;

const Personajes = () => {
  const [todo, setTodo] = useState<IUperson[]>([]);
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get<IUperson[]>(`${urlPerson}`);
      setTodo(data);
      console.log(data);
    } catch (error) {
      console.error("Error personajes", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <section className={scss.Personajes}>
      <div className="container">
        <div className={scss.content}>
          {todo.map((el) => (
            <div key={el.id} className={scss.card}>
              <Link href={`/details/${el.id}`}>
                <img src={el.url} alt="" />
              </Link>

              <h5>{el.be}</h5>
              <h2>{el.title}</h2>
              <p>{el.description.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personajes;
