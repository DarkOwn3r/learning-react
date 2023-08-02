export function TwitterFollowCard ({ userName, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`} 
                    alt={`el avatar de ${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Follow</button>
            </aside>
        </article>
    )
}