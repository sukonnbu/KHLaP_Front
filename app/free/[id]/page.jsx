"use client";

import WriteThread from "../../../components/WriteThread";

export default function FreeThread({params: {id}}){
    if (id==="write") {
        /**글 작성하는 페이지 */
        return <div className="container-fluid">
            <WriteThread
                titleHolder="제목을 입력하세요"
                textHolder="본문을 입력하세요"
            />
        </div>
    } else {
        /**글 보는 페이지 */
        return <div>
            <h1>Thread: {id}</h1>
        </div>
    }
}
