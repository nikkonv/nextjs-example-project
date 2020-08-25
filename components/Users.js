import Router from "next/router";

const Users = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.users.map((user) => {
          return (
            <li
              className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
              key={user.id}
              onClick={(e) =>
                Router.push("/users/[userid]", `/users/${user.id}`)
              }
              style={{ cursor: "pointer" }}
            >
              <div>
                <h5>
                  {user.first_name} {user.last_name}
                </h5>
                <p>{user.email}</p>
              </div>
              <img
                src={user.avatar}
                width="60"
                height="60"
                alt="profile picture"
                style={{ borderRadius: "50%" }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
