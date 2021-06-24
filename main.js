var listofImages = ["https://th.bing.com/th/id/R915a533a7cc1a7d4b806b55e87557d73?rik=VN5hL1c98RfeKA&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fdownload%2f2017_bmw_4_series_gran_coupe-2560x1440.jpg&ehk=oO84H9bXKfoHIHcvaY4bxL%2fF6zvQctXnLbBnjsoLdE0%3d&risl=&pid=ImgRaw", "https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-lamborghini-4.jpg", "https://th.bing.com/th/id/OIP.QM6c_dme4ovImokutFnU9wHaEK?pid=ImgDet&rs=1"
];
var i = 0;

function Next() {
    document.getElementById("car").src = listofImages[i];
    i++;
    if (i == 3) {i = 0};
}