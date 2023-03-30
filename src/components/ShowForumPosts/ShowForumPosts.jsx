import "./showForumPosts.css";
import { useNavigate } from "react-router-dom";

function ShowForumPosts(props) {
  const navigate = useNavigate();

  return (
    <div className="forumArticles">
      {props.list?.map((item) => (
        <article
          className="article"
          key={item.id}
          onClick={() => {
            navigate(`viewpost/${item.id}`);
          }}
        >
          {/* <p>{item.createdAt}</p> */}
          <p>
            <b>{item.user.firstname}</b>
          </p>
          <p>
            <i>"{item.text}"</i>
          </p>
        </article>
      ))}
    </div>
  );
}

export default ShowForumPosts;
