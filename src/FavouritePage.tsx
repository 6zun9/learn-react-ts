import React from 'react';
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { toggleFavAction } from './Action';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

export default function FavouritePage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction: toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<>loading...</>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
