document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        addKhodamToTable(name);
        document.getElementById('nameInput').value = '';
    }
});

const khodams = [
    {name: 'David Petrus', image: 'assets/david.JPG'},
    {name: 'Arie Gladiator', image: 'assets/arie.JPG'},
    {name: 'Lil Advent', image: 'assets/advent.jpeg'},
    {name: 'Siluman Abut & Ambon', image: 'assets/abut.JPG'},
    {name: 'Irfan aja', image: 'assets/irfan.jpg'},
    {name: 'lebron dar', image: 'assets/lebron.jpg'},
    {name: 'yazid mie ayam', image: 'assets/yazid.jpg'},
    {name: 'adit angry bird', image: 'assets/mbon.jpg'}
];


function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; 
    }
    return hash;
}

function getKhodamByName(name) {
    const index = Math.abs(hashCode(name)) % khodams.length;
    return khodams[index];
}

function addKhodamToTable(name) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const khodam = getKhodamByName(name);
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = khodam.image;
    image.alt = khodam.name;
    image.style.width = '200px'; // Atur ukuran gambar sesuai kebutuhan
    imageCell.appendChild(image);

    const khodamNameCell = document.createElement('td');
    khodamNameCell.textContent = khodam.name;

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(khodamNameCell);

    // Add new row to the top of the table body
    tableBody.insertBefore(row, tableBody.firstChild);
}
