import { isRouteErrorResponse, useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  const prod = import.meta.env.PROD;

  return (
    <div>
      <main>
        <h1>Oops...</h1>
        {isRouteErrorResponse(error) ? (
          <p>The requested page was not found.</p>
        ) : prod ? (
          <p>An unexpected error occurred.</p>
        ) : (
          <p>{(error as Error).message}</p>
        )}
      </main>
    </div>
  );
}
