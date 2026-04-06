import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../../actions";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./heroesList.css";
// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
  const { heroes, heroesLoadingStatus, activeFilterElement } = useSelector(
    (state) => state,
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));
  }, []);

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return (
        <HeroesListItem key={id} heroes={heroes} heroKey={id} {...props} />
      );
    });
  };

  const filteredHeroes =
    activeFilterElement === ""
      ? heroes
      : heroes.filter((hero) => hero.element === activeFilterElement);

  const elements = renderHeroesList(filteredHeroes);

  if (!heroes.length) {
    return <h5 className="text-center mt-5">Героев пока нет</h5>;
  }
  if (!filteredHeroes.length) {
    return <h5 className="text-center mt-5">По этому фильтру герои не найдены</h5>;
  }

  return (
    <TransitionGroup component="ul">
      {filteredHeroes.map(({ id, ...props }) => {
        return (
          <CSSTransition key={id} timeout={300} classNames="hero" exit={false}>
            <HeroesListItem heroKey={id} heroes={heroes} key={id} {...props} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default HeroesList;
