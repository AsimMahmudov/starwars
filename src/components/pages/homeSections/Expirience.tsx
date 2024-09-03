"use client";
import scss from "./Expirience.module.scss";
import { useRouter } from "next/navigation";

const Expirience = () => {
  const nav = useRouter();
  return (
    <section id="#expirience" className={scss.Expirience}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h3>STAR WARS™ BATTLEFRONT™ II</h3>
            <h1>ПЕРСОНАЖИ ВСЕХ ЭПОХ</h1>
            <p>
              Играйте за — и сражайтесь против — вселяющих ужас злодеев и
              благородных героев всех трех эпох «Звёздных Войн»: Кайло Рена,
              Рей, Дарта Мола, Йоду и многих других. Уникальные, улучшаемые
              способности классических персонажей позволят вам обрушить всю их
              мощь на поле боя.
            </p>
            <button className={scss.button} onClick={() => nav.push("/person")}>
              Просмотр героев
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expirience;
