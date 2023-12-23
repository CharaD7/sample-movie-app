import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDhlODlhNGM0ZTY1MzU1MTM4ZjIzOWMwNGE3NGI4NyIsInN1YiI6IjY1ODVlZmYzNDc3MjE1NWEwYjQzMTVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbO_hqJUwSCFfXS2cJbJP6vimpPrQHin6YKLihlBq3U'
      },
    },
  );

  return json(await url.json());
}

export default function MovieId() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h3>Hello from the movie id</h3>
    </div>
  )
}
