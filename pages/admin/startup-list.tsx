import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { StartUpFormDTO } from "../../dto/startup-form.dto";

const StartupList = (Props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const formList: StartUpFormDTO[] = Props.sendData;
    console.log(Props);
    return (
        <div>

            {formList.map((item, key) => (
                <div key={key}>
                    <p>{item.name}</p>
                    <p>{item.phonenumber}</p>
                    <p>{item.area}</p>
                    <p>{item.experience}</p>
                    <p>{item.money}</p>
                    <p>{item.openday}</p>
                </div>
            ))
            }

        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    const resData = await fetch(process.env.API_URL + "api/startup-form/getlist");
    const sendData = await resData.json();
    console.log(sendData);
    if (!sendData) {
        return {
            notFound: true
        }
    };

    return {
        props: {
            sendData
        }
    }
}

export default StartupList;