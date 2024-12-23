export const metadata = {
  title: "공부방",
};

export default function Layout({ children }) {
  return (
    <main className="container">
      {children}
      <footer>
        <span>&copy; 2024 경희고 웹개발반 1조</span>
      </footer>
    </main>
  );
}
