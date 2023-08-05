import '@/app/style/light.css'
import type { NextPage, GetServerSideProps } from 'next'
import { Provider } from 'react-redux'
import Experience from '@/app/modules/Experience'
import Education from '@/app/modules/Education'
import Skills from '@/app/modules/Skills'
import UserInfo from '@/app/modules/UserInfo'
import Projects from '@/app/modules/Projects'
import Works from '@/app/modules/Works'
import Tools from '@/app/modules/Tools'
import { metadata as rootMetadata } from '@/app/layout'

export const metadata = rootMetadata

const En: NextPage<{ serverSideData: any }, any> = ({ serverSideData }: { serverSideData: any }) => {
    return (
        <div className="main flex">
            <div className="left-pannel w-1/4 min-w-[13rem] h-auto py-6 bg-slate-50 dark:bg-gray-700">
                <UserInfo />
            </div>
            <div className="right-pannel w-3/4 min-w-[39rem] h-full py-6 bg-white px-2 dark:bg-slate-800">
                <Works />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Tools />
            </div>
        </div>
    )
}

export default function EnPage() {
    return (
        // <Provider store={store}>
        <>
            <En serverSideData={null} />
        </>
        // </Provider>
    )
}
