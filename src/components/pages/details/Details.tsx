"use client";
import axios from "axios";
import scss from "./Details.module.scss";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Personajes from "../personajes/Personajes";

interface IUperson {
  id?: string;
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

const Details = () => {
  const [todos, setTodos] = useState<IUperson[]>([]);
  const { id } = useParams();

  const fechDetails = async () => {
    try {
      const { data } = await axios.get(`${urlPerson}`);
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.error("product error", error);
    }
  };

  const findProduct = todos.find((el) => el.id == id);
  console.log(findProduct);

  useEffect(() => {
    fechDetails();
  }, []);

  return (
    <>
      <div className={scss.Details}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.detail}>
              <div className={scss.images}>
                <img src={findProduct?.url} alt="" />
              </div>
              <div className={scss.text}>
                <h5>{findProduct?.be}</h5>
                <h2>{findProduct?.title}</h2>
                <p>{findProduct?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={scss.sila}>
        <div className="container">
          <h1>Способности {findProduct?.title}</h1>
          <div className={scss.content}>
            <div className={scss.box}>
              <p>{findProduct?.cap1}</p>
              <p>{findProduct?.cap2}</p>
              <p>{findProduct?.cap3}</p>
            </div>
            <div className={scss.box}>
              <p>Оружие: {findProduct?.weapon}</p>
              <hr />
              <p>Раса: {findProduct?.race}</p>
              <hr />
              <p>Фракция: {findProduct?.faction}</p>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Personajes />
      </section>
    </>
  );
};

export default Details;
