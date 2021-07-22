import React, { useReducer } from 'react';
import { Istate, IAction } from './interfaces';

const initialState: Istate = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<Istate | any>(initialState);

function reducer(state: Istate, action: IAction): Istate {
  switch (action.type) {
    case 'FETCH_DATA': {
      return { ...state, episodes: action.payload };
    }

    case 'ADD_FAV': {
      return { ...state, favourites: [...state.favourites, action.payload] };
    }

    case 'REMOVE_FAV':
      return { ...state, favourites: action.payload };

    default: {
      return state;
    }
  }
}

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
