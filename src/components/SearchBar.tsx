interface SearchBarProps {
	searchTerm : string,
	setSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({searchTerm, setSearchTerm}: SearchBarProps) {
  return (
    <div className="flex justify-center">
				<input
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={setSearchTerm}
					className="bg-slate-200 p-4 w-[1100px] mt-4 h-10 rounded-md border-none"
				/>
			</div>
  )
}
