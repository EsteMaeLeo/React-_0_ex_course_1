import PropTypes from 'prop-types'
//show variable
const newMessage = "Leo";

export const FirstApp = (props) => {
    console.log(props)
  return (
    <>
      <h1>First App { newMessage } {props.title}</h1>
      <p>First Paragraph</p>
    </>
  );
};

FirstApp.propTypes ={
    title: PropTypes.string
}