import React from 'react'

const Footer = () => {
  return (
		<footer className=" bg-black p-8 flex flex-col-reverse lg:flex lg:flex-col-2 justify-between">
			<div className="text-white text-sm text-center lg:text-left">
				<a
					target="_blank"
					href="https://bts-quotes-api.herokuapp.com/"
					className=""
					rel="noreferrer"
				>
					BTS Quotes API
				</a>
			</div>
		</footer>
	);
}

export default Footer