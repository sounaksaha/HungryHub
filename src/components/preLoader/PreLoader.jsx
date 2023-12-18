import PreLoaderCSS from './PreLoader.module.css';

export default function PreLoader() {
    return (
        <>
            <div id={PreLoaderCSS.preloader}>
                <div id={PreLoaderCSS.loader}></div>
            </div>
        </>
    )
}