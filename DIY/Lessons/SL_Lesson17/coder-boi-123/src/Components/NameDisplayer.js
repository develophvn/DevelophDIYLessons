const NameDisplayer = (props) => {
    const name = props.name;
    return (
      <p>
        <span style={{ color: "red" }}>Hello</span> {name}
      </p>
    )  
  }

export default NameDisplayer;