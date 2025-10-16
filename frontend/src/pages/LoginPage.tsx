export default function LoginPage() {
    return (
        <div className="max-w-[2100px] mx-auto w-screen min-h-screen flex ">

            <div className="hidden xl:block w-1/2 min-h-screen relative">
                <img src="/example-image.jpg" alt="Imagem" className="absolute w-full h-full object-cover" />
                <div className="absolute inset-0 bg-fuchsia-700 opacity-80 mix-blend-darken pointer-events-none" />
                <div className="absolute bottom-0 w-full flex">
                    <p className="text-5xl font-bold text-fuchsia-50 p-10">
                        Entre e descubra a força e a confiança que só o pole dance pode te trazer.
                    </p>
                </div>

            </div>

            <div className="w-screen xl:w-1/2 min-h-screen bg-fuchsia-50 flex items-center justify-center">
                <div className="w-50 h-50 bg-amber-300"></div>
            </div>

        </div>
    )
}