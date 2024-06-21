import Link from 'next/link';

export default function Free() {
    return <div>
        <main className="container">
            <h1>자유게시판</h1>
            <button><Link href="/free/write">글 작성</Link></button>
        </main>
    </div>
}