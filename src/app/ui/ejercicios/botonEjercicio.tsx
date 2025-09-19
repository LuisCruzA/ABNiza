import Button from "../landing/button";

type BotonEjercicioProps = {
    imagen: string;
    alt: string;
    basis?: string;
    children?: React.ReactNode;
}

export default function BotonEjercicio({imagen, alt, basis="basis-48", children}: BotonEjercicioProps){
    return(
        <Button className = {`shrink ${basis} hover:pt-4 hover:pb-1 transition-all duration-200`}>
            <img src={imagen} alt={alt} className={"object-contain flex-auto"} />
            {children}
        </Button>
    )
}