import { useNavigate } from "react-router-dom"
import { CheckMarkIcon } from "../../../../assets/svg/icons"
import Navbar from "../../../../components/layout/navbar"
import { Sidebar } from "../../../../components/layout/sidebar"
import { Button } from "../../../../components/ui/Button"

export const ViewSubscription = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="pl-36 pr-5 flex flex-col gap-4 md:pr-10">
                <div className="flex justify-center">
                    <h1 className="font-bold py-5 text-4xl text-[#099137]">Subscription Plans</h1>
                </div>
                <div className="flex flex-row gap-6 bg-[#F7F7F7] p-6 rounded-2xl">
                    <div className="w-1/3 bg-white border-2 border-[#E1E1E1] rounded-2xl p-5">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="bg-[#F8F7FA] rounded-full px-4 py-2 text-[#868686] font-semibold">Current Plan</h2>
                            <p className="text-[#099137]">Upgrade</p>
                        </div>
                        <h2 className="font-bold py-5 text-2xl">Free Trial</h2>
                        <div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Pay per event based on its size</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Pay from your ticket sales for no upfront cost</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Send 450 marketing emails a day</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Access all-in-one event ticketing and marketing tools </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 bg-white border-2 border-[#E1E1E1] rounded-2xl p-5">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="bg-[#F8F7FA] rounded-full px-4 py-2 text-[#868686] font-semibold">Monthly Plan</h2>
                        </div>
                        <h2 className="font-bold py-5 text-2xl">N 50,000</h2>
                        <div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Pay per event based on its size</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Pay from your ticket sales for no upfront cost</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Send 450 marketing emails a day</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Access all-in-one event ticketing and marketing tools </p>
                            </div>
                        </div>

                        <div className="py-6">
                            <Button
                                variant="contained"
                                label={
                                    <div>Upgrade Plan</div>
                                }
                                className="rounded-lg w-full"
                            // onClick={() => navigate("/view-subscription")}
                            />
                        </div>
                    </div>

                    <div className="w-1/3 bg-white border-2 border-[#E1E1E1] rounded-2xl p-5">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="bg-[#F8F7FA] rounded-full px-4 py-2 text-[#868686] font-semibold">Yearly Plan</h2>
                        </div>
                        <h2 className="font-bold py-5 text-2xl">N 100,000</h2>
                        <div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Pay per event based on its size</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Pay from your ticket sales for no upfront cost</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Send 450 marketing emails a day</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-start">
                                <CheckMarkIcon />
                                <p className="">Access all-in-one event ticketing and marketing tools </p>
                            </div>
                        </div>
                        <div className="py-6">
                            <Button
                                variant="contained"
                                label={
                                    <div>Upgrade Plan</div>
                                }
                                className="rounded-lg w-full"
                            // onClick={() => navigate("/view-subscription")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}