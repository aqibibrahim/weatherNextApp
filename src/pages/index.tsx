import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard, { weatherData } from '../Compnents/Cards/weather'

export default function Home() {
	const [city, setCity] = useState<string>('')
	const [weatherData, setWeatherData] = useState<weatherData | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const fetchWeatherData = async () => {
		if (!city) return

		try {
			setLoading(true)
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_API_URL}${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`
			)
			setWeatherData(response.data)
			setLoading(false)
		} catch (error) {
			console.error(error)
			setWeatherData(null)
			setLoading(false)
		}
	}

	// if (!weatherData) {
	// 	return <p>Loading...</p>
	// }

	return (
		<>
			<div className="flex justify-center items-center h-screen flex-col">
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Current Weather App</h5>

					<div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						<input
							type="text"
							className="border p-2 w-full mb-2"
							placeholder="Enter city name"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<button
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={fetchWeatherData}
						disabled={loading}
					>
						{loading ? 'Please Wait...' : 'Get Weather'}

						<svg
							className="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</button>
					<div className="mt-4 flex flex-wrap">
						{weatherData ? <WeatherCard weatherData={weatherData} /> : <p>No location found</p>}
					</div>
				</div>
			</div>
		</>
	)
}
