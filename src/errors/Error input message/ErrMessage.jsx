// eslint-disable-next-line react/prop-types
const ErrMessage = ({ msg }) => {
  return (
   msg ? <span
      className={`text-red-700 ml-3 font-semibold `}
     // @ts-ignore
     
    > {msg} </span> : null
  );
};

export default ErrMessage ;
