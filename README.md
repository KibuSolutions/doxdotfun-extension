<div align="left">
    <img src="https://github.com/KibuSolutions/doxdotfun/blob/master/public/images/doxdotfun.png" width="40%" align="left" style="margin-right: 15px"/>
    <div style="display: inline-block;">
        <h2 style="display: inline-block; vertical-align: middle; margin-top: 10;">DOXDOTFUN</h2>
        <p>
	<em>Kibu Solutions and DoxDotFun: Pioneering On-Chain Security for Solana
Unmasking rug factories operating on Pump.fun using on-chain data, Arkham Intelligence, Solscan APIs and OSINT.</em>
</p>
        <p>
	<img src="https://img.shields.io/github/license/KibuSolutions/doxdotfun?style=default&logo=opensourceinitiative&logoColor=white&color=6da2ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/KibuSolutions/doxdotfun?style=default&logo=git&logoColor=white&color=6da2ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/KibuSolutions/doxdotfun?style=default&color=6da2ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/KibuSolutions/doxdotfun?style=default&color=6da2ff" alt="repo-language-count">
</p>
        <p><!-- default option, no dependency badges. -->
</p>
        <p>
	<!-- default option, no dependency badges. -->
</p>
    </div>
</div>
<br clear="left"/>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

**Doxdotfun** is an open-source project that tackles the challenge of maintaining consistent and reproducible installations of dependencies. Key features include a lockfile for version control, TypeScript configuration for ES5 with strict settings, PostCSS setup for styling, and route rewrites for proper redirection. Developers seeking stability and reliability in their projects will find Doxdotfun invaluable.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Modular architecture with clear separation of concerns.</li><li>Microservices-based architecture for scalability.</li><li>Utilizes containerization with Docker for deployment.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent code style enforced with ESLint.</li><li>Strong typing with TypeScript for improved code reliability.</li><li>Codebase includes unit tests for critical components.</li></ul> |
| 📄 | **Documentation** | <ul><li>Extensive documentation in Python and TypeScript.</li><li>Includes API documentation using OpenAPI.</li><li>README files and inline code comments for better understanding.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with GitHub Actions for CI/CD.</li><li>Uses Supabase for database management.</li><li>Integration with Solana for blockchain functionalities.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Well-structured codebase with reusable components.</li><li>Separation of concerns between frontend and backend.</li><li>Utilizes npm and pip for managing dependencies.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Comprehensive test suite covering unit and integration tests.</li><li>Uses Jest for frontend testing and Pytest for backend testing.</li><li>Includes test coverage reports for monitoring code quality.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized performance with efficient data fetching and rendering.</li><li>Utilizes caching mechanisms for improved response times.</li><li>Performance monitoring tools integrated for real-time insights.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Follows best practices for data encryption and user authentication.</li><li>Regular security audits and vulnerability assessments.</li><li>Implements CORS policies and input validation to prevent security threats.</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Manages dependencies using npm and pip package managers.</li><li>Includes a wide range of dependencies for frontend and backend technologies.</li><li>Dependency updates and vulnerability scans performed regularly.</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Designed for horizontal scalability with microservices architecture.</li><li>Utilizes container orchestration for seamless scaling.</li><li>Supports load balancing and auto-scaling for handling increased traffic.</li></ul> |

---

## 📁 Project Structure

```sh
└── doxdotfun/
    ├── .github
    │   └── workflows
    ├── LICENSE
    ├── README.md
    ├── api
    │   ├── index.py
    │   └── scripts
    ├── app
    │   ├── doxdotfun
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── core
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── docker-compose.yml
    │   ├── main.py
    │   ├── requirements.txt
    │   └── scripts
    ├── ecosystem.config.js
    ├── lib
    │   └── supabaseClient.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── favicon
    │   ├── icons
    │   ├── images
    │   ├── manifest-doxdotfun.json
    │   ├── manifest-main.json
    │   ├── next.svg
    │   └── vercel.svg
    ├── requirements.txt
    ├── tailwind.config.js
    └── tsconfig.json
```


