function addAlert(message) {
  var currentDate = new Date();
  var options = { year: "numeric", month: "long", day: "numeric" };
  var formattedDate = currentDate.toLocaleDateString("id-ID", options);

  var alertItem = `
                <a class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                        <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div class="small text-gray-500">${formattedDate}</div>
                        <span class="font-weight-bold">${message}</span>
                    </div>
                </a>
            `;

  var alertsDropdown = document.getElementById("alertsDropdownMenu");
  alertsDropdown.insertAdjacentHTML("afterbegin", alertItem);

  updateAlertCounter();
}

function updateAlertCounter() {
  var alertCounter = document.getElementById("alertCounter");
  var alertsDropdown = document.getElementById("alertsDropdownMenu");
  var alertCount =
    alertsDropdown.getElementsByClassName("dropdown-item").length - 1; // Mengurangi 1 untuk "Show All Alerts"

  alertCounter.innerText = `${alertCount}+`;
}

// Contoh penggunaan
document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan beberapa alert untuk contoh
  addAlert("Update Terbaru");
});

document.addEventListener("DOMContentLoaded", function () {
  var ctx1 = document.getElementById("palmOilChartOctober").getContext("2d");

  // Data manual untuk jam
  var dailyHours = [
    0, 2, 2, 2, 2, 2, 4, 6, 9, 8, 0, 5, 3, 0, 4, 9, 7, 7, 3, 8, 7, 7, 0, 0, 8,
    9, 9, 9, 7, 4, 9,
  ];

  // Hitung total jam
  var totalHours = dailyHours.reduce((acc, val) => acc + val, 0);

  var palmOilChart = new Chart(ctx1, {
    type: "bar", // Jenis grafik (bar, line, pie, dll.)
    data: {
      labels: Array.from({ length: 31 }, (_, i) => i + 1), // Label sumbu X dari 1 hingga 31
      datasets: [
        {
          label: "Income", // Label dataset
          data: dailyHours, // Data manual untuk jam
          backgroundColor: "#4e72df", // Warna latar belakang batang
          borderColor: "#005a1f", // Warna batas batang
          borderWidth: 0, // Lebar batas batang
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Date", // Judul sumbu X
          },
        },
        y: {
          title: {
            display: true,
            text: "Hours", // Judul sumbu Y
          },
          beginAtZero: true, // Mulai sumbu Y dari nol
          max: 12, // Batas maksimal sumbu Y
        },
      },
    },
  });

  // Menampilkan total jam di bawah grafik
  var totalHoursElement = document.getElementById("totalHoursOctober");
  totalHoursElement.textContent = `Total Hours for the Month: ${totalHours}`;
});

document.addEventListener("DOMContentLoaded", function () {
  var ctx1 = document.getElementById("palmOilChartNovember").getContext("2d");

  // Data manual untuk jam
  var dailyHours = [
    0, 0, 8, 8, 8, 8, 8, 2, 8, 8, 9, 9, 10, 2, 10, 3, 9, 9, 4, 8, 9, 8, 8, 2, 1,
    4, 0, 3, 4, 10,
  ];

  // Hitung total jam
  var totalHours = dailyHours.reduce((acc, val) => acc + val, 0);

  var palmOilChart = new Chart(ctx1, {
    type: "bar", // Jenis grafik (bar, line, pie, dll.)
    data: {
      labels: Array.from({ length: 30 }, (_, i) => i + 1), // Label sumbu X dari 1 hingga 30
      datasets: [
        {
          label: "Income", // Label dataset
          data: dailyHours, // Data manual untuk jam
          backgroundColor: "#4e72df", // Warna latar belakang batang
          borderColor: "#005a1f", // Warna batas batang
          borderWidth: 0, // Lebar batas batang
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Date", // Judul sumbu X
          },
        },
        y: {
          title: {
            display: true,
            text: "Hours", // Judul sumbu Y
          },
          beginAtZero: true, // Mulai sumbu Y dari nol
          max: 12, // Batas maksimal sumbu Y
        },
      },
    },
  });

  // Menampilkan total jam di bawah grafik
  var totalHoursElement = document.getElementById("totalHoursNovember");
  totalHoursElement.textContent = `Total Hours for the Month: ${totalHours}`;
});

document.addEventListener("DOMContentLoaded", function () {
  var ctx1 = document.getElementById("palmOilChartDecember").getContext("2d");

  // Data manual untuk jam
  var dailyHours = [4, 8, 0];

  // Hitung total jam
  var totalHours = dailyHours.reduce((acc, val) => acc + val, 0);

  var palmOilChart = new Chart(ctx1, {
    type: "bar", // Jenis grafik (bar, line, pie, dll.)
    data: {
      labels: Array.from({ length: 30 }, (_, i) => i + 1), // Label sumbu X dari 1 hingga 30
      datasets: [
        {
          label: "Income", // Label dataset
          data: dailyHours, // Data manual untuk jam
          backgroundColor: "#4e72df", // Warna latar belakang batang
          borderColor: "#005a1f", // Warna batas batang
          borderWidth: 0, // Lebar batas batang
        },
      ],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: "Date", // Judul sumbu X
          },
        },
        y: {
          title: {
            display: true,
            text: "Hours", // Judul sumbu Y
          },
          beginAtZero: true, // Mulai sumbu Y dari nol
          max: 12, // Batas maksimal sumbu Y
        },
      },
    },
  });

  // Menampilkan total jam di bawah grafik
  var totalHoursElement = document.getElementById("totalHoursDecember");
  totalHoursElement.textContent = `Total Hours for the Month: ${totalHours}`;
});

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var img = document.getElementById("brandImage");
var modalImg = document.getElementById("fullImage");

// When the user clicks on the image icon iz, open the modal
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src; // Use the same source as the clicked image
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks outside the image, close the modal
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

//  aniamsi pada judul halaman
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Programer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Content Creator";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Helper";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

const updateTextContent = (elementSelector, textContent) => {
  const element = document.querySelector(elementSelector);
  if (element) {
    setTimeout(() => {
      element.textContent = textContent;
    }, 0);
  }
};

const elements = [
  { selector: ".januari-dua", text: "January" },
  { selector: ".februari-dua", text: "February" },
  { selector: ".maret-dua", text: "March" },
  { selector: ".april-dua", text: "April" },
  { selector: ".mei-dua", text: "May" },
  { selector: ".juni-dua", text: "June" },
  { selector: ".juli-dua", text: "July" },
  { selector: ".agustus-dua", text: "August" },
  { selector: ".september-dua", text: "September" },
  { selector: ".oktober-dua", text: "October" },
  { selector: ".november-dua", text: "November" },
  { selector: ".desember-dua", text: "December" },

  { selector: ".judul-dua", text: "Profile" },
  { selector: ".dashboard-dua", text: "Dashboard" },
  { selector: ".laporan-dua", text: "Laporan" },
  { selector: ".gallery-dua", text: "Gallery" },
];

elements.forEach((item) => {
  updateTextContent(item.selector, item.text);
  setInterval(() => updateTextContent(item.selector, item.text), 4000);
});
