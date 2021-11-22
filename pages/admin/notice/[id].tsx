import dynamic from 'next/dynamic';
import { NoticeDetailDTO } from '../../../dto/notice-create.dto';
import { EditorProps, Editor } from '@toast-ui/react-editor';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef, useState } from 'react';
import { TuiEditorWithForwardedProps } from '../../../components/Editor';
import React from 'react';
import { GetServerSideProps } from 'next';
import { Params } from 'next/dist/server/router';
import { useRouter } from 'next/dist/client/router';

interface Props {
    notice: NoticeDetailDTO
}

const TuiNoSSRWrapper = dynamic<TuiEditorWithForwardedProps>(() => import('../../../components/Editor'), {
    ssr: false,
    loading: () => <p>Loading . . .</p>
})
const TuiWrapper = React.forwardRef((props: EditorProps, ref) => (
    <TuiNoSSRWrapper {...props} forwardedRef={ref as React.MutableRefObject<Editor>} />
));

TuiWrapper.displayName='Editor';

const ModifyAndDeleteNoticePage = ({ notice }: Props) => {
    const router = useRouter();
    const {id} = router.query;
    const editorRef = useRef<Editor>(null);
    const [titleInput, setTitleInput] = useState(notice.title);
    
    const Submit = async () => {
        if (editorRef.current && titleInput) {
            const content = editorRef.current.getInstance().getMarkdown();
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/notice/modify", {
                method: 'POST',
                body: JSON.stringify({
                    id: id,
                    title: titleInput,
                    content: content,
                    datetime: new Date()
                }),
            },
                
              );
        }
    }

    return (
        <Container>
            <input name="titleInput" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
            <TuiWrapper height="800px" initialEditType="wysiwyg" useCommandShortcut={true}
                ref={editorRef} initialValue={notice.content}/>
            <Button onClick={Submit}>저장</Button>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
    const { id } = params;
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/notice/${id}`);
    const notice: NoticeDetailDTO = await res.json();

    if (!notice) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            notice
        }
    }
}

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

export default ModifyAndDeleteNoticePage;