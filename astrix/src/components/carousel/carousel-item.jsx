


export default function CarouseItem({ i }) {

    return (
        <div className="space-y-2">
            <h1 className="text-3xl font-bold">Lunar Palace: <br /> (ft. Kanye west)</h1>
            <div className="w-[412px] h-[630px] overflow-hidden">
                <img src={`/cc/image${i}.png`} alt="image" />
            </div>
        </div>
    )
}