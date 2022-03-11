import React from 'react'

const Header = () => {
  return (
		<nav className="bg-black px-8 py-4 flex items-center justify-between fixed z-50 w-full">
			<div className="relative flex items-center justify-between w-full">
				{/* <div style={{ width: "35px" }}>
					<Image src="/imagen/logo.png" alt="Logo" width="176" height="167" />
				</div> */}
				<div className="flex flex-row space-x-4">
					<h1
						className="px-3 py-2 rounded-md text-md lg:text-3xl text-white
					hover:text-primary"
					>
						{" "}
						<span className='text-purple-300 font-extrabold'>BTS</span> Quotes
					</h1>
					{/* <h1 className='font-medium text-3xl text-purple-300'>I Purple You💜</h1> */}
				</div>
			</div>
		</nav>
	);
}

export default Header