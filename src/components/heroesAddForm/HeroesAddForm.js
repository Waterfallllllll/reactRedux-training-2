import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useCreateHeroMutation } from "../../api/apiSlice";

const HeroesAddForm = () => {
  const [createHero, { isLoading }] = useCreateHeroMutation();

  return (
    <Formik
      initialValues={{ name: "", text: "", element: "" }}
      onSubmit={(values, { setSubmitting }) => {
        const newHero = {
          id: uuidv4(),
          name: values.name,
          description: values.text,
          element: values.element,
        }

        createHero(newHero).unwrap();

        setSubmitting(false);
      }}
    >
      {({ values, handleChange, isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="border p-4 shadow-lg rounded">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fs-4">
              Имя нового героя
            </label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Как меня зовут?"
              onChange={handleChange}
              value={values.name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="text" className="form-label fs-4">
              Описание
            </label>
            <textarea
              required
              name="text"
              className="form-control"
              id="text"
              placeholder="Что я умею?"
              style={{ height: "130px" }}
              onChange={handleChange}
              value={values.text}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="element" className="form-label">
              Выбрать элемент героя
            </label>
            <select
              required
              className="form-select"
              id="element"
              name="element"
              onChange={handleChange}
              value={values.element}
            >
              <option>Я владею элементом...</option>
              <option value="fire">Огонь</option>
              <option value="water">Вода</option>
              <option value="wind">Ветер</option>
              <option value="earth">Земля</option>
            </select>
          </div>

          <button disabled={isSubmitting} type="submit" className="btn btn-primary">
            Создать
          </button>
        </form>
      )}
    </Formik>
  );
};

export default HeroesAddForm;
