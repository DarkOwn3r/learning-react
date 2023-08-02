import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName={"DarkOwn3r"} 
                name={"Pablo Santana"} />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName={"miguel_is_coding"} 
                name={"Miguel Ángel"} />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName={"mariags803"} 
                name={"María Guerra"} />
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing={false} 
                userName={"midudev"} 
                name={"Miguel Ángel Durán"} />
        </section>
    )
}