import { useRouteError } from 'react-router-dom';
import React from 'react';

export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);

  // Set a default heading or use the error message as the heading content
  const headingContent = err ? `Error ${err.status}: ${err.message}` : 'Error Page Heading';

  return (
    <>
      <h1>{headingContent}</h1>
      <div>Oops, something went wrong!</div>
    </>
  );
}
