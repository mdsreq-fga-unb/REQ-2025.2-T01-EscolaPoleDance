import SignupForm from "@/components/auth/SignupForm";
import Navbar from "@/components/layout/Navbar";

export default function SignupPage() {
    return (
        <>
        <Navbar/>
            <div className="max-w-[2100px] mx-auto w-screen min-h-screen pt-20 flex">
                <div className="w-full xl:w-1/2 min-h-full bg-fuchsia-100 flex items-start md:items-center justify-center p-5">
                    <SignupForm/>
                </div>

                <div className="hidden xl:block w-1/2 min-h-full relative">
                    <img src="/example-image.jpg" alt="Imagem" className="absolute w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-fuchsia-700 opacity-80 mix-blend-darken pointer-events-none" />
                    <div className="absolute bottom-0 w-full flex">
                        <p className="text-5xl font-bold text-fuchsia-50 p-10">
                            Corpo, poder e confiança em cada movimento.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}