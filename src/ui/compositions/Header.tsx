"use client";

const Header = ({ backLink, title }: { backLink?: string; title: string }) => (
  <div className="container relative flex justify-center align-between p-12 sm:p-24 mx-auto border-solid border-black border-b-2 border-opacity-50">
    {Boolean(backLink) && (
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <a className="pl-8" href={backLink}>
          {"<--"}
        </a>
      </div>
    )}
    <h1 className="font-sans text-4xl">{title}</h1>
  </div>
);

export default Header;
