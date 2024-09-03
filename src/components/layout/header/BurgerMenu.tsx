import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import { Link as ScrollLink } from "react-scroll";

interface LinksType {
  name: string;
  link: string;
}

interface BurgerMenuProps {
  links: LinksType[];
  isOpen: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
      }
    >
      <div className={scss.content}>
        <div className={scss.nav}>
          <ul>
            {links.map((item, index) => (
              <div className={scss.link} key={index}>
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
