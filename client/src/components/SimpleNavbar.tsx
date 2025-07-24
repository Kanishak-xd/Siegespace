import * as React from "react";
import { IconButton, Typography, Collapse, Navbar } from "@material-tailwind/react";
import { Menu, Xmark } from "iconoir-react";
import GradientText from './GradientText'

const LINKS = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Resume",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="m-2 flex flex-col gap-x-8 gap-y-1 lg:m-0 lg:flex-row lg:items-center">
      {LINKS.map(({ title, href }) => (
        <li key={title}>
          <Typography as="a" href={href} type="small" className="p-1 hover:text-primary">
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl z-10 pt-5">
      <div className="flex items-center">
        <Typography as="a" href="#" type="small" className="mx-2 block py-1">
          <GradientText colors={["#DE97F9", "#9157FF"]}
            animationSpeed={1} showBorder={false} className="custom-class text-2xl"
          >
            Siegespace
          </GradientText>
        </Typography>
        <div className="hidden lg:ml-auto lg:mr-2 lg:block font-semibold text-xl">
          <NavList />
        </div>
        <IconButton size="sm" variant="ghost" color="secondary" onClick={() => setOpenNav(!openNav)} className="ml-auto grid lg:hidden mr-3 mt-1">
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
