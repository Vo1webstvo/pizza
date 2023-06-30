import './scss/app.scss';

import Header from './components/header/Header';
import Sort from './components/sort/Sort';
import Categories from './components/categories/Categories';
import PizzaBlock from "./components/pizzaBlock/PizzaBlock";
import PizzaList from "./components/pizzaList/PizzaList";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
