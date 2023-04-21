import UserCard from "./userCard";

function UserList(props) {
    return props.users.map((user) => (
      <UserCard
        username={user.username}
        name={user.name}
        email={user.email}
        phone={user.phone}
        company={user.company}
        website={user.website}
        address={user.address}
      />
    ));
  }

export default UserList;




