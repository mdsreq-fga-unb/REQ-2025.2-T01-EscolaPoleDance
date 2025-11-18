export default function AboutSection() {
    return (
        <section
            id="about"
            className="bg-gradient-to-b from-fuchsia-pink-50 via-fuchsia-pink-100 via-fuchsia-pink-150 to-fuchsia-pink-200 flex flex-col lg:flex-row px-6 md:px-8 lg:px-[80px] pt-24 md:pt-[150px] pb-24 md:pb-[65px]"
        >
            <div className="mx-auto w-full max-w-[1200px] bg-fuchsia-pink-50 rounded-2xl shadow-sm">
                <div className="px-6 md:px-10 py-8 md:py-10">
                    <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row">
                        <img
                            src="https://placehold.co/500x500/400a48/d883ef"
                            alt=" "
                        /*className="w-[280px] h-[364px] sm:w-[320px] sm:h-[416px] md:w-[400px] md:h-[520px] lg:w-[450px] lg:h-[585px] xl:w-[500px] xl:h-[650px] rounded-3xl border border-fuchsia-pink-100 mx-auto lg:mx-0"8*/
                        />
                        <div className="lg:ml-8 mt-6 lg:mt-0 max-w-2xl">
                            <div className="hidden lg:block">
                                <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
                                    Nossa Historia
                                </h2>
                            </div>
                            <div className="mt-6 space-y-10">
                                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo quam, interdum ut lectus ac, maximus pharetra eros. Phasellus vehicula eu tellus ac consectetur. Morbi sed efficitur ipsum. Proin dignissim neque neque, eget elementum ipsum tristique et. Ut elementum diam nec dapibus maximus. Proin eleifend eu sapien vel tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas arcu libero, mollis sed imperdiet vel, dictum consequat dolor. Vestibulum augue leo, pulvinar nec vestibulum ut, porta et sem
                                    <ul>
                                        <li>primeiro item</li>
                                        <li>segundo item</li>
                                        <li>terceiro item</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row">
                        <div className="lg:ml-8 mt-6 lg:mt-0 max-w-2xl">
                            <div className="hidden lg:block">
                                <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
                                    Nossa Missao                                
                                </h2>
                            </div>
                            <div className="mt-6 space-y-10">
                                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Proin leo quam, interdum ut lectus ac, maximus pharetra eros. 
                                    Phasellus vehicula eu tellus ac consectetur. Morbi sed efficitur ipsum. 
                                    Proin dignissim neque neque, eget elementum ipsum tristique et. 
                                    Ut elementum diam nec dapibus maximus. Proin eleifend eu sapien vel tincidunt. 
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                    Maecenas arcu libero, mollis sed imperdiet vel, dictum consequat dolor. 
                                    <ul>
                                        <li>primeiro item</li>
                                        <li>segundo item</li>
                                        <li>terceiro item</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <img
                            src="https://placehold.co/500x500/400a48/d883ef"
                            alt=" "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}