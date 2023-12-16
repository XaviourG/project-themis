'use client';

import { ThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => <ThemeProvider>{children}</ThemeProvider>;

export default Providers;
