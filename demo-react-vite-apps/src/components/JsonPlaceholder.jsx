import { useState } from "react";

export default function JsonPlaceholder() {
    const [allPosts,setAllPosts] = useState([]);
  function handleClick() {
    let baseUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(baseUrl)
      .then((res) => res.json())
      .then(
        (data)=> {
            console.log(data);
            setAllPosts([...data]);
        }
      );
  }
  let mappedBody = allPosts.map((eachPost) => (
    <tr key={eachPost.id}>
    <td>{eachPost.id}</td>
    <td>{eachPost.title}</td>
    <td>{eachPost.userId}</td>
    <td>{eachPost.body}</td>
    </tr>
  ));
  return (
    <>
      <div className="container m-2">
        <button onClick={handleClick} className="btn btn-warning">
          Click
        </button>
        {allPosts.length > 0 &&(
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th >ID</th>
              <th>TITLE</th>
              <th>User ID</th>
              <th>POST</th>
            </tr>
          </thead>
          <tbody>{mappedBody}</tbody>
        </table>)}
      </div>
    </>
  );
}
