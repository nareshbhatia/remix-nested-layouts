import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
  { title: 'Remix Nested Layout' },
  { name: 'description', content: 'Remix Nested Layout' },
];

export default function Index() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        Remix Nested Layouts
      </h1>
      <p className="py-4">
        This application shows how to nest layouts using Remix.
      </p>
    </div>
  );
}
