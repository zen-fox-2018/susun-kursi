// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) {
	let seats = []
	debugger;
	for (let i = 0; i < row; i++) {
		seats.push([])
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats)
	let row = 0

	// console.log(seats, '~~~> array kosong');
	// console.log(seats.length, '~~~> length array');
	// console.log(rowSeats);
	
	
	
	for (let i = 0; i < arr.length; i++) {
		// console.log(row, '=======> row');
		
		if (row < rowSeats-1) {
			seats[row].push(arr[i])
			// console.log(seats[row], '~~~~> cek push')
			row++
		} else {
			seats[row].push(arr[i])
			// console.log(seats[row], '~~~~> cek push jika row 2')
			row = 0
		}
	}
	// console.log(seats, '~~~> setelah kondisi')
	printSeats(seats)
}

function printSeats(seats) {
	for (let i = 0; i < seats.length; i++) {
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3)