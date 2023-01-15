import { ReactNode } from "react";

interface SidebarProps {
  ref: React.ForwardedRef<unknown>;
  props: {
    title: string;
    width: number;
    children: ReactNode;
  };
}
interface SidebarHeaderProps {
  title: string;
}
interface SidebarBodyProps {
  children: ReactNode;
}
