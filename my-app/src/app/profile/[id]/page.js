export default function UserProfile({ params }) {
    return (
        <div>
            <h1>Profile <span>{params.id}</span></h1>
        </div>
    )
}