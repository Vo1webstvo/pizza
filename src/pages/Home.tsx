import React from 'react';
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import PizzaList from "../components/pizzaList/PizzaList";
import Pagination from "../components/pagination/pagination.tsx";

const Home: React.FC = () => {

    return (
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaList
                            />
                    </div>
                    <Pagination/>
                </div>
            </div>

    );
};

export default Home;