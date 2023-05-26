"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="container mx-auto flex flex-col gap-10 justify-center items-center h-screen">
      <h1 className="text-red-500">Error!</h1>
      {error?.message}
      <a href="/dashboard" className="underline">
        Go back
      </a>
    </div>
  );
};

export default Error;
