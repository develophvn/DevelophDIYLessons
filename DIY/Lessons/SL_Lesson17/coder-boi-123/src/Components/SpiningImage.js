const SpiningImage = ({ value, description, onClick, children }) => {
  console.log(value);
  return (
    <div>
      <img src={value} className='App-logo' alt='logo' />
      {children}
      <button onClick={onClick}>Change {description}</button>
    </div>
  );
};
export default SpiningImage;
