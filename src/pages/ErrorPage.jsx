import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="mt-4 text-lg text-gray-700">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-3xl space-x-2 font-bold">
          <i>{error.statusText || error.message}</i>
          <span>404</span>
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
