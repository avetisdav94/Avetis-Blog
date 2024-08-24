import React, {useEffect, useState} from 'react';

const examplePosts = [
    {
      id: 1,
      title: 'Основной пост',
      content: 'Это основной пост, который будет отображаться слева. Он содержит более подробную информацию.',
      author: 'Автор 1',
      date: '2024-08-24',
      image: 'https://via.placeholder.com/800x400', // Example image
    },
    {
      id: 2,
      title: 'Последний пост 1',
      content: 'Краткое содержание последнего поста 1.',
      author: 'Автор 2',
      date: '2024-08-23',
      image: 'https://via.placeholder.com/400x200', // Example image
    },
    {
      id: 3,
      title: 'Последний пост 2',
      content: 'Краткое содержание последнего поста 2.',
      author: 'Автор 3',
      date: '2024-08-22',
      image: 'https://via.placeholder.com/400x200', // Example image
    },
  ];


const Home = () => {
      const [posts, setPosts] = useState([]);
      useEffect(() => {
          setPosts(examplePosts)
      }, []);

const mainPost = posts[0];
const recentPosts = posts.slice(1,3);

    return (
        <div className='container mx-auto p-4'>
            <div className="flex flex-col lg:flex-row gap-4">
                {mainPost && (
                    <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img src={mainPost.image} alt={mainPost.title} className='w-full h-64 object-cover' />
                        <div className="p-4">
                            <h3 className='text-xl font-bold mb-2'>{mainPost.title}</h3>
                            <p className='text-gray-600 mb-4'>{mainPost.content}</p>
                            <div className="text-gray-500">
                                <p>{mainPost.author} | {mainPost.date}</p>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                <a
                  href='#'
                  className='bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-300'
                >
                  Читать подробнее
                </a>
              </div>
                    </div>
                )}

                <div className="flex flex-col space-y-4">
                    {recentPosts.map((post) => (
                        <div key={post.id} className='bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl'>
                            <img className='w-full h-32 object-cover' src={post.image} alt={post.title} />
                            <div className="p-4">
                                <h3 className='text-xl font-bold mb-2'>{post.title}</h3>
                                <p className='text-gray-600 mb-2'>{post.content}</p>
                                <div className="text-gray-500">
                                    <p>{post.author} | {post.date}</p>
                                </div>
                                <div className='flex justify-end'>
                  <a
                    href='#'
                    className='bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-300'
                  >
                    Читать подробнее
                  </a>
                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;