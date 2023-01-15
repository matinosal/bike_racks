import { ReactNode } from "react";

interface SidebarProps {
  ref: React.ForwardedRef<unknown>;
  title: string;
  width: number;
  children: ReactNode;
}
interface SidebarHeaderProps {
  title: string;
}
interface SidebarBodyProps {
  children: ReactNode;
}
