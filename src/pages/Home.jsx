import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to <span className='text-xxxxl text-purple-400 underline '>FashionHub</span></h1>
      <p className="mb-4">Choose your category:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/female" className="bg-pink-500 text-white p-4 rounded text-center font-semibold">Female Clothes</Link>
        <Link to="/male" className="bg-blue-500 text-white p-4 rounded text-center font-semibold">Male Clothes</Link>
        <Link to="/children" className="bg-green-500 text-white p-4 rounded text-center font-semibold">Children Clothes</Link>
      </div>
    </div>
  );
}
