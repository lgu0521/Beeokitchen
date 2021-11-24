import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Label = styled.label`
font-size: 15px;
`
const Input = styled.input`
width:100%;
height: 100%;
border: 0px;
border-bottom:2px solid #175436;
padding: 10px;
font-size: 15px;
&:focus{
    outline: none;
}

`

const Select = styled.select`
width:100%;
height: 100%;
font-size: 15px;
padding: 10px;
background: url("https://eggdrop.co.kr/assets/images/common/icon_select.svg") no-repeat right 15px center/20px auto;;
-webkit-appearance: none;
border:0px;
border-bottom:2px solid #175436;
`


const Option = styled.option`
`

const Tr = styled.tr`
height: 30px;
`

const Table = styled.table`
margin: 0 auto;
`
const Button = styled.button`
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 20px 40px;
    border: 0px;
    background-color: #F9F0EC;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: #CC3D3D;
        color: white;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    };
`
const FormStyle = styled.form`
    display: inline-block;
    width: 100%;
`
const Col1 = styled.col`
    @media only screen and (max-width: 600px) {
        width: 40%;
    }

    @media only screen and (min-width: 600px) {
        width: 40%;
    }

    @media only screen and (min-width: 768px) {
        width: 50%;
    }

    @media only screen and (min-width: 992px) {
        width: 30%;
    }

    @media only screen and (min-width: 1200px) {
        width: 30%;
    }
`

const Col2 = styled.col`
    @media only screen and (max-width: 600px) {
        width: 60%;
    }

    @media only screen and (min-width: 600px) {
        width: 60%;
    }

    @media only screen and (min-width: 768px) {
        width: 50%;
    }

    @media only screen and (min-width: 992px) {
        width: 70%;
    }

    @media only screen and (min-width: 1200px) {
        width: 70%;
    }
`
const Th = styled.th`
text-align: left;
`

const Form = ({ defaultValues, children, onSubmit }: any) => {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;
    return (

        <FormStyle onSubmit={
            handleSubmit(onSubmit)
        }><Table>
                <colgroup>
                    <Col1 />
                    <Col2 />
                </colgroup>
                {
                    React.Children.map(children, (child) => {
                        return child.props.name ? (
                            <>{
                                React.createElement(child.type, {
                                    ...{
                                        ...child.props,
                                        register: methods.register,
                                        key: child.props.name
                                    }
                                })
                            }</>
                        ) : (child);
                    })
                }
            </Table></FormStyle>

    );
};

const InputForm = ({
    register,
    name,
    label,
    ...rest
}: any) => {
    return (
        <Tr>
            <Th><Label>{label}</Label></Th>
            <Th><Input {...register(name)} {...rest} /></Th>
        </Tr>
    );
};

interface OptionType {
    value: string,
    name?: string
}
interface SelectProps {
    register?: any,
    name: string,
    label: string,
    options: OptionType[],
    defaultValue?: string,
    children?: React.ReactNode

}
const SelectForm = ({
    register,
    name,
    label,
    options,
    defaultValue,
    children
}: SelectProps) => {
    return (
        <Tr>
            <Th><Label>{label}</Label></Th>
            <Th> <Select {...register(name)} defaultValue={defaultValue}>
                {
                    options.map((item, key) => {
                        return <Option value={item.value} key={key}>{item.name}</Option>
                    })
                }

            </Select></Th>
        </Tr>
    );
};

const ButtonForm = ({
    name,
    ...rest
}: any) => {
    return (
        <Tr>
            <Th colSpan={2} style={{textAlign:"center"}}>
                <Button type="submit" {...rest}>
                    {name} </Button>
            </Th>
        </Tr>
    );
};

export {
    Form,
    InputForm,
    ButtonForm,
    SelectForm
};