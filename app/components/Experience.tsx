import experience from '../api/mockinfo/experience'
import { map as _map } from 'lodash'

const Experience = () => {
    const { data } = experience || {}

    return (
        <div className="w-96 h-56 pb-6 flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-center text-slate-800 text-xs font-medium leading-none tracking-tight">Experience</div>
            <div className="self-stretch h-40 flex-col justify-start items-start flex">
                {_map(data, (item, index) => {
                    const { logo, hireDate, lastDay, companyFullname, companyAbb, jobTitle, city, Responsibilities } =
                        item || {}
                    return (
                        <div
                            key={`experience_${index}`}
                            className="self-stretch justify-center items-start gap-2 inline-flex "
                        >
                            <div className="self-stretch flex-col justify-start items-center inline-flex">
                                <div className="w-3 h-3 relative rounded-full">
                                    <div className="w-3 h-3 left-0 top-0 absolute" />
                                    <div className="w-2 h-2 p-0.5 left-[2.25px] top-[2.25px] absolute justify-center items-center inline-flex" />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch pt-0.5 justify-center items-start gap-1 flex">
                                <div className="w-28 rounded flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="self-stretch justify-start items-center gap-0.5 inline-flex">
                                        <div className="text-slate-600 text-xs font-normal tracking-tight">
                                            Sep 2010 - Jul 2013
                                        </div>
                                        <div className="w-5 self-stretch justify-start items-center gap-0.5 flex">
                                            <div className="w-1.5 h-1.5 px-px py-px justify-center items-center flex" />
                                            <div className="text-slate-500 text-xs font-normal tracking-tight">
                                                {city}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                        <div className="w-5 h-5 relative rounded shadow">
                                            <img src={logo} />
                                        </div>
                                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                                            <div className="self-stretch text-slate-500 text-xs font-normal leading-3 tracking-tight">
                                                {jobTitle}
                                            </div>
                                            <div className="self-stretch text-slate-800 text-xs font-medium leading-3">
                                                {companyAbb}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 text-slate-500 text-xs font-normal tracking-tight">
                                    {Responsibilities}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience
