import { Parallax } from "react-parallax";

const Cover:React.FC = ({ img, title, subTitle }) => {
    return (
    <Parallax
    blur={{min:-15, max:15}}
    bgImage={img}
    >
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
       
      >
        <div className="flex flex-col items-center text-center bg-black/30 h-1/2 w-3/4 m-auto rounded-md">
          <div className="text-white my-auto">
          <h2 className="md:text-4xl lg:text-5xl text-2xl font-semibold mt-4">{title}</h2>
          <p className="mt-4">{subTitle}</p>
          </div>
        </div>
      </div>
      </Parallax>
    );
  };
  
  export default Cover;
  