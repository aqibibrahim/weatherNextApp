import React from 'react'

export interface weatherData {
	current: {
		temp_c: number
		humidity: number
		condition: {
			text: string
			icon: string
		}
	}
	location: {
		name: string
	}
}

export interface WeatherCardProps {
	weatherData: weatherData
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md w-full">
			<h2 className="text-xl font-bold text-orange-900 mb-2">{weatherData.location.name}</h2>
			<div className="flex items-center">
				<img src={weatherData.current.condition.icon} alt="Weather Icon" className="w-12 h-12 mr-4" />
				<div>
					<p className="text-2xl font-semibold">{weatherData.current.temp_c}°C</p>
					<p className="text-gray-600">{weatherData.current.condition.text}</p>
				</div>
			</div>
		</div>
	)
}

export default WeatherCard
