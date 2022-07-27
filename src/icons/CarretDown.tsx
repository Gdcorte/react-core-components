import { FunctionComponent } from "react"


const CarretDownIcon:FunctionComponent = ({
    ...props
})=> {

    return(
        <svg {...props}
            xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" 
            fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512.02 319.26"
        >
            <path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z"/>
        </svg>
    )
}

export default CarretDownIcon