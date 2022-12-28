import React from "react";
import Search from "../search";
import Tasks from "../tasks";
import imgBackground1 from "../../assets/imgs/Img-Background-1.jpg";
import Menu from "../menu";

const Main = () => {
  return (
    <main id="main" style={{ backgroundImage: `url(${imgBackground1})` }}>
      <div id="flex">
        <Search />
        <Menu />
      </div>
      <Tasks />
    </main>
  );
};

export default Main;
