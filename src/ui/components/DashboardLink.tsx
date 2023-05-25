"use client";

export type DashboardLinkProps = {
  title: string;
  to: string;
  children: React.ReactNode;
};

const DashboardLink = ({ to, title, children }: DashboardLinkProps) => (
  <a href={to}>
    <li className="place-self-center p-10 border-2 border-black justify-self-stretch text-center flex justify-between gap-5 rounded-lg">
      <h1 className="text-lg">{title}</h1>
      {children}
    </li>
  </a>
);

export default DashboardLink;
