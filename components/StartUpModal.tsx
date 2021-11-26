//이미지
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FaqCreateDTO } from '../dto/faq-create.dto';
import { Title2, Title3, Title4 } from '../components/GlobalComponents';

const StartUpModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: FaqCreateDTO) => {
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/startup-form/create", {
                method: 'POST',
                body: JSON.stringify(data)
            });

            if (typeof window != null) {
                window.location.reload();
            }

        } catch (e) {
            alert('다시 시도해주세요');
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Table>
                    <Thead>
                        <tr>
                            <th>
                                <Title2>기본정보</Title2>
                                <Title3><span>*필수 입력사항입니다.</span></Title3>
                            </th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <th>
                                <Title3>성함<span>*</span></Title3>
                            </th>
                            <td>
                                <input placeholder="FAQ 제목을 입력해주세요" {...register('title', { required: true, maxLength: 20 })} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Title3>생년월일<span>*</span></Title3>
                            </th>
                            <td>
                                <input placeholder="FAQ 제목을 입력해주세요" {...register('title', { required: true, maxLength: 20 })} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Title3>이메일</Title3>
                            </th>
                            <td>
                                <input placeholder="FAQ 제목을 입력해주세요" {...register('title', { maxLength: 20 })} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Title3>연락처<span>*</span></Title3>
                            </th>
                            <td>
                                <input placeholder="FAQ 제목을 입력해주세요" {...register('title', { required: true, maxLength: 20 })} />
                            </td>
                        </tr>
                    </Tbody>
                </Table>
                <Table>
                    <Thead>
                        <tr>
                            <th>
                                <Title2>개설관련정보</Title2>
                            </th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <th>
                                <Title3>점포유무</Title3>
                            </th>
                            <RadioTd>
                                <RadioTh>
                                        <input type="radio" {...register('open')} name="open" value="있음" />
                                        <Title4>있음</Title4>
                                </RadioTh>
                                <RadioTh>
                                    <input type="radio" {...register('open')} name="open" value="없음" />
                                    <Title4>없음</Title4>
                                </RadioTh>
                            </RadioTd>
                        </tr>
                        <tr>
                            <th>
                                <Title3>외식업종경험</Title3>
                            </th>
                            <RadioTd>
                                <RadioTh>
                                        <input type="radio" {...register('experience')} name="experience" value="있음" />
                                        <Title4>있음</Title4>
                                </RadioTh>
                                <RadioTh>
                                    <input type="radio" {...register('experience')} name="experience" value="없음" />
                                    <Title4>없음</Title4>
                                </RadioTh>
                            </RadioTd>
                        </tr>
                        <tr>
                            <th>
                                <Title3>희망오픈일</Title3>
                            </th>
                            <td>
                                <input placeholder="FAQ 제목을 입력해주세요" {...register('title', { maxLength: 20 })} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Title3>희망오픈지역</Title3>
                            </th>
                            <td>
                                <input placeholder="FAQ 제목을 입력해주세요" {...register('title', { maxLength: 20 })} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Title3>사업예산</Title3>
                            </th>
                            <td>
                                <input placeholder="FAQ 제목을 입력해주세요" {...register('title', { maxLength: 20 })} />
                            </td>
                        </tr>
                    </Tbody>
                    <TFoot>
                        <tr>
                            <th>
                                <Title3>문의내용</Title3>
                            </th>
                            <td>
                                <textarea />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <Title3>이용동의<span>*</span></Title3>
                            </th>
                            <td>
                                <AgreeBox>
                                    <Title4>수집하는 개인정보의 항목<br />
                                        <span>이름, 생년월일, 이메일 , 연락처, 점포 유무, 외식업종운영경험, 사업예산, 희망오픈지역, 희망오픈일, 문의내용</span>
                                    </Title4>
                                    <Title4>개인정보의 수집 및 이용목적<br />
                                        <span>가맹점 개별 문의에 대한 상담</span>
                                    </Title4>
                                    <Title4>
                                        개인정보의 보유 및 이용기간<br />
                                        <span>보유 및 이용기간은 1년으로 하며, 기간 경과 후 가맹본부는 해당자료를 지체 없이 파기합니다.</span>
                                    </Title4>
                                </AgreeBox>
                                <CheckBox>
                                    <input type="checkbox" {...register('title', { maxLength: 20 })} />
                                    <Title4><span>위 개인정보 수집 및 이용에 동의합니다</span></Title4>
                                </CheckBox>
                            </td>
                        </tr>
                    </TFoot>
                </Table>
                <Button>제출하기</Button>
            </Form>
        </>
    );
};
const Form = styled.form`
    display: block;
    text-align: center;
    padding: 0px 10px;
`
const Table = styled.table`
    width: 100%;
    @media only screen and (max-width: 600px) {
        margin-top:30px;
    }
    @media only screen and (min-width: 600px) {
        margin-top:40px;
    }
    @media only screen and (min-width: 768px) {
        margin-top:50px;
    }
    
`
const Tbody = styled.tbody`
    display: inline-block;
    width: 100%;
    margin: 20px 0px 0px 0px;
    text-align: left;
    input{
        background: none;
    }
    tr{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        @media only screen and (max-width: 600px) {
            width: 100%;
            margin: 10px 0px;
        }
        @media only screen and (min-width: 600px) {
            float: left;
            width: 100%;
            margin: 20px 0px;
        }
        @media only screen and (min-width: 768px) {
            float: left;
            width: 50%;
            margin: 20px 0px;
        }
    }
    th{
        width: 120px;
        font-weight: 600;
        span{
            color: #CC3D3D;
        }
        @media only screen and (max-width: 600px) {
            width: 90px;
        }
        @media only screen and (min-width: 600px) {
            width: 120px;
        }
        @media only screen and (min-width: 768px) {
            width: 120px;
        }
    }
    td{
        width: 100%;
        padding: 0px 20px 0px 10px;
        input{
            width: 100%;
            height: 40px;
            border: 0px;
            border-bottom: 2px solid #404346;
            padding: 0px 10px;
            :focus {
                outline: none;
            }
        }
        input[type="radio"]{
            width: 20px;
            height: 20px;
            border: 0px;
            border-bottom: 2px solid #404346;
            padding: 0px;
            margin: 0px;
        }
    }
`

