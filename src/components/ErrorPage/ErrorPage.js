import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './ErrorPage.css'

const ErrorPage = () => {

    return (
        <div className='error-page Container'>
            <FontAwesomeIcon icon={faExclamationTriangle} className='icon' />
            <p className='error-page_content'>Error: Page Not Found</p>
        </div>
    )
}

export default ErrorPage;