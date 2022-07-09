
import Modal from './Modal';




function Whiskey() {
	const whiskies = [
		{
						name: 'Johnny Walker Blue Label',
						category: "Blended",
						age: "No statement",
						priceRange: "Top Shelf"
		},
		{
						name: 'Monkey Shoulder',
						category: "Blended",
						age: "No statement",
						priceRange: "Average"
		},
		{
						name: 'Jameson and sons',
						category: "Irish",
						age: "No statement",
						priceRange: "Average"
		},
		{
						name: 'Chivas Regal',
						category: "Blended",
						age: "12 years",
						priceRange: "Average"
		}
	]


  return (	
	<div className='bg-amber-800 min-h-screen prose lg:prose-xl min-w-full'>
	<h1 className='text-center text-white'>Whiskies</h1>
		{whiskies.map((whiskey) => (		
			<Modal key={whiskey.name} name={whiskey.name} category={whiskey.category} age={whiskey.age} priceRange={whiskey.priceRange} />
		))}
	</div>

  );
}

export default Whiskey