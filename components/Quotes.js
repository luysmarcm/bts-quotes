import { useState, useEffect } from "react";

const Quotes = () => {

    const [quote, setquote] = useState([]);
	const [info, setinfo] = useState([])

    const consultarApi = async () =>{
        const api1 = await fetch(
					"https://bts-quotes-api.herokuapp.com/quote/random"
				);
		const api2 = await fetch("https://bts-quotes-api.herokuapp.com/quotes");
        const frase = await api1.json()
		const info = await api2.json()
        setquote(frase);
		console.log(info)
    }

    // const consultarApi2 = async () =>{
    //     const api2 = await fetch(
	// 				"https://bts-quotes-api.herokuapp.com/quote/id/7"
	// 			);
    //     const fraseV = await api2.json()
    //     console.log(fraseV)        
    // }

    useEffect( () =>{
        consultarApi()
    }, []);
    console.log(quote);
  return (
		<div className="">
			<div className="space-y-5">
				<div className="text-3xl text-white font-bold">{quote.quote}</div>
				<div className="text-xl text-purple-400 font-bold">{quote.member}</div>
				<div className="space-x-3">
					<button
						className=" rounded-md p-4 font-semibold px-4 py-2.5 text-center inline-flex items-center space-x-3 btn-grad"
						onClick={consultarApi}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
						New Quote
					</button>
					<button
						className="rounded-md p-4 font-semibold px-4 py-2.5 text-center inline-flex items-center space-x-3 btn-grad"
						onClick={consultarApi}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
						<a
							className="twitter-share-button"
							href={`https://twitter.com/intent/tweet?text=${quote.quote}%20-${quote.member}`}
							target="_blank"
							rel="noreferrer"
						>
							Tweet
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Quotes