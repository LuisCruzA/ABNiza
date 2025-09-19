type blockTextProps = {
    word?: string;
}

export default function BlockText({word=""}: blockTextProps){
    return(
        <div className= {`relative aspect-square`}>
            <img src="/assets/Iconos/8.png" alt="Letra" className="object-contain w-full h-full"/>
            <p className="absolute inset-0 flex items-center justify-center text-8xl text-center font-bold">{word}</p>
        </div>
    )
}