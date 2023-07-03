import React, {useState} from 'react';
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import PizzaList from "../components/pizzaList/PizzaList";

const Home = ({searchValue}) => {
    const [categoryActive, setCategoryActive] = useState(0);
    const [sortActive, setSortActive] = useState({name: 'популярности', sortProperty: 'rating'});
    const [flag, setFlag] = useState(false);

    return (
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories onChangeCategories={(i) => setCategoryActive(i)} value={categoryActive} />
                        <Sort
                            onChangeSort={(i) => setSortActive(i)}
                            value={sortActive}
                            reverseSort={() => setFlag(flag => !flag)}
                            flag={flag}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaList
                            categoryActive={categoryActive}
                            sortActive={sortActive}
                            flag={flag}
                            searchValue={searchValue}/>
                    </div>
                </div>
            </div>

    );
};

export default Home;