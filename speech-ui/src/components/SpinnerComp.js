import Spinner from 'react-bootstrap/Spinner';
import '../style/spinner.css'
function SpinnerComp(){
  
    return (
      <div className='spinnerDiv'>
        <Spinner className="spinner" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
       
      );
}
export default SpinnerComp;