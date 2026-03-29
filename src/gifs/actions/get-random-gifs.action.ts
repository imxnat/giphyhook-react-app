import { giphyApi } from "../api/giphyApi";
import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getRandomGifs = async (): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>('/random', {
    params: {
    }
  });

  console.log('RESPONSE', response);

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height)
  }));
};