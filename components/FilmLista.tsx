import React from 'react';

import { MovieInterface } from '@/types';
import FilmDetalji from '@/components/FilmDetalji';
import { isEmpty } from 'lodash';

interface FilmListaProps {
  data: MovieInterface[];
  title: string;
}

const FilmLista: React.FC<FilmListaProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <FilmDetalji key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmLista;
