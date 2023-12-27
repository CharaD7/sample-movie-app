import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { db } from "~/utils/db.server";

export async function action({ params }: LoaderFunctionArgs) {
  const data = await db.comment.findMany({
    where: {
      movieId: params.id,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  return json({ data });
}

interface Comment {
  id: string;
  message: string;
}

interface loaderData {
  data: Comment[];
}

export default function Comments() {
  const { id } = useParams();
  const loaderData = useLoaderData() as loaderData;
  const data = loaderData?.data || [];

  return (
    <div className="rounded-lg border p-3">
      <h3 className="text-xl font-semibold mb-5">Your opinion</h3>

      <div>
        <Form method="post">
          <textarea name="comment" className="w-full border border-teal-500 rounded-lg p-2"></textarea>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="bg-teal-500 px-4 py-2 rounded-lg text-white">Add Comment</button>
        </Form>

        <div className="mt-5 flex flex-col gap-y-3">
          { data.map((post) => (
            <div key={ post.id }>
              <p>{ post.message }</p>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}