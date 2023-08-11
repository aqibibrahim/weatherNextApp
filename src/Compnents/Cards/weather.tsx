import React from 'react'

interface WeatherCardProps {
	weatherData: {
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
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
	return (
		<div className="flex flex-row space-x-2">
			<div>
				<h3>
					Location:
					{weatherData.location.name}
				</h3>
			</div>
			<div>
				<h3>
					Temp:
					{weatherData.current.temp_c}°C
				</h3>
			</div>
			<div>
				<h3>
					Condition:
					{weatherData.current.condition.text}
				</h3>
			</div>
			<div>
				<h3>
					Humidity:
					{weatherData.current.humidity}
				</h3>
			</div>
		</div>
	)
}

export default WeatherCard
