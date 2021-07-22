import React, { useContext } from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

function App(props: any): JSX.Element {
  const { state } = useContext(Store);
  return (
    <>
      <div className="header">
        <div>
          <h1>Rick and Morty</h1>
          <h5>Pick your favourite episode !!!</h5>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourite(s): {state.favourites.length}</Link>
        </div>
      </div>
      {props.children}
    </>
  );
}

export default App;
