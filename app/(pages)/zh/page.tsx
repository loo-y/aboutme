'use client'
import type { NextPage, GetServerSideProps } from 'next'
import { Provider } from 'react-redux'

const En: NextPage<{ serverSideData: any }, any> = ({ serverSideData }: { serverSideData: any }) => {
    return <div className="main"></div>
}

export default function EnPage() {
    return (
        // <Provider store={store}>
        <En serverSideData={null} />
        // </Provider>
    )
}
