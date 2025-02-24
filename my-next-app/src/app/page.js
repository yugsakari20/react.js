export default async function Home() {

  const res = await fetch("https://fakestoreapi.com/products");
  const posts = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dummy JSON Data</h1>
      <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="border-b py-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.category}</p>
            <img className="product-image" src={post.image} alt={post.title} />

            
          </div>
        ))}
      </div>
    </div>
  );
}
