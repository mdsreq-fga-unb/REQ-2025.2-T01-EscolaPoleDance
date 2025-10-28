import type { ReactNode } from "react"

type publicLayoutProps = {
    children: ReactNode
}

export default function PublicLayout({ children }: publicLayoutProps) {
    return (
        // <div className="flex flex-col items-center w-4/5 mx-auto">
        <div className="w-full flex flex-col items-center">
            <div className="w-full px-4">
                {children}
            </div>
        </div>
    )
}