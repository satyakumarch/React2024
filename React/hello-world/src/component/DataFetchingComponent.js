import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;



// import React from 'react';
// import useFetch from './useFetch';

// const Posts = () => {
//   const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts && posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Posts;