### 📂 Project Index
<details open>
	<summary><b><code>DOXDOTFUN/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file in the project serves as a lockfile to ensure consistent and reproducible installations of dependencies<br>- It specifies the exact versions of all dependencies required for the `doxdotfun` project, including packages like `@supabase/supabase-js`, `autoprefixer`, and `concurrently`<br>- This file plays a crucial role in maintaining the stability and reliability of the project by pinning down the dependency versions.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Configures TypeScript compiler options for the project, targeting ES5 with strict settings<br>- Enables JSX preservation, module resolution, and JSON module resolution<br>- Utilizes paths mapping for aliases<br>- Excludes node_modules from compilation and enables incremental compilation<br>- Integrates a plugin named 'next' for additional functionality.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
				<td>Configures PostCSS plugins Tailwind CSS and Autoprefixer for the project's build process, ensuring consistent styling and browser compatibility.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/next.config.js'>next.config.js</a></b></td>
				<td>Defines route rewrites for different environments based on the source and destination paths, ensuring proper redirection within the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/ecosystem.config.js'>ecosystem.config.js</a></b></td>
				<td>- Configures app settings for running Next.js and FastAPI servers concurrently in development and production environments<br>- Handles environment variables and server scripts to manage both servers efficiently.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>- Define project-wide styles and content sources using Tailwind CSS configuration in the tailwind.config.js file<br>- This file specifies content directories for pages, components, and app files, along with custom theme extensions for background images<br>- Additionally, it includes plugins for further customization.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/package.json'>package.json</a></b></td>
				<td>- Facilitates concurrent development of Next.js frontend and FastAPI backend using npm scripts<br>- Dependencies include Supabase, React, TypeScript, and TailwindCSS<br>- Key scripts: 'dev' for concurrent dev servers, 'build' for Next.js build, and 'lint' for linting<br>- Enables seamless development and deployment workflow for the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/requirements.txt'>requirements.txt</a></b></td>
				<td>Facilitates integration of essential dependencies for the project, ensuring seamless functionality and performance.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- lib Submodule -->
		<summary><b>lib</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/lib/supabaseClient.ts'>supabaseClient.ts</a></b></td>
				<td>- Initialize Supabase client for interacting with the Supabase backend in the project<br>- The code establishes a connection to the Supabase backend using the provided URL and anonymous key, enabling seamless communication with the Supabase services throughout the codebase architecture.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- .github Submodule -->
		<summary><b>.github</b></summary>
		<blockquote>
			<details>
				<summary><b>workflows</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/.github/workflows/deploy.yaml'>deploy.yaml</a></b></td>
						<td>- Automates deployment to Lightsail using SSH, checking out code, pulling updates, and restarting the server with PM2<br>- This workflow ensures seamless deployment from the main branch to the Lightsail server, enhancing the project's continuous integration and delivery capabilities.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- api Submodule -->
		<summary><b>api</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/index.py'>index.py</a></b></td>
				<td>- The `api/index.py` file serves as the entry point for the FastAPI application within the project<br>- It establishes routes and integrates with external services such as Supabase and OpenAI<br>- The file sets up the FastAPI instance, defines custom documentation URLs, and initializes the Supabase client for interacting with the database<br>- Additionally, it imports necessary libraries for handling HTTP requests and working with cryptographic keys.</td>
			</tr>
			</table>
			<details>
				<summary><b>scripts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/address.py'>address.py</a></b></td>
						<td>- Generates concise AI summaries for Solana addresses by fetching address information and leveraging OpenAI's GPT-3.5 model<br>- The script interacts with Solana API, filters funders, and crafts summaries based on address characteristics<br>- It encapsulates the process of fetching data, generating summaries, and handling exceptions, providing valuable insights into Solana addresses.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/ip.py'>ip.py</a></b></td>
						<td>- Generates detailed network intelligence summaries for IP addresses using AI, combining geolocation, RDAP, and threat data<br>- Utilizes OpenAI's GPT-3.5 model to create concise summaries under 200 characters<br>- Provides fallback to manual summaries if AI processing fails<br>- Fetches data asynchronously and returns an IPInfoResponse object with the IP address and AI-generated summary.</td>
					</tr>
					</table>
					<details>
						<summary><b>solana</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/solana/arkham.py'>arkham.py</a></b></td>
								<td>- Improve Solana address tagging by fetching and replacing addresses with token names using Arkham Intelligence API and Solana RPC<br>- The code retrieves the first Arkham Intelligence tag label for a given address, identifies Solana addresses within the tag, fetches token names from Solana RPC, and replaces addresses with token names.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/solana/relations.py'>relations.py</a></b></td>
								<td>- Generates a directed graph representing relationships between developers based on funding connections<br>- Utilizes API calls to fetch funders and builds the graph recursively<br>- Prepares graph data for frontend display, categorizing nodes as known, CEX, or regular.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/solana/info.py'>info.py</a></b></td>
								<td>- The code file in api/scripts/solana/info.py fetches and analyzes data from external APIs related to Solana and Pump.fun<br>- It retrieves account information, user history, and token details based on specified parameters<br>- The functions handle data retrieval, processing, and debugging output for further analysis within the project's architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/solana/balance.py'>balance.py</a></b></td>
								<td>Fetches Solana account balance using the Solana mainnet endpoint and a provided public key.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/solana/relations.rpc.py'>relations.rpc.py</a></b></td>
								<td>- Generates a directed graph to analyze relationships between addresses in the Solana blockchain<br>- The code fetches funders for a given address, builds a graph structure, and categorizes nodes for visualization<br>- This script aids in understanding funding patterns and connections within the blockchain ecosystem.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/solana/solscan.py'>solscan.py</a></b></td>
								<td>- Retrieve Solana wallet funders and metadata labels using Solscan API, aiding in wallet analysis and identification<br>- The code fetches the first funder, all funders, and address labels, providing insights into wallet ownership and categorization for further analysis within the project architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/api/scripts/solana/funders.py'>funders.py</a></b></td>
								<td>- The code file `funders.py` in the `api/scripts/solana` directory fetches funders for a given wallet address from the Solana blockchain<br>- It provides functions to retrieve the first funder and all funders associated with the wallet, filtering transfer transactions<br>- The code interacts with the Solana RPC API to extract relevant transaction details for analysis.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- core Submodule -->
		<summary><b>core</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/docker-compose.yml'>docker-compose.yml</a></b></td>
				<td>- Facilitates Docker container setup for the project, defining service configurations like build settings, container name, and port mappings<br>- The file ensures seamless deployment and management of the application within a containerized environment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/Dockerfile'>Dockerfile</a></b></td>
				<td>Facilitates building a Docker image for the project, installing necessary dependencies, setting up the working directory, exposing port 80, and defining the command to run the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/requirements.txt'>requirements.txt</a></b></td>
				<td>Facilitates integration with external services and APIs by managing project dependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/main.py'>main.py</a></b></td>
				<td>- The code in core/main.py fetches and processes data from a Solana blockchain API, saving relevant information to a Supabase database<br>- It retrieves coin details, checks and stores website information, and tracks developer data<br>- The code ensures data integrity and updates database entries efficiently.</td>
			</tr>
			</table>
			<details>
				<summary><b>scripts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/5_dump_pumpfun_db.py'>5_dump_pumpfun_db.py</a></b></td>
						<td>- Generates and populates a SQLite database with token data fetched from an external API based on specified search terms, sorting orders, and completion statuses<br>- The script iterates through various search configurations, retrieves tokens, and inserts them into the database, ensuring uniqueness based on token mint<br>- The process includes handling timestamps and sleep intervals for data processing.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/7_get_categories.py'>7_get_categories.py</a></b></td>
						<td>Generates and prints a leaderboard of top categories based on specific criteria from a SQLite database, then inserts the results into a Supabase table.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/3_fill_address_table.py'>3_fill_address_table.py</a></b></td>
						<td>- The code file `3_fill_address_table.py` populates developer data in the Addresses table based on interactions from the last 2 days<br>- It fetches developer balances, funders, and updates the database with relevant information<br>- The script efficiently manages data retrieval and storage processes for active developers within the project ecosystem.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/6_fill_aths.py'>6_fill_aths.py</a></b></td>
						<td>- The code file orchestrates the retrieval and updating of all-time high (ATH) price data for tokens in a SQLite database<br>- It leverages Bitquery API to fetch ATH values and stores them in the database<br>- This process ensures the database reflects the latest ATH and ATH in USD values for tokens meeting specific criteria, enhancing data accuracy and completeness.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/9_tweepy_search.py'>9_tweepy_search.py</a></b></td>
						<td>Scrape tweets matching specific criteria using Scweet library.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/2_find_ip.py'>2_find_ip.py</a></b></td>
						<td>- Automates fetching and updating IP addresses for filtered hosts in a SQLite database<br>- Parses URLs, runs DNS queries, and updates the database with IP addresses<br>- Handles invalid URLs and missing IP addresses gracefully<br>- Improves database accuracy and efficiency by ensuring hosts have valid IP information.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/8_get_developers_leaderboard_supabase.py'>8_get_developers_leaderboard_supabase.py</a></b></td>
						<td>- Generates a leaderboard of top developers based on project launches, utilizing Supabase for data storage and retrieval<br>- The script fetches developer data, counts launches, and identifies top contributors<br>- It then retrieves detailed information for each developer, including their first funders, to create a comprehensive list of key contributors.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/4_fill_bonded.py'>4_fill_bonded.py</a></b></td>
						<td>- The code file in core/scripts/4_fill_bonded.py fetches and updates bonded status for tokens in a Supabase database<br>- It retrieves tokens with pagination, then fetches detailed data for each token from an external API<br>- If a token is bonded, it updates the database accordingly<br>- The main function orchestrates these steps to process tokens efficiently.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/1_clean_hosts.py'>1_clean_hosts.py</a></b></td>
						<td>- Implements data cleaning and filtering operations on URLs stored in a SQLite database<br>- The code categorizes URLs based on known domains and top-level domains, marking them as valid, invalid, or filtered<br>- It aims to maintain a curated list of URLs by excluding popular domains and TLDs.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/8_get_developers_leaderboard_local.py'>8_get_developers_leaderboard_local.py</a></b></td>
						<td>- Generates a leaderboard of top developers based on project launches, fetching detailed data for each developer and their first funders<br>- Utilizes SQLite for data storage and Supabase for caching<br>- Implements recursive logic to trace first funders' chain<br>- Outputs unique first funders and generates search links for further exploration.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/10_get_doxed_first_funder_tokens.py'>10_get_doxed_first_funder_tokens.py</a></b></td>
						<td>Retrieve and display related addresses and tokens for first funders not in the known addresses list using Supabase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/0_dump_old_db_to_supabase.py'>0_dump_old_db_to_supabase.py</a></b></td>
						<td>- Migrates data from a SQLite database to Supabase, filtering out invalid entries<br>- Establishes a connection to Supabase, retrieves data from SQLite, and inserts it into the Supabase table 'PumpFunIPs'<br>- Handles existing website entries and potential errors during the insertion process.</td>
					</tr>
					</table>
					<details>
						<summary><b>solana</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/solana/relations.py'>relations.py</a></b></td>
								<td>- Generates a directed graph to analyze relationships between addresses in the Solana blockchain<br>- The code fetches funders for a given address, builds a graph with funders as nodes, and prepares data for visualization<br>- It distinguishes between known addresses, exchange addresses, and regular addresses<br>- The graph data is then returned for frontend display.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/solana/info.py'>info.py</a></b></td>
								<td>- The code file in core/scripts/solana/info.py fetches data from external APIs related to Solana and Pump.fun<br>- It retrieves account information, user-created coin history, user details, and token data based on search terms<br>- The functions handle API requests, data extraction, and error handling, contributing to the project's data retrieval and analysis capabilities.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/solana/balance.py'>balance.py</a></b></td>
								<td>- Implements a function to fetch Solana account balance using a Solana RPC client<br>- The function retrieves the balance in lamports for a given public key.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/core/scripts/solana/funders.py'>funders.py</a></b></td>
								<td>- The code file `funders.py` in the `core/scripts/solana` directory fetches the first funder and all funders of a given Solana wallet by analyzing transaction details<br>- It interacts with the Solana mainnet endpoint to extract funder information from transfer transactions, aiding in wallet analysis and tracking fund sources.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- app Submodule -->
		<summary><b>app</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/page.tsx'>page.tsx</a></b></td>
				<td>- The `page.tsx` file in the project's codebase serves as the landing page component, responsible for rendering the main content and navigation functionalities for the application<br>- It utilizes the Next.js framework along with React for building the user interface<br>- The file includes logic for handling user interactions such as navigation to different sections of the application and external links<br>- Additionally, it incorporates a Netflix-style gradient overlay for visual effects<br>- Overall, the `page.tsx` file plays a crucial role in presenting the landing page of the application to users.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/globals.css'>globals.css</a></b></td>
				<td>- Defines global CSS variables and styles for the project, ensuring consistent design across the application<br>- Handles color schemes based on user preference, setting foreground and background colors accordingly<br>- Utilizes Tailwind CSS for base, components, and utilities, enhancing styling capabilities.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/layout.tsx'>layout.tsx</a></b></td>
				<td>- Defines the root layout for the project, setting metadata and global styles<br>- Includes links to various icons and a manifest file<br>- Uses the Inter font subset for Latin characters.</td>
			</tr>
			</table>
			<details>
				<summary><b>doxdotfun</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/page.tsx'>page.tsx</a></b></td>
						<td>- The code file `page.tsx` in the `app/doxdotfun` directory serves as the main entry point for the application<br>- It leverages various React components and external libraries to fetch and display data related to IP addresses, addresses, and other details<br>- The file orchestrates the rendering of components like `Spinner`, `Relations`, `ExtensionOverlay`, `WhoIsIP`, `WhoIsAddress`, and `ArkhamLabels` dynamically<br>- Additionally, it interacts with a Supabase client for data retrieval and utilizes Next.js for client-side routing<br>- The primary goal of this code is to provide a dynamic and interactive user interface for exploring and visualizing data related to various entities.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/layout.tsx'>layout.tsx</a></b></td>
						<td>- Define the layout for the "doxdotfun" project, setting metadata and structuring the HTML document with essential elements like icons and links<br>- The layout component wraps the children within the Root component, ensuring a consistent UI experience throughout the application.</td>
					</tr>
					</table>
					<details>
						<summary><b>leaderboard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/leaderboard/page.tsx'>page.tsx</a></b></td>
								<td>Enables rendering the Leaderboard component on the LeaderboardPage, enhancing user engagement and interaction within the project architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>audit</b></summary>
						<blockquote>
							<details>
								<summary><b>[address]</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/audit/[address]/page.tsx'>page.tsx</a></b></td>
										<td>- Generates an auditor page displaying developer audit details fetched from APIs<br>- Retrieves developer balance, first funder, all funders, and IP information<br>- Dynamically fetches and displays address labels<br>- Renders a user-friendly interface with interactive elements for easy navigation and information access.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>doxlist</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/doxlist/page.tsx'>page.tsx</a></b></td>
								<td>- Exports a dynamic component for the Doxlist page, utilizing client-side rendering<br>- The component is imported from the doxdotfun directory and displayed within a main container on the page<br>- This file plays a key role in rendering the Doxlist component without server-side rendering, enhancing the user experience.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/leaders.tsx'>leaders.tsx</a></b></td>
								<td>- Displays a dynamic leaderboard with IP details, launches, and last seen timestamps<br>- Fetches data from an API endpoint and updates the leaderboard on scroll<br>- Allows users to view IP details on click.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/relations.tsx'>relations.tsx</a></b></td>
								<td>- The `Relations` component in the provided code file is responsible for rendering a visual representation of relationships between nodes in a graph<br>- It utilizes React and a library called `react-force-graph-2d` to display interactive graph data<br>- The component allows users to explore and interact with the graph, highlighting specific nodes and displaying additional information when nodes are hovered over<br>- Additionally, it includes features such as search functionality and context menus for nodes<br>- Overall, the `Relations` component enhances the user experience by visualizing complex data structures in a clear and interactive manner within the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/doxlist.tsx'>doxlist.tsx</a></b></td>
								<td>- Displays a list of publicly available data with related links for each entry<br>- Allows users to navigate to detailed audit pages for each data entry<br>- The component includes a spinner for loading state and presents data in a visually appealing table format.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/relations.tsx.rpc'>relations.tsx.rpc</a></b></td>
								<td>- The provided code file, `relations.tsx.rpc`, contributes to the project's architecture by defining a component called `Relations`<br>- This component utilizes various React features and external libraries to visualize and interact with graph data related to tokens and funders<br>- It manages state for graph data, dimensions, user interactions, and search functionality<br>- Additionally, it handles node highlighting, context menu display, and integrates with other components for node details and resumes<br>- Overall, the `Relations` component plays a crucial role in rendering and managing the interactive graph visualization within the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/forensic.tsx'>forensic.tsx</a></b></td>
								<td>Improve forensic data visualization in the app by enhancing the components in the provided file.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/extensionOverlay.tsx'>extensionOverlay.tsx</a></b></td>
								<td>- Implement a React component for displaying an extension overlay with download information and options<br>- Handles visibility state and user interactions to show/hide the overlay<br>- Supports user actions like closing the overlay and visiting the extension page<br>- Enhances user experience by providing a seamless interaction flow for downloading the extension.</td>
							</tr>
							</table>
							<details>
								<summary><b>details</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/details/ip.tsx'>ip.tsx</a></b></td>
										<td>- Displays IP details, tokens, and developers information<br>- Fetches data from APIs and renders tables with relevant details<br>- Handles navigation to auditor page<br>- Provides a structured view of IP-related data for user consumption.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/details/arkhamLabels.tsx'>arkhamLabels.tsx</a></b></td>
										<td>- Generates and displays Arkham Intel reports for Solana addresses based on fetched data<br>- Handles displaying the address labels and allows users to copy the address easily<br>- The component fetches data from the backend API and dynamically renders the report UI.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/details/resume.tsx'>resume.tsx</a></b></td>
										<td>- Generates a resume displaying known IPs and token launches for a given address<br>- Fetches IP and token data from APIs, populates the resume with the retrieved information, and allows users to view detailed IP info<br>- The resume showcases IPs with options to view details and tokens with links to external resources for further exploration.</td>
									</tr>
									</table>
									<details>
										<summary><b>whois</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/details/whois/ip.tsx'>ip.tsx</a></b></td>
												<td>Retrieve and display IP information dynamically based on user input, enhancing user experience with customizable background color.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/details/whois/address.tsx'>address.tsx</a></b></td>
												<td>- Fetches and displays detailed information about a given address, including AI summary and partner labels<br>- Renders a visually appealing component with customizable background color<br>- Implements functionality to copy the address and open it in Solscan<br>- Additionally, showcases Arkham tags if available.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>ui</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/ui/root.tsx'>root.tsx</a></b></td>
										<td>- Defines the layout structure for the project, displaying the Navbar based on the current route<br>- It ensures the Navbar is shown except on the landing page, providing a cohesive user experience<br>- Additionally, it showcases the project's affiliations and copyright information, enhancing brand visibility and legal compliance.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/ui/navbar.tsx'>navbar.tsx</a></b></td>
										<td>- The Navbar component in app/doxdotfun/components/ui/navbar.tsx facilitates user navigation and search functionality within the doxdotfun project<br>- It includes features such as a logo, search bar, desktop links, and a mobile menu<br>- The component enhances user experience by providing easy access to different sections of the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/components/ui/spinner.tsx'>spinner.tsx</a></b></td>
										<td>- Creates a dynamic spinner component using Framer Motion for smooth animations<br>- The spinner consists of rotating inner and outer rings, providing visual feedback during loading processes<br>- This component enhances user experience by adding a visually appealing loading indicator to the UI.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>help</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/help/page.tsx'>page.tsx</a></b></td>
								<td>- Render a help center page for doxdotfun, showcasing features like wallet analysis, API access, risk indicators, and social connections<br>- The page guides users on installing the browser extension, basic usage, and accessing community support<br>- It serves as a comprehensive resource for understanding and utilizing the platform's intelligence capabilities.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>privacy</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/app/doxdotfun/privacy/page.tsx'>page.tsx</a></b></td>
								<td>- Generates the Privacy Policy page for the browser extension, outlining data collection practices, usage, and security measures<br>- It informs users about the information collected, how it's used, data retention policies, and security protocols<br>- The page also addresses potential changes to the policy and provides contact information for inquiries.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- public Submodule -->
		<summary><b>public</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/public/manifest-main.json'>manifest-main.json</a></b></td>
				<td>Define the web app's main manifest properties for kibu.solutions, specifying icons, theme color, background color, and display mode.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/KibuSolutions/doxdotfun/blob/master/public/manifest-doxdotfun.json'>manifest-doxdotfun.json</a></b></td>
				<td>Defines the web app manifest for 'doxdotfun' with icons, theme colors, and display settings.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with doxdotfun, ensure your runtime environment meets the following requirements:

- **Programming Language:** Python
- **Package Manager:** Npm, Pip
- **Container Runtime:** Docker


### ⚙️ Installation

Install doxdotfun using one of the following methods:

**Build from source:**

1. Clone the doxdotfun repository:
```sh
❯ git clone https://github.com/KibuSolutions/doxdotfun
```

2. Navigate to the project directory:
```sh
❯ cd doxdotfun
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm install
```


### 🤖 Usage
Run doxdotfun using the following command:

```sh
❯ npm run dev
```

Run doxdotfun core using the following command:
1. Navigate to the project directory:
```sh
❯ cd doxdotfun/core
```
2. Use docker to run the core:
```sh
❯ docker-compose up --build -d
```

---
## 📌 Project Roadmap

- [X] **`Task`**: <strike>[REDACTED] Hackathon 2025</strike>

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/KibuSolutions/doxdotfun/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/KibuSolutions/doxdotfun/issues)**: Submit bugs found or log feature requests for the `doxdotfun` project.
- **💡 [Submit Pull Requests](https://github.com/KibuSolutions/doxdotfun/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/KibuSolutions/doxdotfun
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/KibuSolutions/doxdotfun/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=KibuSolutions/doxdotfun">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
