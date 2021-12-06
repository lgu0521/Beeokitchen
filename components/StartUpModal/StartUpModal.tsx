//이미지
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FaqCreateDTO } from "../../dto/faq-create.dto";
import { Title2, Title3, Title4 } from "../GlobalComponents";

const StartUpModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FaqCreateDTO) => {
    try {
      await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/startup-form/create",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (typeof window != null) {
        window.location.reload();
      }
    } catch (e) {
      alert("다시 시도해주세요");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Table>
          <Thead>
            <tr>
              <th>
                <Title2>기본정보</Title2>
                <Title4>
                  <span>*필수 입력사항입니다.</span>
                </Title4>
              </th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <th>
                <Title4>
                  신청자명<span>*</span>
                </Title4>
              </th>
              <td>
                <input
                  placeholder="성함을 입력해주세요"
                  {...register("title", { required: true, maxLength: 20 })}
                />
              </td>
            </tr>
            <tr>
              <th>
                <Title4>
                  생년월일<span>*</span>
                </Title4>
              </th>
              <td>
                <input
                  placeholder="생년월일을 입력해주세요"
                  {...register("title", { required: true, maxLength: 20 })}
                />
              </td>
            </tr>
            <tr>
              <th>
                <Title4>이메일</Title4>
              </th>
              <td>
                <input
                  placeholder="이메일을 입력해주세요"
                  {...register("title", { maxLength: 20 })}
                />
              </td>
            </tr>
            <tr>
              <th>
                <Title4>
                  전화번호<span>*</span>
                </Title4>
              </th>
              <td>
                <input
                  placeholder="연락처를 입력해주세요"
                  {...register("title", { required: true, maxLength: 20 })}
                />
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
                <Title4>점포창업유무</Title4>
              </th>
              <RadioTd>
                <RadioTh>
                  <input
                    type="radio"
                    {...register("open")}
                    name="open"
                    value="있음"
                  />
                  <Title4>있음</Title4>
                </RadioTh>
                <RadioTh>
                  <input
                    type="radio"
                    {...register("open")}
                    name="open"
                    value="없음"
                  />
                  <Title4>없음</Title4>
                </RadioTh>
              </RadioTd>
            </tr>
            <tr>
              <th>
                <Title4>외식업종경험</Title4>
              </th>
              <RadioTd>
                <RadioTh>
                  <input
                    type="radio"
                    {...register("experience")}
                    name="experience"
                    value="없음"
                  />
                  <Title4>있음</Title4>
                </RadioTh>
                <RadioTh>
                  <input
                    type="radio"
                    {...register("experience")}
                    name="experience"
                    value="없음"
                  />
                  <Title4>없음</Title4>
                </RadioTh>
              </RadioTd>
            </tr>
            <tr>
              <th>
                <Title4>희망오픈일자</Title4>
              </th>
              <td>
                <input
                  placeholder="희망오픈일을 입력해주세요"
                  {...register("title", { maxLength: 20 })}
                />
              </td>
            </tr>
            <tr>
              <th>
                <Title4>희망오픈지역</Title4>
              </th>
              <td>
                <input
                  placeholder="희망지역을 입력해주세요"
                  {...register("title", { maxLength: 20 })}
                />
              </td>
            </tr>
            <tr>
              <th>
                <Title4>예상사업예산</Title4>
              </th>
              <td>
                <input
                  placeholder="예산을 입력해주세요(00만원/숫자만 입력)"
                  {...register("title", { maxLength: 20 })}
                />
              </td>
            </tr>
          </Tbody>
          <TFoot>
            <tr>
              <th>
                <Title4>문의내용</Title4>
              </th>
              <td>
                <textarea />
              </td>
            </tr>
            <tr>
              <th>
                <Title4>
                  이용동의<span>*</span>
                </Title4>
              </th>
              <td>
                <AgreeBox>
                  <Title4>
                    수집하는 개인정보의 항목
                    <br />
                    <span>
                      이름, 생년월일, 이메일 , 연락처, 점포 유무,
                      외식업종운영경험, 사업예산, 희망오픈지역, 희망오픈일,
                      문의내용
                    </span>
                  </Title4>
                  <Title4>
                    개인정보의 수집 및 이용목적
                    <br />
                    <span>가맹점 개별 문의에 대한 상담</span>
                  </Title4>
                  <Title4>
                    개인정보의 보유 및 이용기간
                    <br />
                    <span>
                      보유 및 이용기간은 1년으로 하며, 기간 경과 후 가맹본부는
                      해당자료를 지체 없이 파기합니다.
                    </span>
                  </Title4>
                </AgreeBox>
                <CheckBox>
                  <input
                    type="checkbox"
                    {...register("title", { maxLength: 20 })}
                  />
                  <Title4>
                    <span>위 개인정보 수집 및 이용에 동의합니다</span>
                  </Title4>
                </CheckBox>
              </td>
            </tr>
          </TFoot>
        </Table>
        <Button>
          <Title3>제출하기</Title3>
        </Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: block;
  text-align: center;
  padding: 0px 10px;
  margin-top: 40px;
  table:nth-child(1) {
    tbody {
      th {
        @media only screen and (max-width: 600px) {
          width: 70px;
        }
        @media only screen and (min-width: 600px) {
          width: 70px;
        }
        @media only screen and (min-width: 768px) {
          width: 110px;
        }
        @media only screen and (min-width: 992px) {
          width: 100px;
        }
      }
    }
  }
  table:nth-child(2) {
    tbody {
      th {
        @media only screen and (max-width: 600px) {
          width: 90px;
        }
        @media only screen and (min-width: 600px) {
          width: 90px;
        }
        @media only screen and (min-width: 768px) {
          width: 160px;
        }
        @media only screen and (min-width: 992px) {
          width: 150px;
        }
      }
    }
  }
`;
const Table = styled.table`
  display: inline-block;
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 40px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;
const Tbody = styled.tbody`
  display: inline-block;
  width: 100%;
  margin-top: 40px;
  text-align: left;
  input {
    background: none;
  }
  tr {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (max-width: 600px) {
      width: 100%;
      margin-bottom: 10px;
    }
    @media only screen and (min-width: 600px) {
      float: left;
      width: 100%;
      margin-bottom: 20px;
    }
    @media only screen and (min-width: 768px) {
      float: left;
      width: 50%;
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: 768px) {
    tr:nth-child(2n) {
      th {
        margin-left: 20px;
      }
    }
  }
  th {
    font-weight: 600;
    span {
      color: #cc3d3d;
    }
  }
  td {
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      border: 0px;
      border-bottom: 2px solid #404346;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      :focus {
        outline: none;
      }
      letter-spacing: 0px;
      line-height: 1.4;
      @media only screen and (max-width: 600px) {
        font-size: ${(props) => props.theme.fontSizes.title7};
      }
      @media only screen and (min-width: 600px) {
        font-size: ${(props) => props.theme.fontSizes.title7};
      }
      @media only screen and (min-width: 768px) {
        font-size: ${(props) => props.theme.fontSizes.title4};
      }
      @media only screen and (min-width: 992px) {
        font-size: ${(props) => props.theme.fontSizes.title4};
      }
      @media only screen and (min-width: 1200px) {
        font-size: ${(props) => props.theme.fontSizes.title4};
      }
    }
  }
`;

const Thead = styled.thead`
  display: inline-block;
  width: 100%;
  tr {
    display: block;
    border-bottom: 5px solid #326f54;
    padding: 5px 0px;
  }
  tr > th {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    span {
      color: #cc3d3d;
    }
    h2 {
      color: #326f54;
    }
  }
`;
const TFoot = styled.tfoot`
  display: inline-block;
  width: 100%;
  text-align: left;
  tr {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      margin-bottom: 15px;
    }
    @media only screen and (min-width: 600px) {
      flex-direction: column;
      margin-bottom: 25px;
    }
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      margin-bottom: 25px;
    }
    th {
      font-weight: 600;
      width: 100px;
      span {
        color: #cc3d3d;
      }
      @media only screen and (max-width: 600px) {
        margin-bottom: 5px;
      }
      @media only screen and (min-width: 600px) {
        margin-bottom: 5px;
      }
    }
    td {
      width: 100%;
      text-align: left;
      font-weight: 600;
      textarea {
        width: 100%;
        resize: none;
        padding: 10px;
        border: 2px solid black;
        :focus {
          outline: none;
        }
        @media only screen and (max-width: 600px) {
          font-size: ${(props) => props.theme.fontSizes.title6};
          min-height: 150px;
        }
        @media only screen and (min-width: 600px) {
          font-size: ${(props) => props.theme.fontSizes.title6};
          min-height: 150px;
        }
        @media only screen and (min-width: 768px) {
          min-height: 210px;
          font-size: ${(props) => props.theme.fontSizes.title3};
        }
      }
      div {
        span {
          color: black;
          opacity: 0.5;
        }
      }
    }
  }
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input[type="checkbox"] {
    margin-right: 8px !important;
    border: 2px solid black;
    background-color: white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    margin: 0px;
  }
  input[type="checkbox"]:checked {
    appearance: none;
    background-size: cover;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/beeokitchen-env.appspot.com/o/checkBox.png?alt=media&token=5544bbd8-f4b2-49fb-8f9a-0beb0145b040");
  }
  @media only screen and (max-width: 600px) {
    margin: 10px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 10px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin: 20px 0px;
  }
`;

const Button = styled.button`
  color: #404346;
  font-weight: 800;
  text-align: center;

  background-color: #f9f0ec;
  border: 2px solid #cc3d3d;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #cc3d3d;
    color: white;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 55px;
    margin: 20px 0px 60px 0px;
  }
  @media only screen and (min-width: 600px) {
    padding: 20px 60px;
    margin: 40px 0px 80px 0px;
  }
  @media only screen and (min-width: 768px) {
    padding: 25px 65px;
    margin: 40px 0px 120px 0px;
  }
`;

const AgreeBox = styled.div`
  width: 100%;
  border: 2px solid black;
  background-color: white;
  span {
    color: black;
    opacity: 0.5;
  }
  h4 {
    margin: 20px;
  }
`;

const RadioTd = styled.td`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;
const RadioTh = styled.th`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input[type="radio"] {
    border-radius: 100%;
    border: 0px;
    background-color: #c4c4c4;
    margin-right: 8px !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    margin: 0px;
  }
  input[type="radio"]:checked {
    appearance: none;
    border-radius: 100%;
    background-color: #cc3d3d;
  }
  @media only screen and (max-width: 600px) {
    padding: 0px 0px 0px 5px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0;
  }
  @media only screen and (min-width: 768px) {
    padding: 0px 0px 0px 8px;
  }
  @media only screen and (min-width: 992px) {
    padding: 0;
  }
`;

export default StartUpModal;
