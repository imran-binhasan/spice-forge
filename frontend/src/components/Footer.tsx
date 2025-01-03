
const Footer = () => {
    return (
        <footer className="flex flex-col bg-blue-400 text-white p-2">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-2 md:border-r-2">
                    <h4>CONTACT US</h4>
                    <p>T. +123440567899</p>
                    <p>M. support@spiceforge.com</p>
                </div>
                <div className="flex flex-col items-center justify-center p-2 ">
                    <h4>ADDRESS</h4>
                    <p>Piazza Della Signoria, 12</p>
                    <p>21562 . Firenze . Italy</p>
                </div>
                <div className="flex flex-col items-center justify-center p-2 md:border-l-2">
                    <h4>OPENING HOURS</h4>
                    <p>Everyday : From 12.30 To 23.00</p>
                    <p>Kitchen Closes At 22.00</p>
                </div>
            </div>

            <div className="w-4/5 mx-auto mt-5">
                <div className="flex justify-between items-center gap-4">
                    <div className="border-solid border border-white flex-1"></div>
                    <div>SPICE FORGE</div>
                    <div className="border-solid border border-white flex-1"></div>
                </div>
                <div className="flex flex-col justify-between lg:flex-row gap-4">
                    <div className="space-x-2 text-center">
                        <a href="facebook">Facebook</a>
                        <a href="facebook">Instagram</a>
                        <a href="facebook">Whatsapp</a>
                    </div>
                    <div>
                        <p className="flex flex-col lg:flex-row text-center lg:gap-2">
                            <span>2025 CODE FORGER,</span>
                            <span> ALL RIGHTS RESERVED</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;