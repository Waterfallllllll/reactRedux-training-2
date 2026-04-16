import { createReducer } from "@reduxjs/toolkit";
import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroDeleted
} from "../actions/index";

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
};

// const heroes = createReducer(initialState, builder => {
//   builder
//     .addCase(heroesFetching, state => {
//       state.heroesLoadingStatus = "loading";
//     })
//     .addCase(heroesFetched, (state, action) => {
//       state.heroesLoadingStatus = "idle";
//       state.heroes = action.payload;
//     })
//     .addCase(heroesFetchingError, state => {
//       state.heroesLoadingStatus = "error";
//     })
//     .addCase(heroDeleted, (state, action) => {
//       state.heroes = state.heroes.filter(
//         (item) => item.id !== action.payload,
//       )
//     })
//     .addDefaultCase(() => {});
// })

const heroes = createReducer(initialState, {
  [heroesFetching]: state => {
    state.heroesFetchingError = "loading";
  },
  [heroesFetched]: (state, action) => {
    state.heroesLoadingStatus = "idle";
    state.heroes = action.payload;
  },
  [heroesFetchingError]: state => {
    state.heroesLoadingStatus = "error";
  },
  [heroDeleted]: (state, action) => {
    state.heroes = state.heroes.filter(
      (item) => item.id !== action.payload,
    )
  },
},
  [],
  state => state
)

// const heroes = (state = initialState, action) => {
//   switch (action.type) {
//     case "HEROES_FETCHING":
//       return {
//         ...state,
//         heroesLoadingStatus: "loading",
//       };
//     case "HEROES_FETCHED":
//       return {
//         ...state,
//         heroes: action.payload,
//         heroesLoadingStatus: "idle",
//       };
//     case "HERO_DELETED":
//       return {
//         ...state,
//         heroes: state.heroes.filter(
//           (item) => item.id !== action.payload,
//         )
//       };
//     case "HEROES_FETCHING_ERROR":
//       return {
//         ...state,
//         heroesLoadingStatus: "error",
//       };
//     default:
//       return state;
//   }
// };

export default heroes;
