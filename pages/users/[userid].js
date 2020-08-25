import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Conatiner from "../../components/Container";
const User = ({ data }) => {
  const router = useRouter();
  const { userid } = router.query;
  return (
    <Conatiner>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={data.avatar}
                alt="profile pic"
                style={{ borderRadius: "50%" }}
              />
              <div className="card-body">
                <h3>
                  {data.id}. {data.first_name} {data.last_name}
                </h3>
                <p>Email: {data.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Conatiner>
  );
};

User.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.userid}`);
  const resjson = await res.json();
  return {
    data: resjson.data,
  };
};

export default User;
