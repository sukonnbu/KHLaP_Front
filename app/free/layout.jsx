export const metadata = {
    title: "자유게시판"
}

export default function Layout({children}) {
    return <div>
        {children}
        <footer>
            <span>
            &copy; 2024 경희고 웹개발반 1조
            </span>
        </footer>
    </div>
}