export function HeroCard({ title, imgUrl, size }: { title: string, imgUrl: string, size: number }) {
    return (
        <div className={`flex-${size} h-60 bg-amber-400 rounded-2xl bg-cover bg-center overflow-hidden cursor-pointer hover:scale-102 transition-all`} style={{ backgroundImage: `url('${imgUrl}')` }}>
            <div className="flex w-full h-full justify-start items-end p-6 bg-linear-to-b from-foreground/0 to-background">
                <strong>{title}</strong>
            </div>
        </div>
    )
}