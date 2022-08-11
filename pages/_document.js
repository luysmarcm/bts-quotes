import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
				{/* <title>Next.js PWA Example</title> */}

				<link rel="manifest" href="/manifest.json" />
				<link
					href="/icon-192x192.png"
					rel="icon"
					type="image/png"
					sizes="192x192"
				/>
				<link
					href="/icon-256x256.png"
					rel="icon"
					type="image/png"
					sizes="256x256"
				/>
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				<meta name="theme-color" content="#317EFB" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
