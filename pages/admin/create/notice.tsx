import dynamic from 'next/dynamic';
import { EditorProps, Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef, useState } from 'react';
import { TuiEditorWithForwardedProps } from '../../../components/Editor';
import React from 'react';


const TuiNoSSRWrapper = dynamic<TuiEditorWithForwardedProps>(() => import('../../../components/Editor'), {
    ssr: false,
    loading: () => <p>Loading . . .</p>
})
const TuiWrapper = React.forwardRef((props: EditorProps, ref) => (
    <TuiNoSSRWrapper {...props} forwardedRef={ref as React.MutableRefObject<Editor>} />
));

TuiWrapper.displayName='Editor';

const AdminCreateNotice = () => {
    const editorRef = useRef<Editor>(null);
    const [titleInput, setTitleInput] = useState("");
    const Submit = async () => {
        if (editorRef.current && titleInput) {
            const content = editorRef.current.getInstance().getMarkdown();
            console.log(titleInput + "  " + content);
            const res = await fetch(process.env.API_URL + "/api/notice/create", {
                method: 'POST',
                body: JSON.stringify({
                    title: titleInput,
                    content: content
                })
            });
        }
    }
    return (
        <Container>
            <input name="titleInput" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
            <TuiWrapper height="800px" initialEditType="wysiwyg" useCommandShortcut={true}
                ref={editorRef} />
            <Button onClick={Submit}>저장</Button>
        </Container>
    );
};

const Container = styled.div`
display: inline-block;
`

const Button = styled.button`
border: 0px;
border-radius: 5px;
width:120px;
height: 50px;
color: white;
font-size: ${props => props.theme.fontSizes.lg};
background-color: black;
`

export default AdminCreateNotice;