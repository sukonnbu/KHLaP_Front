"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return <nav className="container-fluid">
        <ul>
        <li><strong><Link href="/">KHLaP {path==="/"&&"❤️"}</Link></strong></li>
        </ul>
        <ul>
        <li><Link href="/free">자유게시판 {path==="/free"&&"❤️"}</Link></li>
        <li><Link href="/used">중고장터 {path==="/used"&&"❤️"}</Link></li>
        <li><Link href="/study">공부방 {path==="/study"&&"❤️"}</Link></li>
        </ul>
        <ul>
        <li>
            <details className="dropdown">
            <summary role="button">내 정보</summary>
            <ul dir="rtl">
                <li>마이페이지</li>
                <li>내 게시물</li>
                <li>내가 쓴 댓글</li>
                <li>내가 쓴 글</li>
            </ul>
            </details>
        </li>
        </ul>
    </nav>
}