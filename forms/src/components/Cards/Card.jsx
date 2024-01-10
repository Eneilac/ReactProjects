import { useEffect, useState } from 'react';
import './Card.css'
import { Pencil, Trash } from '../../constants/icons'

function Card() {
    const format = (userName) => `@${userName}`; //funcion que formatea el texto
    const [profiles, setProfiles] = useState(null);
    const [visibleProfiles, setVisibleProfiles] = useState(null);


    /**
     * El hook realiza la peticion cuando el componente se monta.
     */
    useEffect(() => {
        if (profiles === null) {
            fetch("https://randomuser.me/api/?results=5") //traigo solo 5 perfiles
                .then(response => response.json())
                .then(data => {
                    setProfiles(data.results);
                    setVisibleProfiles(data.results);
                }
                )
                .catch(error => {
                    console.error(error);
                })
        }

    }, [profiles])

    const handleDelete = (index) => {
        const newVisibleProfiles = visibleProfiles.filter((_, i) => i !== index);
        setVisibleProfiles(newVisibleProfiles);
    };

    return (
        <div className="card">
            <button className='boton'>Añadir</button>
            {visibleProfiles &&
                visibleProfiles.map((profile, index) => (
                    <div key={index}>
                        <article>
                            <header>
                                <img src={profile.picture.thumbnail} alt='imagen perfil' />
                                <div>
                                    <strong>{profile.name.first}</strong>
                                    <span>{format(profile.name.first)}</span>
                                </div>
                            </header>

                            <aside>
                                <div onClick={() => handleDelete(index)} className='icon'>
                                    <Trash />
                                </div>
                                <div className='icon'>
                                    <Pencil />
                                </div>
                            </aside>
                        </article>
                    </div>
                ))}
        </div>
    )
}


export default Card;