'use client'
import '../../style/light.css'
import type { NextPage, GetServerSideProps } from 'next'
import { Provider } from 'react-redux'
import Experience from '@/app/components/Experience'
import Education from '@/app/components/Education'

const En: NextPage<{ serverSideData: any }, any> = ({ serverSideData }: { serverSideData: any }) => {
    return (
        <div className="main">
            <Experience />
            <Education />
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
