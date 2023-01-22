import { ReactNode } from "react";

interface SidebarProps {
  ref: React.ForwardedRef<unknown>;
  title: string;
  width?: number;
  children: ReactNode;
  onSidebarClose?: () => void;
}
interface SidebarHeaderProps {
  title: string;
  closeSidebar(): void;
}
interface SidebarBodyProps {
  children: ReactNode;
}
