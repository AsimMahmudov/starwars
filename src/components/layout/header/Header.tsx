/////////////////
"use client";
import scss from "../header/Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import logo from "../../../assets/Future world.jpeg";

const links = [
  {
    name: "Главная",
    link: "/",
  },

  {
    name: "Персонажи",
    link: "/person",
  },
  {
    name: "Режимы игры",
    link: "/game",
  },
  {
    name: "Видео",
    link: "/videowars",
  },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href={"/"}>
              <img
                src="https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefront-2-mono-logo.png"
                alt=""
              />
            </Link>
          </div>

          {isMobile ? (
            <>
              <button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
                Burger
              </button>
              <BurgerMenu links={links} isOpen={isOpen} />
            </>
          ) : (
            <>
              <div className={scss.nav}>
                <ul>
                  {links.map((item, index) => (
                    <div className={scss.link} key={index}>
                      <a href={item.link}>{item.name}</a>
                    </div>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

/////////////////////////
