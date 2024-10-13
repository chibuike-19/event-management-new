import { Table } from "antd"
import bgWallet from "../../../assets/images/bgWlallet.svg"
import { ArrowRight, BgWallet, FidelityBank, GuarantyTrustBank, ZenithBank } from "../../../assets/svg/icons"
import Navbar from "../../../components/layout/navbar"
import { Sidebar } from "../../../components/layout/sidebar"
import WalletCard from "../../../components/ui/WalletCard"
import { walletCardData } from "../../../data-helpers/client-data"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button"


export const ClientWallet = () => {
    const FinanceData = [
        {
            key: "1",
            Events: "Eko fashion week",
            AmountEarned: "₦ 4,000,000",
            NumberofPeople: 500,
        },
        {
            key: "2",
            Events: "Ominiverse 2030",
            AmountEarned: "₦ 3,000,000",
            NumberofPeople: 600,
        },
        {
            key: "3",
            Events: "The Carven gaming competition",
            AmountEarned: "₦ 9,000,000",
            NumberofPeople: 450,
        },
        {
            key: "4",
            Events: "EA sports konami fund raiser ",
            AmountEarned: "₦ 9,000,000",
            NumberofPeople: 120,
        },
    ]

    const Financecolumns = [
        {
            title: "Events",
            dataIndex: "Events",
            key: "Events",
        },
        {
            title: "AmountEarned",
            dataIndex: "AmountEarned",
            key: "AmountEarned",
        },
        {
            title: "NumberofPeople",
            dataIndex: "NumberofPeople",
            key: "NumberofPeople",
        },
    ]
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="pl-36 pr-5 flex flex-row gap-4">
                <div className="w-[75%]">
                    <div
                        className="relative w-full  bg-no-repeat bg-contain"
                        // style={{ backgroundImage: `url('/src/assets/images/bgWallet.svg')` }}
                        style={{ backgroundImage: `url(${bgWallet})` }}
                    >
                        <div className="relative z-10 text-white p-10 font-bold text-2xl">
                            <h4> Available Balance</h4>
                            <h1 className="text-7xl">50,000,000</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 xl:gap-8 py-7">
                        {walletCardData.map((card) => (
                            <WalletCard
                                name={card.name}
                                amount={card.amount}
                                icon={card.icon}
                                color={card.color}
                                bg={card.bgColor}
                            />
                        ))}
                    </div>

                    <div>
                        <section className="space-y-6 mb-6 py-4">
                            <div>
                                <h2 className="text-xl font-semibold pt-4">Finance History</h2>
                                <h5 className="text-[14px]">See total capital generated</h5>
                            </div>
                            <div className="overflow-x-auto">
                                <Table
                                    columns={Financecolumns}
                                    dataSource={FinanceData}
                                    pagination={false}
                                />
                            </div>
                        </section>
                    </div>
                </div>

                <div className="w-[25%] space-y-12">
                    <div className="rounded-2xl border-[#EDEDED] border">
                        <div className="flex flex-row justify-between items-center px-5 py-3">
                            <h2>Subscription</h2>
                            <div>
                                <Button
                                    variant="text"
                                    label={
                                        <ArrowRight />
                                    }
                                    className="rounded-full"
                                    onClick={() => navigate("/view-subscription")}
                                />
                            </div>
                        </div>
                        <div className="border-b-[#EDEDED] border-y px-5 py-3">
                            <h3 className="text-[#868686] pb-3">Free trail</h3>
                            <p className="text-[12px]">Provide access to create your events, seamless logistics, email marketing for events.
                            </p>
                        </div>
                        <div className="border-b-[#EDEDED] border-y px-5 py-3">
                            <h3 className="text-[#868686] pb-3">Monthly </h3>
                            <p className="text-[11px]">Provide access to create your events, seamless logistics, email marketing for events.

                            </p>
                        </div>
                        <div className=" px-5 py-3">
                            <h3 className="text-[#868686] pb-3">Yearly</h3>
                            <p className="text-[11px]">Provide access to create your events, seamless logistics, email marketing for events.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl p-3 border-[#EDEDED] border space-y-4">
                        <div>
                            <h2 className="text-xl font-semibold pt-4">Withdraw</h2>
                            <h5 className="text-[14px] pt-2">Available balance: <span className="font-bold">₦ 50,000,000/h5</span></h5>
                        </div>
                        <h5 className="text-[14px] font-bold">Withdrawal amount</h5>
                        <h3 className="px-4 py-2 rounded-lg font-bold border border-[#EDEDED] w-fit">₦ 10,000,000</h3>
                        <h5 className="text-[14px] font-bold">Banks</h5>

                        <div className="flex flex-row gap-4">
                            <div><ZenithBank /></div>
                            <div><FidelityBank /></div>
                            <div><GuarantyTrustBank /></div>
                        </div>
                        <button className="rounded-full bg-[#099137] px-5 py-2 text-white">Credit Bank</button>
                    </div>
                </div>
            </div>
        </div>
    )
}