export const GifCard = ({ img }) => {
    return (
        <div className="card flex flex-col items-center justify-between bg-white rounded-xl shadow-md w-full p-4">
            <img className="object-cover h-[200px] w-full rounded-t-xl" src={img.url} alt={img.id} />
            <p className="font-bold text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center">{img.title}</p>
        </div>
    )
}