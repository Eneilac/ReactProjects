import { useState } from 'react';
import './Card.css'

function Card({ formatUserName, userName = 'unknown', name, avatar }) {
    const [isFollowing, setFollowing] = useState(false)

    const handleClick = () => setFollowing(value => !value);

    const toggleText = (isFollowing) => {
        return isFollowing ? 'Siguiendo' : 'Seguir';
    }

    const buttonClassName = isFollowing ? 'isFollowing' : '';



    return (
        <article>
            <header>
                <img src={avatar} alt='imagen perfil' />
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button
                    onClick={handleClick}
                    className={buttonClassName}>
                <span>{toggleText(isFollowing)}</span>
                </button>
            </aside>

        </article>
    )
}


export default Card;