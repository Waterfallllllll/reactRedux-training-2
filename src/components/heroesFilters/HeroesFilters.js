import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilters,
  activeFilterChanged
} from "../../actions";
import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();
  const {filters, filtersLoadingStatus, activeFilterElement} = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(fetchFilters(request));
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner/>;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderFiltersList = (arr) => {
    if (arr.length === 0) {
        return <h5 className="text-center mt-5">Героев пока нет</h5>
    }

    return arr.map(({id, classNames, descr, element}) => {
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
