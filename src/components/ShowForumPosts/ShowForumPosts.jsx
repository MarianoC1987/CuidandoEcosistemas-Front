import "./showForumPosts.css";

function ShowForumPosts(props) {
  return (
    <div className="forumArticles">
      {props.list?.map((item) => (
        <article className="article" key={item.id}>
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
