import './HeaderComponent.css';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'


function HeaderComponent () {
    return (
        <div className="header-style"> 
            <Link to ='/favorites'> 
                <Button className='button'> Favorites </Button>
            </Link>
            <Link to ='/Main'> 
                <Button className='button'> Home </Button>
            </Link>
        </div>
    )
}

export default HeaderComponent;