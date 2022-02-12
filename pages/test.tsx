import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function IndexPage({ time }: any) {

    return (
        <>
            <div>Server Side Props Request Time: {time}</div>
        </>
    )
}

export const getStaticProps: GetServerSideProps = async (context) => {
    const currentDateTime = new Date().getTime()
    return {
        props: {
            time: currentDateTime,
        }
    }
};
