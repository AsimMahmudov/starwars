"use client";
import { useRouter } from "next/navigation";
import scss from "./Contact.module.scss";

const Contact = () => {
  const nav = useRouter();
  return (
    <section id="#contacts" className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h3>СПОСОБЫ ИГРЫ</h3>
            <h1>Режимы игры</h1>
            <p>
              Захватывающая одиночная кампания, глубокие сетевые баталии и
              многоэтапные космические бои ждут вас в Star Wars Battlefront II.
            </p>
            <button onClick={() => nav.push("/game")}>
              Исследуйте режимы игры
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
