import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App () {
 
    return (
        <section className="App">
            <TwitterFollowCard userName={"DarkOwn3r"}>
                Pablo Santana       
            </TwitterFollowCard>
            <TwitterFollowCard userName={"miguel_is_coding"}>
                Miguel Ángel       
            </TwitterFollowCard>
            <TwitterFollowCard userName={"mariags803"}>
                María Guerra       
            </TwitterFollowCard>
            <TwitterFollowCard userName={"midudev"}>
                Miguel Ángel Durán       
            </TwitterFollowCard>
            <TwitterFollowCard>    
            </TwitterFollowCard>
        </section>
    )
}