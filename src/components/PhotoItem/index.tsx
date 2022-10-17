import * as C from './styles';

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    return (
        <C.Container>
            <img src={url}/>
            <button onClick={()=>onDelete(name)}>Borrar</button>
        </C.Container>
    );
}