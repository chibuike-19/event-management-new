export default function EventDetails() {
    return (
        <div>
            <div className="w-full h-[500px] bg-slate-400"></div>
            <div>
            <h2>Eko start-up fest 2024</h2>
            <p>The Premier Event for Innovators & Entrepreneurs Unleash your entrepreneurial spirit at Eko Startup Week, a week-long celebration of innovation, startup funding, and networking opportunities. This power-packed event is a hub for visionaries, aspiring entrepreneurs, and those seeking to connect with the thriving startup ecosystem.</p>
            </div>
            <div>
                <div>
                    <h3>EVENT'S DETAILS</h3>
                    <p><span>Date: </span>April 25, 2024</p>
                    <p><span>Time: </span>9:00am to 5:00 PM</p>
                    <p><span>Ticket: </span>$8</p>
                    <p><span>Location: </span>Nithub unilag lagos</p>

                    <div className="flex flex-row">
                        <div className="bg-[#FFEAEA]">
                            <p>Tickets sold </p>
                            <p>60/120</p>
                        </div>
                        <div className="bg=[#BEFFD3]">
                            <p>Registered </p>
                            <p>78</p>
                        </div>
                    </div>
                </div>
                <div className="QR-Code rounded-lg bg-[#F9F8F8]">

                </div>
            </div>

        </div>
    )
}