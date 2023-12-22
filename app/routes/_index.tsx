import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Homepage | MoveDB" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({}: LoaderFunctionArgs) {
  const url = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDhlODlhNGM0ZTY1MzU1MTM4ZjIzOWMwNGE3NGI4NyIsInN1YiI6IjY1ODVlZmYzNDc3MjE1NWEwYjQzMTVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbO_hqJUwSCFfXS2cJbJP6vimpPrQHin6YKLihlBq3U'
      }
    }
  );

  return json(await url.json());
}

export default function Index() {
  const data = useLoaderData();
  console.log(data)

  return (
    <div className="bg-white py-6 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2
            className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
          >
            Top Trending Movies
          </h2>
        </div>

        {/* Movie grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8"></div>
{/* eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDhlODlhNGM0ZTY1MzU1MTM4ZjIzOWMwNGE3NGI4NyIsInN1YiI6IjY1ODVlZmYzNDc3MjE1NWEwYjQzMTVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SbO_hqJUwSCFfXS2cJbJP6vimpPrQHin6YKLihlBq3U */}

      </div>
    </div>
  );
}
