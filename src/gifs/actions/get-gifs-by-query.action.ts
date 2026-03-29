import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphyApi";


export const getGifsByQuery = async (valueSearch: string): Promise<Gif[]> => {

  const response = await giphyApi<GiphyResponse>('/search', {
    params: {
      q: valueSearch,
      limit: 20,
    }
  }
  );

  // console.log(response.data);


  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height)
  }));
};