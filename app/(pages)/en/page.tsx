'use client'
import type { NextPage, GetServerSideProps } from 'next'
import { Provider } from 'react-redux'
import Experience from '@/app/components/Experience'

const En: NextPage<{ serverSideData: any }, any> = ({ serverSideData }: { serverSideData: any }) => {
    return (
        <div className="main">
            <Experience />
        </div>
    )
}

export default function EnPage() {
    return (
        // <Provider store={store}>
        <En serverSideData={null} />
        // </Provider>
    )
}
