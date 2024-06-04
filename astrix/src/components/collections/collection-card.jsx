

export default function CollectionCard() {
    return (
        <div className="bg-[var(--tertiary)] flex-shrink-0 flex-grow-0 rounded-xl w-40  p-3">
            <div className="flex justify-between">
                <span className="font-medium text-[8px] bg-[var(--primary)] rounded-3xl px-2 py-[0.5px] text-white">2024</span>
                <span className="font-medium text-[8px] text-black">By Pablo</span>
            </div>
            <p className="text-xs font-medium text-center mt-5 text-black w-full">Collectible Name</p>
            <div className="h-40 w-full mt-2 border-2 rounded-xl border-[var(--primary)] overflow-hidden">
                <img className="w-full h-full object-cover" src="/profile_image.png" alt="image" />
            </div>
        </div>
    )
}