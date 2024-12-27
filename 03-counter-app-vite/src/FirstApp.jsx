import PropTypes from 'prop-types'
//show variable
const newMessage = "Leo";

//export const FirstApp = (props) => {
    export const FirstApp = ({title, subtitle}) => {  
    
  return (
    <>
      <h1>First App { subtitle } {title}</h1>
      <p>First Paragraph</p>
    </>
  );
};

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}