"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"https://intern-task-api.bravo68web.workers.dev/auth/login",
				{
					email,
					password,
				}
			);

			// console.log(response.data.token);

			localStorage.setItem("token", response.data.token);

			if (response.status === 200) {
				router.push("/products");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 mx-auto sm:max-w-xl sm:mx-auto">
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<h1 className="text-2xl font-bold mb-6 text-center">Log in</h1>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Password
							</label>
							<input
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
							/>
						</div>

						<button
							type="submit"
							className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
						>
							Log in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
