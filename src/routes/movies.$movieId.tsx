import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Movie } from '@/models';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

const API_URL = process.env.API_URL as string;

export async function loader({ params }: LoaderFunctionArgs) {
  return fetch(`${API_URL}/movies/${params.movieId}`);
}

export default function MovieDetail() {
  const movie = useLoaderData() as Movie;
  const { name, releaseYear, ratingsSummary } = movie;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{releaseYear}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Rating: {ratingsSummary.aggregateRating}</p>
      </CardContent>
    </Card>
  );
}
