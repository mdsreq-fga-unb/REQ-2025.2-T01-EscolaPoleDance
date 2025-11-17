import { Star } from 'lucide-react';

export default function DifferencesSection() {

    return (
        <section
            id=""
            className="bg-gradient-to-r from-fuchsia-pink-50 via-fuchsia-pink-100 via-fuchsia-pink-150 to-fuchsia-pink-200 px-6 md:px-8 lg:px-[80px] pt-24 md:pt-[150px] pb-24 md:pb-[65px]"
        >
            <div>
                <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]" > 
                    O que nos faz diferente?
                </h2>
                <div className="items-center justify-center p-10 gap-6 flex flex-col lg:flex-row">
                    <div className="text-fuchsia-pink-800 ">
                        <Star />
                    </div>
                    <div className="text-fuchsia-pink-800 ">
                        <Star />
                    </div>
                    <div className="text-fuchsia-pink-800 ">
                        <Star />
                    </div>
                    <div className="text-fuchsia-pink-800 ">
                        <Star />
                    </div>
                    <div className="text-fuchsia-pink-800 ">
                        <Star />
                    </div>
                </div>
            </div>
        </section>
    );
}