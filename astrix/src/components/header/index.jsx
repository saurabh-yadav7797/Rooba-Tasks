

export default function Header(){
    return (
        <header className="w-full py-4 px-9">
            <div className="flex justify-start items-center">
                <img className="h-14" src="/logo.png" alt="logo" />
                <h1 className="text-title text-4xl text-secondary">Astric</h1>
            </div>
        </header>
    )
}