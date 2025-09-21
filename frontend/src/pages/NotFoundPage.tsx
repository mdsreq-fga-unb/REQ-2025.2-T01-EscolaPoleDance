import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-3">
                    <span className="text-5xl md:text-6xl">😕</span>
                    <span className="text-2xl md:text-4xl">Página não encontrada</span>
                </div>
                <Button className="w-full sm:w-auto">
                    <Link to="/">Voltar para inicio</Link>
                </Button>
            </div>
            </div>
    )
} 