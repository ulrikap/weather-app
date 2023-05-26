"use client";

const Header = ({
  backLink,
  title,
  subtitle,
}: {
  backLink?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="container relative flex flex-col justify-center align-between p-12 sm:p-24 mx-auto border-solid border-black border-b-2 border-opacity-50">
    {Boolean(backLink) && (
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <a className="pl-8" href={backLink}>
          {"<--"}
        </a>
      </div>
    )}
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="font-sans text-4xl">{title}</h1>
      <h2 className="font-sans text-2xl">{subtitle}</h2>
    </div>
  </div>
);

export default Header;
