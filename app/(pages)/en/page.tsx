'use client'
import '../../style/light.css'
import type { NextPage, GetServerSideProps } from 'next'
import { Provider } from 'react-redux'
import Experience from '@/app/modules/Experience'
import Education from '@/app/modules/Education'
import Skills from '@/app/modules/Skills'

const En: NextPage<{ serverSideData: any }, any> = ({ serverSideData }: { serverSideData: any }) => {
    return (
        <div className="main">
            <Experience />
            <Education />
            <Skills />
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
