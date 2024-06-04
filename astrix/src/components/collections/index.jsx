import CollectionCard from "@/components/collections/collection-card"

export default function Collection() {
    return (
        <div className="flex flex-col">
            <p className="text-sm font-semibold">Collectibles</p>
            <div className="max-w-[600px] mt-4 flex flex-1 overflow-x-auto space-x-4 no-scroll">
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />

            </div>
        </div>
    )
}