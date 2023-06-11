import { resolve } from 'path';
import { useRef, useState, ChangeEvent } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

export const ImageUploader = () => {
    console.log('image uploader 読み込み');
    const inputImageRef = useRef<HTMLInputElement | null>(null);

    // const fileRef = useRef<File | null>(null);
    let file: File;
    const [message, setMessage] = useState<string | null>('');

    const onClickText = () => {
        if (inputImageRef.current !== null) {
            inputImageRef.current.click();
        }
    };

    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files !== null && files.length > 0) {
            // fileRef.current = files[0];
            file = files[0];
        }
    };

    const onClickUpload = async () => {
        // if (fileRef.current !== null) {
            if (file !== null) {
            await sleep(UPLOAD_DELAY);
            setMessage(
                // `${fileRef.current.name} has been successfully uploaded`
                `${file.name} has been successfully uploaded`
            );
        }
    };

    return (
        <div>
            <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
                アップロード画像を選択
            </p>
            <input
                ref={inputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                // style={{ visibility: 'hidden' }}
                multiple={true}
            />
            <br />
            <button onClick={onClickUpload}>アップロードする</button>
            {message && <p>{message}</p>}
        </div>
    );
};
