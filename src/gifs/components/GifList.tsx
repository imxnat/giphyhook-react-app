import type { Gif } from '../interfaces/gif.interface';


interface Props {
  gifs: Gif[];
}

const GifList = ({ gifs }: Props) => {

  return (
    <div className="gifs-container">
      {
        gifs.map(({ id, url, title, width, height }) => (
          <div key={id} className="gif-card">
            <img src={url} alt={title} />
            <h3>{title}</h3>
            <p>
              {width} x {height}(1.5mb)
            </p>
          </div>
        ))
      }
    </div>
  );
};
export default GifList;