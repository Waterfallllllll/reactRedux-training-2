import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeFilterChanged, fetchFilters, selectAll } from "./filtersSlice";
import Spinner from "../spinner/Spinner";
import store from "../../store/index"

const HeroesFilters = () => {
  const dispatch = useDispatch();
  const { filtersLoadingStatus, activeFilterElement } = useSelector(state => state.filters);
  const filters = selectAll(store.getState());

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderFiltersList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>
    }

    return arr.map(({ id, classNames, descr, element }) => {
      return <button key={id} className={`btn ${classNames} ${element === activeFilterElement ? "active" : ""}`} onClick={() => dispatch(activeFilterChanged(element))}>{descr}</button>
    })
  }

  const elements = renderFiltersList(filters);
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {elements}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
