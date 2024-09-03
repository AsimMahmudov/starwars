"use client";
import { useRouter } from "next/navigation";
import scss from "./Work.module.scss";

const Work = () => {
  const nav = useRouter();

  return (
    <section id="#work" className={scss.Work}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h3>STAR WARS™ BATTLEFRONT™ II</h3>
            <h1>Трейлер игры Battlefront II</h1>
            <p>
              Трейлер включает в себя зрелищные сцены сражений во вселенной
              "Звездных войн". Трейлер показывает масштабные битвы на разных
              планетах, таких как Хот, Эндор, Татуин, и включает как наземные
              сражения, так и космические битвы с участием звездных
              истребителей.
            </p>
            <button onClick={() => nav.push("/videowars")}>
              Смотреть трейлер
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
