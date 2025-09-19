import BlockText from "./blockText";

type nestedBlocksProps = {
    words?: string[];
}

export default function NestedBlocks({ words = ["", "", "", ""] }: nestedBlocksProps) {
    const columns = `grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))]`;
    const nestarray = words.map((word, index) => (<BlockText word={word} key={index} />));
    return (
        <div className={`${columns} place-items-center gap-2 p-8`}>
            {nestarray}
        </div>
    );
}