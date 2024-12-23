import Navigation from "./components/navigation";
import "@picocss/pico";

export const metadata = {
  generator: "Next.js",
  applicationName: "KHLaP",
  title: {
    template: "%s | KHLaP",
    default: "KHLaP",
  },
  description: "2024 경희고등학교 웹 개발반 제작의 교내 중고 거래 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
