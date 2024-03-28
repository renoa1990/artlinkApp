import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";

export const openSans = Open_Sans({ subsets: ["latin"] });

// THEME PROVIDER
import ThemeProvider from "theme/theme-provider";
// PRODUCT CART PROVIDER
import CartProvider from "contexts/CartContext";
// SITE SETTINGS PROVIDER
// GLOBAL CUSTOM COMPONENTS
import ProgressBar from "components/progress";

// IMPORT i18n SUPPORT FILE
import "i18n";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={openSans.className}>
        <CartProvider>
          <ThemeProvider>
            <ProgressBar />
            {children}
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
