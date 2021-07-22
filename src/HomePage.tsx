import React, { useEffect, useContext } from 'react';
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { fetchDataAction, toggleFavAction } from './Action';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <React.Suspense fallback={<>loading...</>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
}
