import React from 'react';
import { CKEditor } from 'ckeditor4-react';

function Editor() {
    return (
        <div className="App">
            <CKEditor
                initData={<p>내용</p>}
            />
        </div>
    );
}

export default Editor;