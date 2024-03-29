export function setTimestamp(mm: number, yyyy: number): string {
	let result: string = '';
	let stampNumber: number = 0;
	let currentMonth: number = new Date().getMonth() + 1;
	let currentYear: number = new Date().getFullYear();

	let stampString: string = '';

	if (yyyy > currentYear || (yyyy === currentYear && mm > currentMonth)) {
		return `Invalid TimeStamp!`;
	}

	if (currentYear > yyyy || (currentYear === yyyy && currentMonth > mm)) {
		stampNumber = (currentYear - yyyy) * 12 + currentMonth - mm;

		if (stampNumber >= 12) {
			const years = Math.floor(stampNumber / 12);
			const remainingMonths = stampNumber % 12;
			stampNumber = years;

			if (years === 1) {
				if (remainingMonths >= 7) {
					result = `almost ${years + 1} years`;
				} else {
					let concatenator =
						remainingMonths > 0
							? `and ${
									remainingMonths > 1
										? `${remainingMonths} months`
										: 'month'
							  }`
							: '';
					result = `${years} year ${concatenator}`;
				}
			} else {
				result = `${years}+ years`;
			}
		} else {
			stampString = stampNumber > 1 ? 'months' : 'month';
			result = `${stampNumber} ${stampString}`;
		}
	}

	return result;
}
