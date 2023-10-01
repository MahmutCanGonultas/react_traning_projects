import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
const allMenu = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allMenu);

  // const tempCategories = menu.map((item) => {
  //   return item.category;
  // });
  // const tempSet = new Set(tempCategories);
  // const tempItems = ["all", ...tempSet];

  // console.log(tempItems);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={allMenu} filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
