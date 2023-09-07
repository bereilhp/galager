import GetUsername from "../../_components/_getUsername/GetUsername";

export default function UserProfile({ params }) {
  console.log(params);
  return (
    <div>
      <h1>
        Profile <span>{params.id}</span>
        <GetUsername></GetUsername>
      </h1>
    </div>
  );
}
