import PropTypes from 'prop-types'
import { GridLoader } from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
    return (
        <div
            className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
        >
            <GridLoader size={100} color='#3B8AC9' />
        </div>
    )
}

LoadingSpinner.propTypes = {
    smallHeight: PropTypes.bool,
}

export default LoadingSpinner
