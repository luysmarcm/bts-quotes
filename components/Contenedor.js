import Image from 'next/image'
import React from 'react'
import Quotes from './Quotes'

const Contenedor = () => {
  return (
		<div className="grid grid-cols-2 p-40">
			<div className='object-center' style={{width:"35%"}}>
				<Image
					src="/imagen/bts.png"
					alt="BTS"
					width={498}
					height={1050}
					layout="responsive"
					priority
					objectFit="cover"
				/>
			</div>
			<Quotes />
		</div>
	);
}

export default Contenedor