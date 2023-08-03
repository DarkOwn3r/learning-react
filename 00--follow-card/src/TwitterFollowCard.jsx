import { useState  } from "react"

export function TwitterFollowCard ({ userName = 'unknown', children = 'unknown'}) {

    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing ? 'Following' : 'Follow'

    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`} 
                    alt={`el avatar de ${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="state">{text}</span>
                    <span className="unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}