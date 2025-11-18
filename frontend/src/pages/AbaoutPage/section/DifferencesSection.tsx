import { Star } from 'lucide-react';

export default function DifferencesSection() {

    return (
        <section
            id=""
            className="bg-gradient-to-r from-fuchsia-pink-50 via-fuchsia-pink-100 via-fuchsia-pink-150 to-fuchsia-pink-200 px-6 md:px-8 lg:px-[80px] pt-24 md:pt-[40px] pb-24 md:pb-[65px]"
        >
            <div>
                <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]" >
                    O que nos faz diferente?
                </h2>
                <div className="items-center justify-center p-10 gap-6 flex flex-col lg:flex-row">
                    <div className="flex-shrink-0 relative flex flex-col items-center justify-center p-10 gap-2">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-fuchsia-pink-500 aspect-square rounded-full flex items-center justify-center mb-2">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-fuchsia-pink-100 ">
                                <Star />
                            </div>
                        </div>
                        <h3 className="text-fuchsia-pink-900 text-lg lg:text-xl font-bold leading-none mb-2 text-center">
                            Exemplo
                        </h3>
                    </div>
                    <div className="flex-shrink-0 relative flex flex-col items-center justify-center p-10 gap-2">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-fuchsia-pink-500 aspect-square rounded-full flex items-center justify-center mb-2">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-fuchsia-pink-100 ">
                                <Star />
                            </div>
                        </div>
                        <h3 className="text-fuchsia-pink-900 text-lg lg:text-xl font-bold leading-none mb-2 text-center">
                            Exemplo
                        </h3>
                    </div>
                    <div className="flex-shrink-0 relative flex flex-col items-center justify-center p-10 gap-2">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-fuchsia-pink-500 aspect-square rounded-full flex items-center justify-center mb-2">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-fuchsia-pink-100 ">
                                <Star />
                            </div>
                        </div>
                        <h3 className="text-fuchsia-pink-900 text-lg lg:text-xl font-bold leading-none mb-2 text-center">
                            Exemplo
                        </h3>
                    </div>
                    <div className="flex-shrink-0 relative flex flex-col items-center justify-center p-10 gap-2">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-fuchsia-pink-500 aspect-square rounded-full flex items-center justify-center mb-2">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-fuchsia-pink-100">
                                <Star />
                            </div>
                        </div>
                        <h3 className="text-fuchsia-pink-900 text-lg lg:text-xl font-bold leading-none mb-2 text-center">
                            Exemplo
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}