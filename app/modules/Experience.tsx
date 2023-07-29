import experience from '../api/mockinfo/experience'
import { map as _map } from 'lodash'

const Experience = () => {
    const { data } = experience || {}

    return (
        <div className="experience-module">
            <div className="p-4 w-full flex-col justify-start items-start gap-4 inline-flex  min-w-[35rem]">
                <div className="text-center text-slate-800 text-3xl font-medium leading-none tracking-tight">
                    Experience
                </div>
                <div className="self-stretch flex-col justify-start items-start pt-2 flex pb-2">
                    {_map(data, (item, index) => {
                        const {
                            logo,
                            hireDate,
                            lastDay,
                            companyFullname,
                            companyAbb,
                            jobTitle,
                            city,
                            Responsibilities,
                        } = item || {}
                        return (
                            <div
                                key={`experience_${index}`}
                                className="self-stretch justify-center items-start gap-2 inline-flex  mb-5 last:mb-0"
                            >
                                <div className="self-stretch flex-col justify-start items-center inline-flex">
                                    <div className="w-3 h-3 relative rounded-full">
                                        <div className="w-3 h-3 left-0 top-0 absolute">
                                            <img src="/misc/dot_04_l.svg" className="w-4 relative top-0 h-4" />
                                        </div>
                                        <div className="w-2 h-2 p-0.5 left-[2.25px] top-[2.25px] absolute justify-center items-center inline-flex" />
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 self-stretch pt-0.5 justify-center items-start gap-1 flex">
                                    <div className=" min-w-[10rem] text-xs">
                                        <div className="">
                                            <div className="text-slate-600 text-xs font-normal tracking-tight float-left">
                                                Sep 2010 - Jul 2013
                                            </div>
                                            {city ? (
                                                <div className="float-right ml-2">
                                                    <div className="inline w-1.5 h-1.5 px-px py-px justify-center items-center relative bottom-[2px]">
                                                        <img src={'/misc/location.svg'} className="inline w-4 h-4" />
                                                    </div>
                                                    <div className="inline text-slate-500 text-xs font-normal tracking-tight">
                                                        {city}
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="self-stretch justify-start items-start gap-2 inline-flex w-full mt-2">
                                            <div className="w-5 h-5 relative rounded shadow">
                                                <img src={logo} />
                                            </div>

                                            <div className="grow shrink basis-0 flex-col justify-end items-start gap-0.5 inline-flex ml-6">
                                                <div className="self-stretch text-slate-500 text-xs font-normal leading-3 tracking-tight">
                                                    {jobTitle}
                                                </div>
                                                <div className="self-stretch text-slate-800 text-xs font-medium leading-3">
                                                    {companyAbb}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-10 grow shrink basis-0 text-slate-500 text-xs font-normal tracking-tight ">
                                        <div className="float-right">{Responsibilities}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience
