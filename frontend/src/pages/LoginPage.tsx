export default function LoginPage() {
    return (
        <div className="w-screen min-h-screen flex ">
            <div className="w-1/2 min-h-screen relative">
                <img src="/example-image.jpg" alt="Imagem" className="absolute w-full h-full object-cover" />
                <div className="absolute inset-0 bg-fuchsia-700 opacity-80 mix-blend-darken pointer-events-none" />
                <div className="absolute bottom-0 w-full flex">
                    <p className="text-6xl font-bold text-zinc-100 p-10">
                        Entre e descubra a força e a confiança que só o pole dance pode te trazer.
                    </p>
            </div>
            </div>
            <div className="w-1/2 min-h-screen bg-fuchsia-50 flex items-center justify-center"></div>
        </div>
    )
}