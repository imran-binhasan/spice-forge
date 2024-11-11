
const SectionTitle:React.FC = ({subTitle,title}) => {
    return (
        <div className="md:w-3/12 w-2/5 mx-auto my-5 space-y-2">
            <p className="border-b-2 pb-1  md:text-sm text-xs text-yellow-400 text-center">--- {subTitle} ---</p>
            <h3 className="border-b-2 md:text-2xl text-sm text-center">{title}</h3>
        </div>
    );
};

export default SectionTitle;