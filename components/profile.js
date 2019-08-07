import { siteMeta } from "../blog.config"
import Link from "next/link"

const Profile = () => (
    <div className="h-card profile">
        <img
            className="u-photo"
            src="/static/avatar.png"
            alt={siteMeta.author}
        />

        <div>
            <p>
                Hi, I'm <Link href="/about">{siteMeta.author}</Link>
            </p>
            <p className="p-note">
                I'm a fullstack engineer and an aspiring digital minimalist.
            </p>
        </div>
        <style jsx>{`
            .profile {
                display: flex;
                align-items: center;
                padding: 1em;
                background-color: #eee;
            }

            img {
                width: 5em;
                height: 5em;
                margin-right: 0.5em;
            }

            p:last-child {
                margin-bottom: 0;
            }
        `}</style>
    </div>
)

export default Profile
