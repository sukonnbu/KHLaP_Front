import { useRef, useState } from 'react';

export default function WriteThread({titleHolder, textHolder}) {
    const fileRef = useRef(null);
    const [image, setImage] = useState("");
    
    function handleClick() {
        fileRef?.current?.click();
    }

    function handleChange(e) {
        const targetFile = Array.from(e.target.files)[0];
        const selectedFile = URL.createObjectURL(targetFile);

        setImage(selectedFile);
    }

    return (
        <fieldset className="overflow-auto">
            <form method="post">
                {image !== "" && <div onClick={handleClick}>
                    <img src={image} alt={`image${image}`} />
                </div>}
                <label for="file">
                    사진 선택:
                    <input className="hidden" type="file" accept="image/*" onChange={handleChange} />
                </label>
                <input type="text" name="title" placeholder={titleHolder} />
                <textarea 
                name="thread"
                placeholder={textHolder}
                aria-label="text" />
                <button type="submit">글 작성</button>
            </form>
        </fieldset>
    )
}