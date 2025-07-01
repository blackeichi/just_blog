export type layoutProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type bodyLayoutProps = {
  children: React.ReactNode;
} & layoutProps;
