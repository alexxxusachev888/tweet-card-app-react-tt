import { Puff } from 'react-loader-spinner';

export const Spinner = ()=>{
    return (
        <div style={{display: 'flex', justifyContent:"center", alignItems:"center"}}>
            <Puff
                height="80"
                width="80"
                radius="9"
                color="#45a049"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                />
        </div>
    )
}