const Thead = styled.thead`
    display: inline-block;
    width: 100%;
    tr{
        display: block;
        border-bottom: 5px solid #326F54;
        padding: 5px 0px;
    }
    tr > th{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        span{
            color: #CC3D3D;
        }
        h2{
            color: #326F54;
        }
    }
`
const TFoot = styled.tfoot`
    display: inline-block;
    width: 100%;
    text-align: left;
    tr{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        @media only screen and (max-width: 600px) {
            flex-direction: column;
            margin: 10px 0px;
        }
        @media only screen and (min-width: 600px) {
            flex-direction: column;
            margin:20px 0px;
        }
        @media only screen and (min-width: 768px) {
            flex-direction: row;
            margin:20px 0px;
        }
        th{
            font-weight: 600;
            width: 100px;
            span{
                color: #CC3D3D;
            }
            @media only screen and (max-width: 600px) {
                margin-bottom: 5px;
            }
            @media only screen and (min-width: 600px) {
                margin-bottom: 5px;
            }
        }
        td{
            width:100%;
            text-align: left;
            font-weight: 600;
            textarea{
                width:100%;
                resize: none;
                padding: 10px;
                min-height: 250px;
                :focus {
                outline: none;
                }
                @media only screen and (max-width: 600px) {
                    min-height: 150px !important;
                }
                @media only screen and (min-width: 600px) {
                    min-height: 150px !important;
                }
            }
            div{
                span{
                    color: black;
                    opacity:0.5;
                }
            }
        }
    }
`

const CheckBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0px;
    input{
        margin-right: 15px;
    }
`

const Button = styled.button`
    color: #404346;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #F9F0EC;
    border: 2px solid #CC3D3D;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: #CC3D3D;
        color: white;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    };
`

const AgreeBox = styled.div`
    width: 100%;
    border: 1px solid black;
    background-color: white;
    span{
        color: black;
        opacity:0.5;
    }
    h4{
        margin: 20px
    }
`

const RadioTd = styled.td`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
`
const RadioTh = styled.th`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input{
        margin-right: 8px !important;
    }
`
export default StartUpModal;